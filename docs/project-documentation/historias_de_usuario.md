# HISTORIAS DE USUARIO
## Sistema de Gestión y Producción de Calzado

---

## HU-001: CREACIÓN DE CUENTAS DE ACCESO
**Prioridad:** Alta

Como cliente potencial,
Quiero crear una solicitud de cuenta de acceso de forma autónoma,
Para acceder al sistema y realizar pedidos de calzado.

**Criterios de Aceptación:**
- Puedo acceder al formulario de registro desde la página principal sin autenticarme
- El formulario solicita: nombre completo, correo, documento, teléfono, razón social y NIT
- El sistema valida que el correo, documento y NIT sean únicos en tiempo real
- Si algún dato está duplicado, se bloquea el registro con mensaje de error
- Puedo ver un acuse de recibo visual y recibir confirmación por correo
- Mi solicitud queda con estado "pendiente de validación"
- El jefe recibe una notificación en menos de 30 segundos
- Se registra toda la actividad en el historial de auditoría

---

## HU-002: VALIDACIÓN Y ACTIVACIÓN DE CUENTAS POR JEFE
**Prioridad:** Alta

Como jefe del sistema,
Quiero revisar y activar las solicitudes de cuentas pendientes,
Para controlar quién accede al sistema y garantizar la seguridad.

**Criterios de Aceptación:**
- Veo una lista de solicitudes pendientes con todos los datos del cliente
- Puedo aprobar o rechazar cada solicitud
- Si rechazo, debo ingresar un comentario obligatorio
- Al aprobar, se genera una contraseña temporal segura (10+ caracteres con mayúscula, minúscula, número y símbolo)
- El cliente recibe un correo con sus credenciales y un enlace válido por 24 horas
- La cuenta cambia a estado "activa"
- Todos los eventos quedan registrados en auditoría

---

## HU-003: INICIO DE SESIÓN
**Prioridad:** Alta

Como usuario registrado,
Quiero acceder al sistema con mis credenciales,
Para ingresar a mi panel y realizar mis actividades.

**Criterios de Aceptación:**
- Puedo iniciar sesión con correo y contraseña
- Si son incorrectos, recibo mensaje específico de error
- Tras 3 intentos fallidos la cuenta se bloquea 30 minutos
- Mi sesión caduca tras 20 minutos de inactividad
- Soy redirigido al panel correspondiente a mi rol
- Todos los intentos (exitosos y fallidos) quedan registrados en auditoría

---

## HU-004: RECUPERACIÓN DE CUENTAS
**Prioridad:** Alta

Como usuario registrado,
Quiero recuperar mi acceso si olvido mi contraseña,
Para poder ingresar nuevamente al sistema de forma segura.

**Criterios de Aceptación:**
- Puedo iniciar el proceso de recuperación ingresando mi correo
- Recibo un enlace seguro válido por 60 minutos
- Puedo establecer una nueva contraseña con requisitos: 10+ caracteres, mayúscula, minúscula, número y símbolo
- Mi contraseña anterior queda invalidada
- Recibo confirmación: "Su contraseña ha sido actualizada exitosamente"
- Todos los eventos quedan registrados en auditoría

---

## HU-005: SOLICITUD DE REACTIVACIÓN DE CUENTAS
**Prioridad:** Alta

Como usuario con cuenta suspendida,
Quiero solicitar la reactivación de mi cuenta,
Para volver a acceder al sistema.

**Criterios de Aceptación:**
- Solo puedo acceder al formulario si mi cuenta está suspendida o inactiva
- El formulario solicita: correo, motivo detallado, documento, teléfono y evidencia opcional
- El sistema genera un ticket con ID único para el jefe
- El jefe puede aprobar o rechazar con comentario obligatorio
- Si se aprueba, mi cuenta cambia a "activa" y recibo notificación
- Si se rechaza, recibo el motivo de la decisión
- Todos los eventos quedan registrados en auditoría

---

## HU-006: CREACIÓN DE CATÁLOGO
**Prioridad:** Alta

Como jefe o diseñador de producto,
Quiero registrar productos en el catálogo,
Para ofertar calzado a clientes y empleados.

**Criterios de Aceptación:**
- Puedo acceder al módulo de creación de catálogo
- El formulario solicita: nombre, referencia (única), descripción, imagen, estado, tallas, colores, material, categoría y marca
- La imagen debe ser JPG o PNG y no superar 2MB
- Si la referencia está duplicada, se bloquea el registro
- Si todo es correcto, se registra el producto con mensaje "Producto registrado exitosamente"
- Los productos con estado "inactivo" quedan ocultos
- No puedo eliminar productos con historial de pedidos, solo desactivarlos
- Todos los eventos quedan registrados en auditoría

---

## HU-007: CLASIFICACIÓN POR CATEGORÍAS
**Prioridad:** Alta

Como jefe,
Quiero organizar los productos en categorías,
Para facilitar la navegación y búsqueda de clientes.

**Criterios de Aceptación:**
- Puedo crear nuevas categorías con nombres únicos
- Puedo editar categorías existentes
- No puedo eliminar categorías vinculadas a productos activos
- Si intento eliminar una categoría con productos, veo una ventana emergente listando los dependientes
- Si una categoría está inactiva, sus productos no aparecen en el catálogo público
- Los filtros por categoría responden en menos de 2 segundos
- Todos los cambios quedan registrados en auditoría

---

## HU-008: GESTIÓN DE MARCAS Y ESTILOS
**Prioridad:** Alta

Como jefe,
Quiero registrar marcas y estilos de calzado,
Para organizarlos de forma jerárquica en el catálogo.

**Criterios de Aceptación:**
- Puedo crear marcas con nombre único y obligatorio
- Dentro de cada marca puedo crear estilos con nombre único
- No puedo eliminar marcas o estilos vinculados a productos activos
- Los estilos inactivos no aparecen en catálogo público
- Puedo editar atributos de marcas y estilos existentes
- Si intento eliminar con dependencias, recibo mensaje claro de error
- Todos los cambios quedan registrados en auditoría

---

## HU-009: VISUALIZACIÓN DE CATÁLOGO COMO VISITANTE
**Prioridad:** Alta

Como visitante sin registrar,
Quiero ver el catálogo público de productos,
Para conocer la oferta de calzado sin necesidad de login.

**Criterios de Aceptación:**
- Puedo acceder al catálogo desde la página principal sin autenticarme
- Veo solo productos con estado "activo" y públicos
- Cada producto muestra: imagen, nombre, referencia, tallas, colores, material, marca y estilo
- No veo precios, costos ni información de inventario
- Puedo aplicar filtros básicos por categoría, marca, estilo, talla y color
- El tiempo de carga y filtros es menor a 3 segundos
- Si no hay productos muestro "No hay productos disponibles en este momento"
- Si intento acceder a funciones restringidas, me redirigen al registro

---

## HU-010: CONSULTA DE CATÁLOGO POR CLIENTE MAYORISTA
**Prioridad:** Alta

Como cliente mayorista autenticado,
Quiero consultar el catálogo completo de productos,
Para preparar mis pedidos basándome en la oferta disponible.

**Criterios de Aceptación:**
- Solo accedo tras iniciar sesión exitosamente
- Veo todos los productos activos con información detallada
- Si una combinación está agotada, aparece deshabilitada
- Puedo guardar productos como favoritos y persistir al cerrar sesión
- Puedo iniciar un proceso de pedido seleccionando modelos
- Las combinaciones disponibles se transfieren automáticamente al formulario de pedido
- Si intento acceder sin autenticación, me redirigen a login
- Todos los eventos de visualización quedan registrados

---

## HU-011: SISTEMA DE FILTRADO DE BÚSQUEDA
**Prioridad:** Alta

Como usuario de cualquier rol,
Quiero filtrar productos por múltiples atributos,
Para encontrar rápidamente lo que busco en el catálogo.

**Criterios de Aceptación:**
- Puedo aplicar filtros compuestos simultáneamente (categoría, marca, estilo, talla, color)
- Los resultados se actualizan en tiempo real sin recargar la página
- El tiempo de respuesta es menor a 2 segundos incluso con 5,000+ modelos
- Puedo buscar por texto libre con coincidencias parciales
- Hay un botón para limpiar todos los filtros y restaurar la vista general
- Si no hay coincidencias muestro "No se encontraron productos"
- Si los filtros son incompatibles, se impide la búsqueda
- Todos los eventos se registran para análisis

---

## HU-012: REALIZACIÓN DE PEDIDOS POR CLIENTE MAYORISTA
**Prioridad:** Alta

Como cliente mayorista,
Quiero registrar un pedido seleccionando productos,
Para solicitar fabricación o entrega inmediata de calzado.

**Criterios de Aceptación:**
- Puedo seleccionar uno o más productos del catálogo
- Para cada producto defino talla, color y cantidad
- Si la cantidad es menor a la mínima configurable, se bloquea con mensaje
- El sistema verifica automáticamente disponibilidad en bodega
- Si hay stock, se marca como "aprobado para entrega"
- Si no hay stock, se marca como "pendiente de fabricación"
- Se genera un número de pedido único
- Mi pedido queda en estado "pendiente de revisión administrativa"
- Recibo notificación de registro exitoso

---

## HU-013: NOTIFICACIÓN DE NUEVOS PEDIDOS
**Prioridad:** Alta

Como jefe, gerente comercial o planificador de producción,
Quiero recibir notificaciones automáticas cuando se registran pedidos,
Para actuar rápidamente en la gestión de entrega o producción.

**Criterios de Aceptación:**
- Recibo una notificación en panel en menos de 5 segundos tras un nuevo pedido
- La notificación incluye: ID del pedido, nombre del cliente, fecha/hora, cantidad, combinaciones y estado
- Puedo ver si será atendido por entrega directa o requiere producción
- Recibo un correo de prioridad alta si está habilitado
- El enlace de la notificación me lleva directamente a la ficha del pedido
- Se evita duplicidad de notificaciones
- Todas las notificaciones quedan trazadas en el historial

---

## HU-014: CONSULTA DE ESTADO DE PEDIDOS POR CLIENTE
**Prioridad:** Alta

Como cliente mayorista,
Quiero consultar el estado de mis pedidos,
Para hacer seguimiento y conocer el progreso de mis solicitudes.

**Criterios de Aceptación:**
- Solo puedo ver mis propios pedidos tras iniciar sesión
- Veo número, fecha, estado, productos, tallas, colores, cantidades y ruta
- Puedo aplicar filtros por estado, fecha o referencia
- El porcentaje de avance de producción se actualiza con latencia máxima de 5 minutos
- Se muestran alertas automáticas de retraso si aplica
- Si intento acceder a pedidos de otro cliente, veo "acceso no autorizado" y se registra
