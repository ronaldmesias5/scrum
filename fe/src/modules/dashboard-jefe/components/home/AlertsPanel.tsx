import { AlertTriangle, XCircle, Info } from 'lucide-react';
import type { Alert } from '../../types/dashboard';

const config = {
  warning: { icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  error: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
  info: { icon: Info, color: 'text-blue-500', bg: 'bg-blue-50' },
};

interface Props {
  alerts: Alert[];
}

export default function AlertsPanel({ alerts }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 w-full xl:w-80">
      <h2 className="font-bold text-gray-900 mb-4">⚠ Alertas</h2>
      <div className="flex flex-col gap-2">
        {alerts.map((alert) => {
          const { icon: Icon, color, bg } = config[alert.type];
          return (
            <div key={alert.id} className="flex gap-3 items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
              <div className={`p-1.5 rounded-full ${bg} mt-0.5 flex-shrink-0`}>
                <Icon size={14} className={color} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{alert.title}</p>
                <p className="text-xs text-gray-500">{alert.description}</p>
                <p className="text-xs text-gray-400 mt-0.5">{alert.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-4 w-full text-sm text-center border border-gray-200 rounded-lg py-2 text-gray-600 hover:bg-gray-50 transition-colors">
        Ver todas las alertas
      </button>
    </div>
  );
}
