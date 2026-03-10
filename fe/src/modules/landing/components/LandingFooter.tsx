export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Eslogan */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.jpg" alt="CALZADO J&R" className="h-10 w-10 object-contain rounded" />
            <span className="font-bold text-white text-lg">CALZADO J&R</span>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-white font-semibold mb-3">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            {['Inicio', 'Catálogo', 'Nosotros', 'Contacto'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categorías */}
        <div>
          <h4 className="text-white font-semibold mb-3">Categorías</h4>
          <ul className="space-y-2 text-sm">
            {['Caballero', 'Dama', 'Infantil'].map((item) => (
              <li key={item}>
                <a href="#categorias" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Bogotá, Colombia</li>
            <li>📞 +57 601 234 5678</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        © 2026 CALZADO J&R. Todos los derechos reservados.
      </div>
    </footer>
  );
}
