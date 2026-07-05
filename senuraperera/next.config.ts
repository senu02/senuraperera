/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/senuraperera",
  assetPrefix: "/senuraperera/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
