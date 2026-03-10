"""
Módulo: modules/dashboard_jefe/router.py
Descripción: Endpoints del panel de administración del jefe.
Nota: Datos mock por ahora — se conectarán a los modelos reales en Sprint 4+.
"""

from fastapi import APIRouter

from app.modules.dashboard_jefe.schemas import (
    AlertSchema,
    AlertsResponse,
    DashboardMetricsResponse,
    MetricSchema,
    RecentOrderSchema,
    RecentOrdersResponse,
)

router = APIRouter(
    prefix="/api/v1/dashboard/admin",
    tags=["dashboard-jefe"],
)


@router.get(
    "/metrics",
    response_model=DashboardMetricsResponse,
    summary="Métricas del dashboard del jefe",
)
def get_metrics() -> DashboardMetricsResponse:
    """Retorna los KPIs principales del dashboard administrativo."""
    return DashboardMetricsResponse(
        metrics=[
            MetricSchema(label="Pedidos Pendientes", value=24, change="+12%", change_positive=True),
            MetricSchema(label="En Producción", value=12, change="+8%", change_positive=True),
            MetricSchema(label="Stock Disponible", value=245, change="-5%", change_positive=False),
            MetricSchema(label="Alertas Activas", value=4, change="2 nuevas", change_positive=False),
        ]
    )


@router.get(
    "/recent-orders",
    response_model=RecentOrdersResponse,
    summary="Pedidos recientes para el dashboard",
)
def get_recent_orders() -> RecentOrdersResponse:
    """Retorna los últimos 5 pedidos registrados."""
    return RecentOrdersResponse(
        orders=[
            RecentOrderSchema(order_id="#001", client_name="Andrea Plazas", quantity=58, status="pending", date="15/08/2025", total=2340000),
            RecentOrderSchema(order_id="#002", client_name="Jhon Kennedy", quantity=120, status="in_production", date="14/08/2025", total=4850000),
            RecentOrderSchema(order_id="#003", client_name="Sofia Valencia", quantity=85, status="ready", date="13/08/2025", total=3120000),
            RecentOrderSchema(order_id="#004", client_name="Sandra Guevara", quantity=150, status="in_production", date="13/08/2025", total=5780000),
            RecentOrderSchema(order_id="#005", client_name="Carlos Méndez", quantity=95, status="pending", date="12/08/2025", total=3890000),
        ]
    )


@router.get(
    "/alerts",
    response_model=AlertsResponse,
    summary="Alertas activas del sistema",
)
def get_alerts() -> AlertsResponse:
    """Retorna las alertas activas del sistema."""
    return AlertsResponse(
        alerts=[
            AlertSchema(id="1", type="warning", title="Stock bajo en inventario", description="Por 0% calzado I 682 - 15 unids", timestamp="Hace 2h"),
            AlertSchema(id="2", type="error", title="Pedido retrasado", description="N# #002 supera la fecha estimada de entrega", timestamp="Hace 4h"),
            AlertSchema(id="3", type="warning", title="Incidencia de maquinaria", description="Máquina de costura falla", timestamp="Hace 6h"),
            AlertSchema(id="4", type="info", title="Nueva solicitud de registro", description="Nueva solicitud de registro de cliente", timestamp="Hace 8h"),
        ]
    )
