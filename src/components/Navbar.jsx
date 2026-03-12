function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      
      <h1 className="text-xl font-bold">
        Yailín.dev
      </h1>

      <ul className="flex gap-6 text-sm">
        <li className="hover:text-gray-400 cursor-pointer">Inicio</li>
        <li className="hover:text-gray-400 cursor-pointer">Proyectos</li>
        <li className="hover:text-gray-400 cursor-pointer">Sobre mí</li>
        <li className="hover:text-gray-400 cursor-pointer">Contacto</li>
      </ul>

    </nav>
  )
}

export default Navbar