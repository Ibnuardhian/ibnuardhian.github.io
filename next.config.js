/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hasilkan situs statis (folder `out/`) agar bisa di-host di GitHub Pages
  output: 'export',
  // GitHub Pages tidak punya server untuk optimasi gambar next/image
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
