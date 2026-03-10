import { useEffect, useState } from 'react';
import MetricsCards from '../components/home/MetricsCards';
import RecentOrdersTable from '../components/home/RecentOrdersTable';
import AlertsPanel from '../components/home/AlertsPanel';
import QuickActionsSection from '../components/home/QuickActionsSection';
import { getMetrics, getRecentOrders, getAlerts } from '../services/dashboardService';
import type { Metric, RecentOrder, Alert } from '../types/dashboard';

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [orders, setOrders] = useState<RecentOrder[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    getMetrics().then(setMetrics);
    getRecentOrders().then(setOrders);
    getAlerts().then(setAlerts);
  }, []);

  return (
    <div>
      {/* KPIs */}
      <MetricsCards metrics={metrics} />

      {/* Tabla + Alertas */}
      <div className="flex flex-col xl:flex-row gap-4">
        <RecentOrdersTable orders={orders} />
        <AlertsPanel alerts={alerts} />
      </div>

      {/* Acciones rápidas */}
      <QuickActionsSection />
    </div>
  );
}
