# Arquitectura del Proyecto - Sistema de Gestión y Producción de Calzado - CALZADO J&R

**Arquitecto:** Ronald Guerrero

---

## Stack Tecnológico General

### Backend

| Tecnología | Descripción |
|-----------|-----------|
| **Python 3.12+** | Lenguaje de programación principal |
| **FastAPI** | Framework web API REST asincrónica |
| **SQLAlchemy 2.0** | ORM (Object-Relational Mapping) |
| **Alembic** | Migraciones de base de datos |
| **JWT** | Manejo de tokens para autenticación |

### Frontend

| Tecnología | Descripción |
|-----------|-----------|
| **React 18+** | Librería de interfaz de usuario |
| **Vite** | Herramienta de build moderna |
| **TypeScript** | Superset de JavaScript con tipado estático |
| **TailwindCSS 4+** | Framework CSS utilitario |

### Base de Datos

| Tecnología | Descripción |
|-----------|-----------|
| **PostgreSQL 17+** | Sistema de gestión de base de datos relacional |
| **Docker Compose** | Orquestación de contenedores |

### Testing

| Capa | Herramientas | Descripción |
|-----|-------------|-----------|
| **Backend** | pytest + httpx | Testing unitario e integración en Python |
| **Frontend** | Vitest + Testing Library | Testing unitario y de componentes en React |

---

## Estructura del Proyecto

```
scrum/
│
├── 📚 docs/                 # Documentación Scrum
│   ├── historias_de_usuario.md      # 14 historias detalladas
│   ├── plan_de_trabajo.md           # Plan de 10 sprints
│   ├── arquitectura_proyecto.md     # Stack tecnológico
│   └── sprints/                     # Backlogs por sprint
│       ├── backlog_sprint_1.md
│       ├── backlog_sprint_2.md
│       └── ... (hasta sprint_10.md)
│
├── 🚀 be/                           # Backend - FastAPI + Python
│   ├── app/
│   │   ├── modules/                 # 📦 Módulos (feature-based)
│   │   │   ├── auth/                # 🔐 Autenticación
│   │   │   │   ├── routers/
│   │   │   │   │   └── auth.py
│   │   │   │   ├── services/
│   │   │   │   │   └── auth_service.py
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   ├── admin/               # 👨‍💼 Administración
│   │   │   │   ├── routers/
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   ├── users/               # 👤 Gestión de Usuarios
│   │   │   │   ├── routers/
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   ├── type-document/       # 📋 Tipos de Documento
│   │   │   │   ├── routers/
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   ├── dashboard-jefe/      # 👨‍💼 Dashboard Jefe (Sprint 3+)
│   │   │   │   ├── routers/
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   ├── dashboard-empleados/ # 👷 Dashboard Empleados (Sprint 7+)
│   │   │   │   ├── routers/
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   ├── dashboard-clientes/  # 🛒 Dashboard Clientes (Sprint 4+)
│   │   │   │   ├── routers/
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── schemas/
│   │   │   │
│   │   │   └── landing/             # 🏠 Página Inicial (Sprint 3)
│   │   │       ├── routers/
│   │   │       ├── services/
│   │   │       ├── models/
│   │   │       └── schemas/
│   │   │
│   │   ├── shared/                  # 🔄 Recursos Compartidos
│   │   │   ├── models/              # Modelos base
│   │   │   ├── schemas/             # Schemas globales
│   │   │   ├── utils/
│   │   │   │   ├── security.py
│   │   │   │   ├── validators.py
│   │   │   │   └── email.py
│   │   │   ├── exceptions/
│   │   │   │   └── custom_exceptions.py
│   │   │   └── dependencies.py
│   │   │
│   │   ├── config.py                # Configuración global
│   │   ├── database.py              # Conexión a BD
│   │   └── main.py                  # Punto de entrada
│   │
│   ├── tests/                       # Tests unitarios e integración
│   ├── alembic/                     # Migraciones de BD
│   ├── requirements.txt             # Dependencias Python
│   └── Dockerfile
│
├── 💻 fe/                           # Frontend - React + TypeScript
│   ├── src/
│   │   ├── modules/                 # 📦 Módulos (feature-based)
│   │   │   ├── auth/                # 🔐 Autenticación (Sprint 1-2)
│   │   │   │   ├── pages/
│   │   │   │   │   ├── LoginPage.tsx
│   │   │   │   │   ├── RegisterPage.tsx
│   │   │   │   │   ├── ForgotPasswordPage.tsx
│   │   │   │   │   ├── ResetPasswordPage.tsx
│   │   │   │   │   └── ChangePasswordPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   ├── RegisterForm.tsx
│   │   │   │   │   └── PasswordForm.tsx
│   │   │   │   ├── services/
│   │   │   │   │   └── authService.ts
│   │   │   │   └── hooks/
│   │   │   │       └── useAuth.ts
│   │   │   │
│   │   │   ├── landing/             # 🏠 Página Inicial (Sprint 3)
│   │   │   │   ├── pages/
│   │   │   │   │   └── LandingPage.tsx
│   │   │   │   └── components/
│   │   │   │       ├── Hero.tsx
│   │   │   │       ├── Features.tsx
│   │   │   │       └── CatalogPreview.tsx
│   │   │   │
│   │   │   ├── dashboard-jefe/      # 👨‍💼 Dashboard Jefe (Sprint 3+)
│   │   │   │   ├── pages/
│   │   │   │   │   ├── DashboardPage.tsx
│   │   │   │   │   ├── ClientsPage.tsx
│   │   │   │   │   ├── ProductsPage.tsx
│   │   │   │   │   └── OrdersPage.tsx
│   │   │   │   └── components/
│   │   │   │       ├── ClientValidation/
│   │   │   │       ├── ProductCatalog/
│   │   │   │       ├── OrderManagement/
│   │   │   │       └── Stats/
│   │   │   │
│   │   │   ├── dashboard-empleados/ # 👷 Dashboard Empleados (Sprint 7+)
│   │   │   │   ├── pages/
│   │   │   │   │   ├── DashboardPage.tsx
│   │   │   │   │   ├── TasksPage.tsx
│   │   │   │   │   └── ProductionPage.tsx
│   │   │   │   └── components/
│   │   │   │       ├── TaskList/
│   │   │   │       ├── TaskDetail/
│   │   │   │       └── ProgressTracker/
│   │   │   │
│   │   │   └── dashboard-clientes/  # 🛒 Dashboard Clientes (Sprint 4+)
│   │   │       ├── pages/
│   │   │       │   ├── DashboardPage.tsx
│   │   │       │   ├── CatalogPage.tsx
│   │   │       │   ├── OrdersPage.tsx
│   │   │       │   └── OrderDetailPage.tsx
│   │   │       └── components/
│   │   │           ├── Catalog/
│   │   │           │   ├── ProductCard.tsx
│   │   │           │   ├── SearchFilter.tsx
│   │   │           │   └── ProductGrid.tsx
│   │   │           ├── Orders/
│   │   │           │   ├── OrderForm.tsx
│   │   │           │   ├── OrderList.tsx
│   │   │           │   └── OrderStatus.tsx
│   │   │           └── Favorites/
│   │   │               └── FavoritesList.tsx
│   │   │
│   │   ├── shared/                  # 🔄 Recursos Compartidos
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   └── AuthLayout.tsx
│   │   │   │   └── ui/
│   │   │   │       ├── Button.tsx
│   │   │   │       ├── Input.tsx
│   │   │   │       ├── Alert.tsx
│   │   │   │       ├── Modal.tsx
│   │   │   │       └── LoadingSpinner.tsx
│   │   │   ├── services/
│   │   │   │   ├── api/
│   │   │   │   │   ├── auth.ts
│   │   │   │   │   ├── axios.ts
│   │   │   │   │   └── type-documents.ts
│   │   │   │   └── storage.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   ├── useApi.ts
│   │   │   │   └── useLocalStorage.ts
│   │   │   ├── context/
│   │   │   │   ├── AuthContext.tsx
│   │   │   │   └── authContextDef.ts
│   │   │   ├── types/
│   │   │   │   ├── auth.ts
│   │   │   │   ├── user.ts
│   │   │   │   ├── product.ts
│   │   │   │   └── order.ts
│   │   │   └── styles/
│   │   │       └── index.css
│   │   │
│   │   ├── App.tsx                  # Componente raíz
│   │   └── main.tsx                 # Punto de entrada
│   │
│   ├── public/                      # Archivos estáticos
│   ├── package.json                 # Dependencias Node
│   ├── vite.config.ts               # Configuración Vite
│   ├── tsconfig.json                # Configuración TypeScript
│   ├── Dockerfile
│   └── nginx.conf
│
├── 🗄️ db/                           # Base de Datos
│   ├── init/                        # Scripts de inicialización SQL
│   │   ├── 01_create_tables.sql
│   │   ├── 02_triggers_and_indexes.sql
│   │   └── 99_seed_type_documents.sql
│   └── postgres/                    # Volumen persistente
│
├── docker-compose.yml               # Orquestación de contenedores
├── .env.example                     # Variables de ejemplo
├── .gitignore                       # Archivos ignorados
├── README.md                        # Guía principal
├── ESTRUCTURA_MODULAR.md            # Documentación de estructura
├── GUIA_RAPIDA.md                  # Referencia rápida
└── PROYECTO_STATUS.md              # Estado del proyecto

```

---

## Arquitectura Modular - Backend y Frontend

### Backend (Feature-Based Modules)

El backend está organizado en módulos por feature, cada uno con sus propias capas:

**Estructura de un módulo:**
```
be/app/modules/{nombre}/
├── routers/       # Endpoints FastAPI
├── services/      # Lógica de negocio
├── models/        # Modelos SQLAlchemy
└── schemas/       # Schemas Pydantic
```

**Módulos principales:**
- **auth/** - Autenticación, login, registro, recuperación de contraseña
- **admin/** - Funciones administrativas
- **dashboard-jefe/** - Panel de administrador con gestión de clientes, productos, pedidos
- **dashboard-empleados/** - Panel de empleados con tareas y producción
- **dashboard-clientes/** - Panel de clientes con catálogo y pedidos
- **landing/** - Página pública de inicio

**Shared (recursos comunes):**
```
be/app/shared/
├── models/        # Modelos base (User, Role, etc)
├── schemas/       # Schemas globales
├── utils/         # Funciones reutilizables (security, email, validators)
├── exceptions/    # Excepciones personalizadas
└── dependencies.py # Dependencias inyectadas
```

---

### Frontend (Feature-Based Modules)

El frontend también está organizado en módulos por feature, con estructura consistente:

**Estructura de un módulo:**
```
fe/src/modules/{nombre}/
├── pages/         # Componentes de página
├── components/    # Componentes reutilizables del módulo
├── services/      # Llamadas a API del módulo
└── hooks/         # Hooks personalizados del módulo
```

**Módulos principales:**

#### 🔐 Module Auth (Sprints 1-2)
- **LoginPage** - Página de inicio de sesión
- **RegisterPage** - Página de registro
- **ForgotPasswordPage** - Solicitar recuperación
- **ResetPasswordPage** - Resetear contraseña
- **ChangePasswordPage** - Cambiar contraseña
- Componentes: LoginForm, RegisterForm, PasswordForm
- Servicios: authService.ts
- Hooks: useAuth.ts

#### 🏠 Module Landing (Sprint 3)
- **LandingPage** - Página principal pública
- Componentes: Hero, Features, CatalogPreview

#### 👨‍💼 Module Dashboard Jefe (Sprints 3, 6, 10)
- **DashboardPage** - Vista principal
- **ClientsPage** - Gestión de clientes
- **ProductsPage** - Catálogo de productos
- **OrdersPage** - Gestión de pedidos
- Componentes: ClientValidation, ProductCatalog, OrderManagement, Stats

#### 👷 Module Dashboard Empleados (Sprints 7, 9)
- **DashboardPage** - Vista principal
- **TasksPage** - Mis tareas
- **ProductionPage** - Reporte de producción
- Componentes: TaskList, TaskDetail, ProgressTracker

#### 🛒 Module Dashboard Clientes (Sprints 4, 5)
- **DashboardPage** - Vista principal
- **CatalogPage** - Catálogo de productos
- **OrdersPage** - Mis pedidos
- **OrderDetailPage** - Detalle de pedido
- Componentes:
  - Catalog: ProductCard, SearchFilter, ProductGrid
  - Orders: OrderForm, OrderList, OrderStatus
  - Favorites: FavoritesList

**Shared (recursos comunes):**
```
fe/src/shared/
├── components/    # Componentes reutilizables (UI, Layout)
├── services/      # Servicios globales (API client, storage)
├── hooks/         # Hooks reutilizables (useAuth, useApi)
├── context/       # Contextos globales (AuthContext)
├── types/         # Tipos TypeScript compartidos
└── styles/        # Estilos globales CSS
```

---

## Ventajas de la Arquitectura Modular

✅ **Escalabilidad** - Agregar nuevos módulos es simple
✅ **Mantenibilidad** - Código organizado y fácil de encontrar
✅ **Reutilización** - Compartir código mediante `shared/`
✅ **Independencia** - Módulos independientes sin acoplamiento
✅ **Sincronización** - Backend y Frontend con misma estructura
✅ **Claridad por Sprint** - Cada sprint tiene un módulo claro
