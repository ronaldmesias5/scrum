# Sprint 2 - Backlog Scrum
## Validación de Clientes, Roles y Recuperación de Contraseña

**Scrum Master:** Andrés Gil  
**Sprint:** 2  
**Duración:** 15 días  
**Equipo:** Ronald (Arquitecto), Santiago (Bases de Datos), Andrés (Scrum Master)

---

## 📊 Estado de las Historias - Sprint 2

| Historia Pendiente | Historia en Desarrollo | Historia Terminada |
|:---|:---|:---|
| HU-006 - Creación de Catálogo | | HU-001 - Creación de Cuentas de Usuario |
| HU-009 - Visualización de Catálogo | | HU-002 - Validación y Activación de Cuentas |
| HU-010 - Consulta de Catálogo | | HU-003 - Inicio de Sesión |
| HU-011 - Sistema de Filtrado | | HU-004 - Recuperación de Contraseñas |
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

## 📋 Historias de Usuario - Sprint 2

### HU-002: Validación y Activación de Cuentas
**Prioridad:** Alta | **Story Points:** 8

Como administrador, Quiero ver una lista de clientes pendientes de validación, Para poder aprobar o rechazar su acceso al sistema.

**Criterios de Aceptación:**
- [x] El admin puede ver todos los clientes con estado pendiente.
- [x] El admin puede aprobar o rechazar clientes.
- [x] El sistema notifica el resultado de la validación.

**Tareas:**
- [x] Backend: Endpoint GET /api/v1/admin/clients/pending
- [x] Backend: Endpoint PATCH /api/v1/admin/clients/{id}/validate
- [x] Backend: Validación lógica de negocio
- [x] Testing: Pruebas de flujo de validación

---

### HU-004: Recuperación de Contraseñas
**Prioridad:** Alta | **Story Points:** 5

Como usuario, Quiero poder recuperar mi contraseña si la olvido, Para acceder nuevamente al sistema.

**Criterios de Aceptación:**
- [x] El usuario puede solicitar recuperación de contraseña.
- [x] El sistema envía un correo con instrucciones (mock o real).
- [x] El usuario puede establecer una nueva contraseña.

**Tareas:**
- [x] Backend: Endpoint POST /api/v1/auth/forgot-password
- [x] Backend: Endpoint POST /api/v1/auth/reset-password
- [x] Backend: Lógica de tokens de recuperación
- [x] Testing: Pruebas de recuperación de contraseña

---

## Resumen de Sprint 2

- [x] HU-002: Validación y activación de cuentas completada y probada end-to-end
- [x] HU-004: Recuperación de contraseñas completada y probada
- [x] Documentación y pruebas realizadas

**Creado por:** Andrés Gil (Scrum Master)
