import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home, ShoppingCart, Layers, Package, CheckSquare,
  Users, UserCheck, RotateCcw, Bell, BarChart, Settings, UserCog
} from 'lucide-react';

const menuItems = [
  { label: 'Inicio', icon: Home, path: '/dashboard/admin', badge: 0 },
  { label: 'Pedidos', icon: ShoppingCart, path: '/dashboard/admin/orders', badge: 24 },
  { label: 'Catálogo', icon: Layers, path: '/dashboard/admin/catalog', badge: 0 },
  { label: 'Inventario', icon: Package, path: '/dashboard/admin/inventory', badge: 0 },
  { label: 'Tareas', icon: CheckSquare, path: '/dashboard/admin/tasks', badge: 0 },
  { label: 'Empleados', icon: Users, path: '/dashboard/admin/employees', badge: 0 },
  { label: 'Clientes', icon: UserCheck, path: '/dashboard/admin/clients', badge: 0 },
  { label: 'Usuarios', icon: UserCog, path: '/dashboard/admin/usuarios', badge: 0 },
  { label: 'Reactivación', icon: RotateCcw, path: '/dashboard/admin/reactivation', badge: 0 },
  { label: 'Alertas', icon: Bell, path: '/dashboard/admin/alerts', badge: 4 },
  { label: 'Reportes', icon: BarChart, path: '/dashboard/admin/reports', badge: 0 },
  { label: 'Configuración', icon: Settings, path: '/dashboard/admin/settings', badge: 0 },
];

export default function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-44 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div
        className="flex items-center gap-2 px-4 py-4 border-b border-gray-100 cursor-pointer"
        onClick={() => navigate('/dashboard/admin')}
      >
        <img src="/logo.jpg" alt="CALZADO J&R" className="h-8 w-8 object-contain" />
        <span className="font-bold text-gray-900 text-sm">CALZADO J&R</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {menuItems.map(({ label, icon: Icon, path, badge }) => (
          <NavLink
            key={label}
            to={path}
            end={path === '/dashboard/admin'}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors duration-150 rounded-none
              ${isActive
                ? 'bg-blue-50 text-blue-800 border-r-4 border-blue-800'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <div className="flex items-center gap-3">
              <Icon size={16} />
              <span>{label}</span>
            </div>
            {badge > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
