/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    dangerouslyAllowSVG: true,
    domains: ["i.imgur.com", "cdn.pixabay.com", "drive.google.com"],
  },
};

module.exports = nextConfig;
