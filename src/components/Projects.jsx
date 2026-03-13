import portfolioImg from "../assets/projects/portfolio.png"

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Proyecto 1 */}
          <div className="bg-slate-800 rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30">

           <div className="overflow-hidden">
  <img
    src={portfolioImg}
    alt="Portfolio Web"
    className="w-full h-48 object-cover transition duration-500 hover:scale-110"
  />
</div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Portfolio Web
              </h3>

              <p className="text-gray-400 mb-4">
                Portafolio personal construido con React y Tailwind.
              </p>

              <div className="flex gap-3 justify-center">
                <a
                  href="https://yailinpvdev.github.io/portfolio/"
                  target="_blank"
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
                >
                  Ver sitio
                </a>

                <a
                  href="https://github.com/yailinpvdev/portfolio"
                  target="_blank"
                  className="border border-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Proyecto 2 */}
          <div className="bg-slate-800 p-6 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30">
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

          {/* Proyecto 3 */}
          <div className="bg-slate-800 p-6 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30">
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