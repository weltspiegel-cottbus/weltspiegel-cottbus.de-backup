/** @type {import('next').NextConfig} */
export default {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cinetixx.com",
      },
    ],
  },
};
