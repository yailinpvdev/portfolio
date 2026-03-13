function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-xl font-bold">
        Yailín.dev
      </h1>

      <ul className="flex gap-6 text-sm">

        <li>
          <a href="#home" className="hover:text-gray-400">
            Inicio
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-gray-400">
            Sobre mí
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-gray-400">
            Proyectos
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contacto
          </a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar