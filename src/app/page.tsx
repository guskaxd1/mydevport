import Image from "next/image";
import EarthCircle from "@/app/components/earthcircle";
import HardSkills from './components/hardskills';

export default function Home() {
  return (
    <div className="transparent-container">
       {/* Terra Redonda */}
       <EarthCircle />
      {/* Conteúdo Principal */}
      <main className="absolute inset-0 -z-10">
        {/* Seção: Início */}
        <section
          id="inicio"
          className="transparent-container"
        >
          <h1 className="text-4xl font-bold mb-4">Olá, eu sou Guskov</h1>
          <p className="text-lg mb-6">
            Engenheiro de Computação e Desenvolvedor Full-Stack...
          </p>
          <a href="#projects" className="btn-primary">
            Veja Meus Projetos
          </a>
        </section>

        {/* Seção: Sobre Mim */}
        <section
          id="about"
          className="transparent-container"
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg">Sou um desenvolvedor apaixonado...</p>
        </section>
        {/* Seção: Hard Skills */}
        <HardSkills />
        {/* Seção: Projetos */}
        <section id="projects" className="transparent-container">
          <div className="transparent-container">
            <h2 className="text-4xl font-bold text-center mb-12">Projetos</h2>
            <div className="transparent-container">
              <div className="project-card">
              <Image
                src="/images/teste.jpg"
                alt="Projeto 1"
                width={400}
                height={250}
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
                <h3 className="text-2xl font-bold mt-4">Projeto 1</h3>
                <p className="text-gray-400 mt-2">
                  Breve descrição do projeto. O que foi feito e tecnologias
                  usadas.
                </p>
                <a
                  href="#"
                  className="text-blue-400 hover:underline mt-4 inline-block"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Formação */}
        <section id="formacao" className="transparent-container">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Formação</h2>
            <p className="text-lg text-gray-400">
              Engenheiro de Computação pela [Nome da Universidade].
            </p>
          </div>
        </section>

        {/* Seção: Contato */}
        <section id="contact" className="transparent-container">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Contato</h2>
            <p className="text-lg text-gray-400">
              Tem interesse em trabalhar comigo? Entre em contato!
            </p>
            <a
              href="mailto:seuemail@example.com"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Enviar E-mail
            </a>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="transparent-container">
  <div className="flex justify-between items-center py-4">
    <span> © 2024 Guskov. Todos os direitos reservados.</span>
    <div className="space-x-4">
      <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
</footer>

    </div>
  );
}
