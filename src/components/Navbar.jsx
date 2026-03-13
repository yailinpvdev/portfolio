import { useState, useEffect } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center transition-all duration-300 z-50 ${
        scrolled
          ? "bg-gray-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-bold text-white">
        Yailín.dev
      </h1>

      <ul className="flex gap-6 text-sm text-white">
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