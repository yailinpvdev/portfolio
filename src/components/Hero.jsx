import profileImg from "../assets/profile.png"

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-gray-900 text-white text-center px-6"
    >

      <img
        src={profileImg}
        alt="Foto de Yailín Pérez"
        className="w-44 h-44 rounded-full mb-6 border-4 border-white object-cover"
      />

      <h1 className="text-6xl font-bold mb-4">
        Hola, soy Yailín Pérez
      </h1>

      <p className="text-xl text-gray-300 mb-2">
        Desarrolladora Web en formación
      </p>

      <p className="text-gray-400 mb-8">
        Estudiante del Técnico en Programación de Software - SENA
      </p>

      <div className="flex gap-4 flex-wrap justify-center">

        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          aria-label="Ver proyectos"
        >
          Ver proyectos
        </a>

        <a
          href="https://github.com/yailinpvdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          aria-label="Ir a GitHub"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yailin-perezv"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          aria-label="Ir a LinkedIn"
        >
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Hero