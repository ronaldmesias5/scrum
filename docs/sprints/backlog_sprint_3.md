# Sprint 3 - Backlog Scrum
## Landing Page + Dashboard Jefe

**Scrum Master:** Andrés Gil  
**Sprint:** 3  
**Duración:** 15 días  
**Equipo:** Ronald (Arquitecto), Santiago (Bases de Datos), Andrés (Scrum Master)

---

## 📊 Estado de las Historias - Sprint 3

| Historia Pendiente | Historia en Desarrollo | Historia Terminada |
|:---|:---|:---|
| HU-010 - Consulta de Catálogo | | HU-001 - Creación de Cuentas de Usuario |
| HU-011 - Sistema de Filtrado | | HU-002 - Validación y Activación de Cuentas |
| HU-012 - Realización de Pedidos | | HU-003 - Inicio de Sesión |
| HU-014 - Consulta de Estado de Pedidos | | HU-004 - Recuperación de Contraseñas |
| HU-015 - Actualización de Estado de Producción | | HU-006 - Creación de Catálogo (Landing) |
| HU-016 - Gestión de Inventario | | HU-009 - Dashboard Jefe |
| HU-022 - Asignación de Tareas de Producción | | |
| HU-024 - Reporte de Avances | | |
| HU-029 - Módulo de Notificaciones | | |
| HU-030 - Alertas al Jefe | | |
| HU-025 - Confirmación de Finalización de Tareas | | |
| HU-026 - Notificación al Jefe de Tareas Completadas | | |
| HU-031 - Reportes de Pedidos | | |
| HU-033 - Suma de Producción | | |

---

## 📋 Historias de Usuario - Sprint 3

### HU-006: Creación de Catálogo (Landing Page)
**Prioridad:** Alta | **Story Points:** 13

Como visitante, Quiero ver una página pública de presentación de la empresa, Para conocer los productos y servicios antes de registrarme.

**Criterios de Aceptación:**
- [x] La landing page es accesible sin autenticación en `/`
- [x] El header muestra logo, navegación, botones Regístrate e Ingresar
- [x] La sección Hero muestra título, descripción y CTA
- [x] La sección de categorías muestra Caballero, Dama e Infantil
- [x] La sección de métricas muestra 4 estadísticas de la empresa
- [x] La sección de asesoría muestra beneficios de contactar al fabricante
- [x] La sección "¿Por qué elegirnos?" muestra 4 razones con íconos
- [x] El CTA final invita a registrarse o ver el catálogo
- [x] El footer muestra columnas de links, categorías y contacto
- [x] Los botones "Ingresar" y "Regístrate" redirigen correctamente

**Tareas:**
- [x] Frontend: Crear estructura de carpetas `fe/src/modules/landing/`
- [x] Frontend: Implementar LandingHeader con navegación y botones
- [x] Frontend: Implementar HeroSection con overlay azul y CTA
- [x] Frontend: Implementar MetricsSection con 4 estadísticas estáticas
- [x] Frontend: Implementar CategoriesSection con 3 tarjetas
- [x] Frontend: Implementar AsessoriaSection con 4 beneficios
- [x] Frontend: Implementar WhyChooseUsSection con 4 razones
- [x] Frontend: Implementar CTAFinalSection con fondo azul
- [x] Frontend: Implementar LandingFooter con 4 columnas
- [x] Frontend: Ensamblar LandingPage.tsx con todas las secciones
- [x] Frontend: Configurar ruta `/` → LandingPage en App.tsx

---

### HU-009: Dashboard Jefe
**Prioridad:** Alta | **Story Points:** 21

Como jefe de producción, Quiero tener un panel de administración centralizado, Para visualizar métricas, pedidos recientes y alertas del sistema en tiempo real.

**Criterios de Aceptación:**
- [x] El dashboard es accesible solo con usuario de rol admin/jefe
- [x] El login redirige automáticamente a `/dashboard/admin` si el rol es admin
- [x] El sidebar muestra 11 ítems de navegación con íconos y badges
- [x] El header muestra búsqueda, notificaciones, nombre de usuario y logout
- [x] Las 4 tarjetas de métricas muestran KPIs con íconos y variaciones
- [x] La tabla de pedidos recientes muestra ID, cliente, cantidad, estado, fecha y total
- [x] El panel de alertas muestra alertas con tipo (warning/error/info) y timestamp
- [x] Las acciones rápidas permiten navegar a módulos secundarios
- [x] El logout limpia la sesión y redirige a `/auth/login`

**Tareas:**
- [x] Frontend: Crear estructura de carpetas `fe/src/modules/dashboard-jefe/`
- [x] Frontend: Implementar AdminLayout con sidebar + header + Outlet
- [x] Frontend: Implementar AdminSidebar con NavLinks y badges rojos
- [x] Frontend: Implementar AdminHeader con búsqueda, avatar y logout
- [x] Frontend: Implementar MetricsCards con 4 KPIs y colores
- [x] Frontend: Implementar RecentOrdersTable con badges de estado
- [x] Frontend: Implementar AlertsPanel con íconos por tipo de alerta
- [x] Frontend: Implementar QuickActionsSection con 4 botones de acción
- [x] Frontend: Ensamblar DashboardPage.tsx con todos los componentes
- [x] Frontend: Configurar rutas protegidas `/dashboard/admin/*` en App.tsx
- [x] Frontend: Redirigir según rol en LoginPage (admin → `/dashboard/admin`)
- [x] Backend: Crear schemas Pydantic en `be/app/schemas/dashboard_jefe.py`
- [x] Backend: Crear endpoint `GET /api/v1/dashboard/admin/metrics`
- [x] Backend: Crear endpoint `GET /api/v1/dashboard/admin/recent-orders`
- [x] Backend: Crear endpoint `GET /api/v1/dashboard/admin/alerts`
- [x] Backend: Registrar router en `be/app/main.py`
- [x] Full: Conectar `dashboardService.ts` con los 3 endpoints reales

---

## Resumen de Sprint 3

- [x] HU-006: Landing page pública completa con todas las secciones
- [x] HU-009: Dashboard del jefe con layout, métricas, pedidos, alertas y backend integrado
- [x] Login redirige automáticamente según rol del usuario
- [x] Documentación y pruebas realizadas

**Creado por:** Andrés Gil (Scrum Master)
