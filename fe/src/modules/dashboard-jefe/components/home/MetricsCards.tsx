import { ShoppingBag, Cog, Package, AlertTriangle } from 'lucide-react';
import type { Metric } from '../../types/dashboard';

const icons = [ShoppingBag, Cog, Package, AlertTriangle];
const iconColors = ['text-orange-500', 'text-green-500', 'text-blue-500', 'text-red-500'];
const bgColors = ['bg-orange-50', 'bg-green-50', 'bg-blue-50', 'bg-red-50'];

interface Props {
  metrics: Metric[];
}

export default function MetricsCards({ metrics }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {metrics.map((m, i) => {
        const Icon = icons[i] ?? Package;
        return (
          <div
            key={m.label}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${bgColors[i]}`}>
                <Icon size={20} className={iconColors[i]} />
              </div>
              <span className={`text-xs font-semibold ${m.changePositive ? 'text-green-600' : 'text-red-500'}`}>
                {m.change}
              </span>
            </div>
            <span className="text-3xl font-bold text-gray-900">{m.value}</span>
            <span className="text-sm text-gray-500">{m.label}</span>
          </div>
        );
      })}
    </div>
  );
}
