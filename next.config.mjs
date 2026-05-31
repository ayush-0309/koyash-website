/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Replace 'koyash' below with your actual GitHub repo name
  basePath: process.env.NODE_ENV === "production" ? "/koyash-website" : "",
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
