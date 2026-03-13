import { FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="bg-slate-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contacto
        </h2>

        <p className="text-gray-300 mb-8">
          Si deseas ponerte en contacto conmigo o ver más de mi trabajo,
          puedes encontrarme en los siguientes enlaces.
        </p>

        <div className="flex justify-center gap-8 text-3xl">

          <a
            href="https://github.com/yailinpvdev"
            target="_blank"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact