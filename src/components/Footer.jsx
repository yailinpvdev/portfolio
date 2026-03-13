import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">

      <p>
        © {new Date().getFullYear()} Yailín Pérez · Portafolio personal
      </p>

      <div className="flex justify-center gap-6 mt-4 text-xl">

        <a
          href="https://github.com/yailinpvdev"
          target="_blank"
          className="hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>

      </div>

    </footer>
  )
}

export default Footer