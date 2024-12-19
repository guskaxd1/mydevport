/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configuração para gerar site estático
  images: {
    unoptimized: true, // Desativa a otimização de imagens
  },
};

module.exports = nextConfig;
