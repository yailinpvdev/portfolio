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
            <p className="text-gray-400">
              Portafolio personal construido con React y Tailwind.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Dashboard de datos
            </h3>
            <p className="text-gray-400">
              Dashboard interactivo para visualizar datos.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              CRUD App
            </h3>
            <p className="text-gray-400">
              Aplicación CRUD conectada a base de datos.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects