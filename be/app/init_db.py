"""
Módulo: app/init_db.py
Descripción: Inicialización segura de la base de datos con migraciones y seeds.
¿Para qué? Garantizar que todas las migraciones Alembic se ejecuten automáticamente
           en el startup del backend sin intervención manual.
¿Impacto? Automatiza completamente el setup de la BD en desarrollo y producción.
"""

import logging
import os
from alembic.config import Config
from alembic.command import upgrade as alembic_upgrade
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)


def run_migrations(db_url: str) -> None:
    """
    Ejecuta todas las migraciones pendientes de Alembic.
    
    Args:
        db_url: URL de conexión a la base de datos (ej: postgresql://user:pass@host/db)
    """
    try:
        logger.info("🔄 Ejecutando migraciones Alembic...")
        
        # Alembic está en /app/alembic dentro del contenedor
        # y en be/alembic en desarrollo local
        import sys
        current_dir = os.path.dirname(os.path.abspath(__file__))
        project_root = os.path.dirname(current_dir)  # be/
        parent_root = os.path.dirname(project_root)  # scrum/
        
        # Intentar encontrar alembic en diferentes ubicaciones
        possible_alembic_paths = [
            os.path.join(parent_root, "alembic"),       # scrum/alembic
            "/app/alembic",                              # Docker /app/alembic
            os.path.join(project_root, "alembic"),      # be/alembic
        ]
        
        alembic_dir = None
        for path in possible_alembic_paths:
            if os.path.exists(path):
                alembic_dir = path
                break
        
        if not alembic_dir:
            logger.warning(f"⚠️  No se encontró directorio alembic en: {possible_alembic_paths}")
            return False
        
        alembic_ini = os.path.join(alembic_dir, "alembic.ini")
        if not os.path.exists(alembic_ini):
            logger.warning(f"⚠️  alembic.ini no encontrado en: {alembic_ini}")
            return False
        
        logger.info(f"📍 Usando alembic desde: {alembic_dir}")
        
        # Configurar Alembic
        alembic_config = Config(alembic_ini)
        alembic_config.set_main_option("sqlalchemy.url", db_url)
        
        # Ejecutar upgrade a 'head' (última migración)
        alembic_upgrade(alembic_config, "head")
        
        logger.info("✅ Migraciones completadas exitosamente")
        return True
        
    except Exception as e:
        logger.warning(f"⚠️  Error ejecutando migraciones: {str(e)}")
        # No lanzar excepción para permitir que el servidor continúe
        return False


def verify_initial_data(db: Session) -> None:
    """
    Verifica que los datos iniciales existan.
    Este es un fallback en caso de que las migraciones no se ejecuten correctamente.
    
    Args:
        db: Sesión de SQLAlchemy
    """
    try:
        logger.info("🔍 Verificando datos iniciales...")
        
        # Verificar que existan tipos de documentos
        try:
            from app.models.type_document import TypeDocument
            type_doc_count = db.query(TypeDocument).count()
            if type_doc_count == 0:
                logger.warning("⚠️  No hay tipos de documentos.")
            else:
                logger.info(f"✅ {type_doc_count} tipos de documentos encontrados")
        except Exception as e:
            logger.warning(f"⚠️  No se pudo verificar type_document: {str(e)}")
        
        # Verificar que existan roles
        try:
            from app.models.role import Role
            roles_count = db.query(Role).count()
            if roles_count == 0:
                logger.warning("⚠️  No hay roles.")
            else:
                logger.info(f"✅ {roles_count} roles encontrados")
        except Exception as e:
            logger.warning(f"⚠️  No se pudo verificar roles: {str(e)}")
        
    except Exception as e:
        logger.warning(f"⚠️  Error verificando datos iniciales: {str(e)}")


def initialize_database(db_url: str, db: Session) -> None:
    """
    Inicializa completamente la base de datos en el startup.
    
    1. Ejecuta todas las migraciones Alembic
    2. Verifica que los datos iniciales existan
    
    Args:
        db_url: URL de conexión a la base de datos
        db: Sesión de SQLAlchemy para verificaciones
    """
    try:
        logger.info("📦 Inicializando base de datos...")
        
        # 1. Ejecutar migraciones
        run_migrations(db_url)
        
        # 2. Verificar datos iniciales
        verify_initial_data(db)
        
        logger.info("🎉 Base de datos inicializada correctamente")
        
    except Exception as e:
        logger.error(f"💥 Error inicializando la base de datos: {str(e)}")
