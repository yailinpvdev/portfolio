function Contact() {
  return (
    <section className="bg-slate-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contacto
        </h2>

        <p className="text-gray-300 mb-8">
          Si deseas ponerte en contacto conmigo o ver más de mi trabajo,
          puedes encontrarme en los siguientes enlaces.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/yailinpvdev"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            GitHub
          </a>

          <a
            href="#"
            className="border border-white px-6 py-3 rounded-lg font-semibold"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact