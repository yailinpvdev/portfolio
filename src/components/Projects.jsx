import portfolioImg from "../assets/projects/portfolio.png"
import climateImg from "../assets/projects/climate.png"
import farmApiImg from "../assets/projects/farm-api.png"
import agroDbImg from "../assets/projects/agro-db.png"

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {/* Portfolio */}
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
                Portafolio personal construido con React, Vite y Tailwind
                para mostrar mis proyectos y habilidades.
              </p>

              <div className="flex gap-3 justify-center">

                <a
                  href="https://yailinpvdev.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
                >
                  Demo
                </a>

                <a
                  href="https://github.com/yailinpvdev/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-black"
                >
                  GitHub
                </a>

              </div>
            </div>

          </div>


          {/* Climate Dashboard */}
          <div className="bg-slate-800 rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30">

            <div className="overflow-hidden">
              <img
                src={climateImg}
                alt="Climate Dashboard"
                className="w-full h-48 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-3">
                Climate Dashboard
              </h3>

              <p className="text-gray-400 mb-4">
                Dashboard que visualiza datos climáticos en tiempo real
                usando APIs y gráficos interactivos.
              </p>

              <div className="flex justify-center">

                <a
                  href="https://github.com/yailinpvdev/climate-data-analytics-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-black"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>


          {/* Farm API */}
          <div className="bg-slate-800 rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30">

            <div className="overflow-hidden">
              <img
                src={farmApiImg}
                alt="Farm API"
                className="w-full h-48 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-3">
                Farm Data API
              </h3>

              <p className="text-gray-400 mb-4">
                API REST desarrollada con Node.js y Express
                para gestionar datos agrícolas.
              </p>

              <div className="flex justify-center">

                <a
                  href="https://github.com/yailinpvdev/farm-data-management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-black"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>


          {/* Agro Data Manager */}
          <div className="bg-slate-800 rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30">

            <div className="overflow-hidden">
              <img
                src={agroDbImg}
                alt="Agro Data Manager"
                className="w-full h-48 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-3">
                Agro Data Manager
              </h3>

              <p className="text-gray-400 mb-4">
                Aplicación basada en MySQL que organiza y consulta
                datos agrícolas mediante consultas SQL.
              </p>

              <div className="flex justify-center">

                <a
                  href="https://github.com/yailinpvdev/agro-data-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-black"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Projects