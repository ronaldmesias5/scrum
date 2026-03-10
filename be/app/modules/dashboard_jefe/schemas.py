"""
Módulo: modules/dashboard_jefe/schemas.py
Descripción: Esquemas Pydantic para el dashboard administrativo del jefe.
"""

from typing import Literal

from pydantic import BaseModel


class MetricSchema(BaseModel):
    label: str
    value: int
    change: str
    change_positive: bool


class RecentOrderSchema(BaseModel):
    order_id: str
    client_name: str
    quantity: int
    status: Literal["pending", "in_production", "ready", "delivered"]
    date: str
    total: float


class AlertSchema(BaseModel):
    id: str
    type: Literal["warning", "error", "info"]
    title: str
    description: str
    timestamp: str


class DashboardMetricsResponse(BaseModel):
    metrics: list[MetricSchema]


class RecentOrdersResponse(BaseModel):
    orders: list[RecentOrderSchema]


class AlertsResponse(BaseModel):
    alerts: list[AlertSchema]
