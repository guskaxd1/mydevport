/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para imagens em projetos exportados estaticamente
  },
  distDir: "out", // Pasta onde os arquivos exportados são gerados
};

module.exports = nextConfig;
