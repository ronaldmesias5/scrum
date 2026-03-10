import { ClipboardList, UserPlus, RefreshCw, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const actions = [
  { label: 'Nuevo Pedido', icon: ClipboardList, path: '/dashboard/admin/orders', primary: true },
  { label: 'Agregar Cliente', icon: UserPlus, path: '/dashboard/admin/clients', primary: false },
  { label: 'Actualizar Stock', icon: RefreshCw, path: '/dashboard/admin/inventory', primary: false },
  { label: 'Generar Reporte', icon: FileText, path: '/dashboard/admin/reports', primary: false },
];

export default function QuickActionsSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mt-6">
      <h2 className="font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map(({ label, icon: Icon, path, primary }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center justify-center gap-2 py-5 rounded-xl font-medium text-sm transition-all duration-200
              ${primary
                ? 'bg-blue-800 text-white hover:bg-blue-700 shadow-sm'
                : 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:shadow-sm'
              }`}
          >
            <Icon size={22} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
