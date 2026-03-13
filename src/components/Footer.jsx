function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <p>
        © {new Date().getFullYear()} Yailín Pérez · Portafolio personal
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/yailinpvdev"
          target="_blank"
          className="hover:text-white"
        >
          GitHub
        </a>

        <a
          href="#"
          className="hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer