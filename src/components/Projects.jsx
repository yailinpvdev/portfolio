function Projects() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Portfolio Web
            </h3>
            <p className="text-gray-400 mb-4">
              Portafolio personal construido con React y Tailwind.
            </p>

            <a
              href="https://github.com/yailinpvdev/portfolio"
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Ver en GitHub
            </a>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Dashboard de datos
            </h3>
            <p className="text-gray-400 mb-4">
              Dashboard interactivo para visualizar datos.
            </p>

            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">
              Próximamente
            </button>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              CRUD App
            </h3>
            <p className="text-gray-400 mb-4">
              Aplicación CRUD conectada a base de datos.
            </p>

            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">
              Próximamente
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects