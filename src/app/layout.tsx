import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de Guskov - Desenvolvedor Full-Stack",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-900 text-white font-sans antialiased">
        <header className="bg-gray-800 py-4 shadow-md">
          <nav className="container mx-auto flex justify-center">
            <ul className="flex space-x-8 text-white font-semibold">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Inicial
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="#hardskills"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Hard Skills
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Contatos
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-[80px]">{children}</main>
      </body>
    </html>
  );
}
