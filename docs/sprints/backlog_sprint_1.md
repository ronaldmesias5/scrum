# Sprint 1 - Backlog Scrum
## Autenticación: Creación de Cuentas e Inicio de Sesión

**Scrum Master:** Andrés Gil  
**Sprint:** 1  
**Duración:** 15 días  
**Equipo:** Ronald (Arquitecto), Santiago (Bases de Datos), Andrés (Scrum Master)

---

## 📊 Estado de las Historias - Sprint 1

| Historia Pendiente | Historia en Desarrollo | Historia Terminada |
|:---|:---|:---|
| HU-002 - Validación y Activación de Cuentas | | HU-001 - Creación de Cuentas de Usuario |
| HU-004 - Recuperación de Contraseñas | | HU-003 - Inicio de Sesión |
| HU-006 - Creación de Catálogo | | |
| HU-009 - Visualización de Catálogo | | |
| HU-010 - Consulta de Catálogo | | |
| HU-011 - Sistema de Filtrado | | |
| HU-012 - Realización de Pedidos | | |
| HU-014 - Consulta de Estado de Pedidos | | |
| HU-015 - Actualización de Estado de Producción | | |
| HU-016 - Gestión de Inventario | | |
| HU-022 - Asignación de Tareas de Producción | | |
| HU-024 - Reporte de Avances | | |
| HU-029 - Módulo de Notificaciones | | |
| HU-030 - Alertas al Jefe | | |
| HU-025 - Confirmación de Finalización de Tareas | | |
| HU-026 - Notificación al Jefe de Tareas Completadas | | |
| HU-031 - Reportes de Pedidos | | |
| HU-033 - Suma de Producción | | |

---

## 📋 Historias de Usuario - Sprint 1

### HU-001: Creación de Cuentas de Usuario
**Prioridad:** Alta | **Story Points:** 8

Como usuario nuevo, Quiero crear una cuenta en el sistema, Para poder acceder a las funciones de la plataforma.

**Criterios de Aceptación:**
- [x] El usuario puede registrarse con email y contraseña
- [x] El sistema valida que el email sea único
- [x] El sistema valida que la contraseña sea fuerte (mín 8 caracteres, mayúscula, número, símbolo)
- [x] La cuenta se crea activa
- [x] Se muestra mensaje de error si los datos son inválidos

**Tareas:**
- [x] Backend: Crear endpoint POST /api/auth/register
- [x] Backend: Implementar validación de email único
- [x] Backend: Implementar validación de contraseña fuerte
- [x] Frontend: Crear componente RegisterForm
- [x] Frontend: Integrar cliente API de registro
- [x] Database: Crear tabla usuarios con campos necesarios
- [x] Testing: Pruebas unitarias de validaciones

---

### HU-003: Inicio de Sesión
**Prioridad:** Alta | **Story Points:** 5

Como usuario registrado, Quiero iniciar sesión con mi email y contraseña, Para acceder a mi cuenta.

**Criterios de Aceptación:**
- [x] El usuario puede iniciar sesión con credenciales válidas
- [x] El sistema genera token JWT tras login exitoso
- [x] El usuario obtiene error si credenciales son incorrectas
- [x] La sesión permanece activa 
- [x] El usuario puede cerrar sesión (logout)

**Tareas:**
- [x] Backend: Crear endpoint POST /api/auth/login
- [x] Backend: Implementar autenticación JWT
- [x] Backend: Crear endpoint POST /api/auth/logout
- [x] Frontend: Crear componente LoginForm
- [x] Frontend: Implementar context de autenticación
- [x] Frontend: Guardar token en localStorage
- [x] Testing: Pruebas de flujo de autenticación

---

---

## Resumen de Sprint 1

- [x] HU-001: Registro de usuarios completado y probado end-to-end
- [x] HU-003: Login y autenticación JWT completados y probados
- [x] Documentación y pruebas realizadas

**Creado por:** Andrés Gil (Scrum Master)
