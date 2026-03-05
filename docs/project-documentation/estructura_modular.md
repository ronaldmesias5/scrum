# 📁 Estructura Modular del Proyecto

## Backend - Arquitectura por Features (Módulos Verticales)

```
be/app/
│
├── modules/                          # Módulos funcionales (features)
│   │
│   ├── auth/                         # 🔐 Autenticación (HU-001, HU-003, HU-004, HU-002)
│   │   ├── routers/
│   │   │   └── auth.py              # Endpoints: /api/v1/auth/*
│   │   ├── services/
│   │   │   └── auth_service.py      # Lógica de autenticación
│   │   ├── models/                  # Modelos SQLAlchemy de auth
│   │   └── schemas/                 # Schemas Pydantic de auth
│   │
│   ├── admin/                        # 👨‍💼 Administración (HU-002)
│   │   ├── routers/
│   │   │   └── admin.py             # Endpoints administrativos
│   │   ├── services/
│   │   ├── models/
│   │   └── schemas/
│   │
│   ├── users/                        # 👤 Gestión de Usuarios
│   │   ├── routers/
│   │   │   └── users.py
│   │   ├── services/
│   │   ├── models/
│   │   └── schemas/
│   │
│   ├── type-document/                # 📋 Tipos de Documento
│   │   ├── routers/
│   │   │   └── type_document.py
│   │   ├── services/
│   │   ├── models/
│   │   └── schemas/
│   │
│   ├── dashboard-jefe/               # 👨‍💼 Dashboard Jefe (Sprint 3+)
│   │   ├── routers/
│   │   │   └── dashboard.py         # Endpoints de jefe
│   │   ├── services/
│   │   │   ├── client_service.py
│   │   │   ├── product_service.py
│   │   │   └── order_service.py
│   │   ├── models/
│   │   └── schemas/
│   │
│   ├── dashboard-empleados/          # 👷 Dashboard Empleados (Sprint 7+)
│   │   ├── routers/
│   │   │   └── dashboard.py
│   │   ├── services/
│   │   │   ├── task_service.py
│   │   │   └── production_service.py
│   │   ├── models/
│   │   └── schemas/
│   │
│   ├── dashboard-clientes/           # 🛒 Dashboard Clientes (Sprint 4+)
│   │   ├── routers/
│   │   │   ├── catalog.py           # Endpoints de catálogo
│   │   │   ├── orders.py            # Endpoints de pedidos
│   │   │   └── dashboard.py         # Endpoints del dashboard
│   │   ├── services/
│   │   │   ├── catalog_service.py
│   │   │   ├── order_service.py
│   │   │   └── search_service.py
│   │   ├── models/
│   │   └── schemas/
│   │
│   └── landing/                      # 🏠 Página de Inicio (Sprint 3)
│       ├── routers/
│       │   └── landing.py           # Endpoints públicos
│       ├── services/
│       │   └── catalog_service.py   # Catálogo público
│       ├── models/
│       └── schemas/
│
├── shared/                           # 🔄 Recursos Compartidos
│   ├── models/                       # Modelos base (User, Role, etc)
│   ├── schemas/                      # Schemas globales
│   ├── utils/
│   │   ├── security.py              # JWT, password hashing
│   │   ├── validators.py            # Validaciones comunes
│   │   └── email.py                 # Envío de emails
│   ├── exceptions/
│   │   └── custom_exceptions.py     # Excepciones personalizadas
│   ├── dependencies.py              # Dependencias compartidas
│   └── middleware.py                # Middleware global
│
├── config.py                         # Configuración global
├── database.py                       # Conexión a BD
└── main.py                           # Punto de entrada (FastAPI app)
```

---

## Frontend - Arquitectura Modular por Features

```
fe/src/
│
├── modules/                          # Módulos funcionales
│   │
│   ├── auth/                         # 🔐 Autenticación (Sprint 1-2)
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── ForgotPasswordPage.tsx
│   │   │   ├── ResetPasswordPage.tsx
│   │   │   └── ChangePasswordPage.tsx
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── PasswordForm.tsx
│   │   ├── services/
│   │   │   └── authService.ts
│   │   └── hooks/
│   │       └── useAuth.ts
│   │
│   ├── landing/                      # 🏠 Página Inicial (Sprint 3)
│   │   ├── pages/
│   │   │   └── LandingPage.tsx
│   │   └── components/
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       └── CatalogPreview.tsx
│   │
│   ├── dashboard-jefe/               # 👨‍💼 Dashboard Jefe (Sprint 3+)
│   │   ├── pages/
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── ClientsPage.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   └── OrdersPage.tsx
│   │   └── components/
│   │       ├── ClientValidation/
│   │       ├── ProductCatalog/
│   │       ├── OrderManagement/
│   │       └── Stats/
│   │
│   ├── dashboard-empleados/          # 👷 Dashboard Empleados (Sprint 7+)
│   │   ├── pages/
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── TasksPage.tsx
│   │   │   └── ProductionPage.tsx
│   │   └── components/
│   │       ├── TaskList/
│   │       ├── TaskDetail/
│   │       └── ProgressTracker/
│   │
│   └── dashboard-clientes/           # 🛒 Dashboard Clientes (Sprint 4+)
│       ├── pages/
│       │   ├── DashboardPage.tsx
│       │   ├── CatalogPage.tsx
│       │   ├── OrdersPage.tsx
│       │   └── OrderDetailPage.tsx
│       └── components/
│           ├── Catalog/
│           │   ├── ProductCard.tsx
│           │   ├── SearchFilter.tsx
│           │   └── ProductGrid.tsx
│           ├── Orders/
│           │   ├── OrderForm.tsx
│           │   ├── OrderList.tsx
│           │   └── OrderStatus.tsx
│           └── Favorites/
│               └── FavoritesList.tsx
│
├── shared/                           # 🔄 Recursos Compartidos
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── AuthLayout.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Alert.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   └── ProtectedRoute.tsx
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── auth.ts
│   │   │   ├── axios.ts          # Cliente HTTP
│   │   │   └── type-documents.ts
│   │   └── storage.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useApi.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── authContextDef.ts
│   │
│   ├── types/
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── product.ts
│   │   └── order.ts
│   │
│   └── styles/
│       └── index.css
│
├── App.tsx                           # Componente raíz
└── main.tsx                          # Punto de entrada
```

---

## 🎯 Ventajas de esta Arquitectura

### 1. **Modularidad Vertical (Feature-Based)**
- Cada módulo es independiente
- Fácil de escalar y mantener
- Todo lo relacionado a una feature en un lugar

### 2. **Separación de Responsabilidades**
- Backend: Cada módulo tiene sus propias capas (routers, services, models, schemas)
- Frontend: Cada módulo tiene sus propias páginas, componentes y servicios

### 3. **Reutilización**
- `shared/` contiene todo lo reutilizable
- Evita duplicación de código

### 4. **Organización Clara por Sprint**
- Sprint 1-2: `auth/`
- Sprint 3: `landing/`, `dashboard-jefe/`
- Sprint 4: `dashboard-clientes/`
- Sprint 5: `dashboard-clientes/`
- Sprint 7: `dashboard-empleados/`
- etc.

---

## 📊 Mapeo Sprint → Módulo

| Sprint | Backend Módulo | Frontend Módulo | Historias |
|--------|---|---|---|
| 1-2 | `auth/` | `auth/` | HU-001, HU-003, HU-004, HU-002 |
| 3 | `dashboard-jefe/`, `landing/` | `dashboard-jefe/`, `landing/` | HU-006, HU-007, HU-008, HU-009 |
| 4 | `dashboard-clientes/` | `dashboard-clientes/` | HU-010, HU-011 |
| 5 | `dashboard-clientes/` | `dashboard-clientes/` | HU-012, HU-014 |
| 6 | `dashboard-jefe/` | `dashboard-jefe/` | HU-015, HU-016 |
| 7 | `dashboard-empleados/` | `dashboard-empleados/` | HU-022, HU-024 |
| 8 | `shared/` (notificaciones) | `shared/` | HU-029, HU-030 |
| 9 | `dashboard-empleados/` | `dashboard-empleados/` | HU-025, HU-026 |
| 10 | `dashboard-jefe/` | `dashboard-jefe/` | HU-031, HU-033 |

---

Esta estructura asegura que:
- ✅ Backend y Frontend están SINCRONIZADOS en su organización
- ✅ Fácil de navegar y encontrar archivos
- ✅ Escalable para agregar nuevos módulos
- ✅ Claro qué archivos tocar para cada sprint
