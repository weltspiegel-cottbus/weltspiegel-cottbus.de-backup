/** @type {import('next').NextConfig} */
export default {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cinetixx.com",
      },
      {
        protocol: "https",
        hostname: "lean-server.de",
      },
    ],
  },
};
