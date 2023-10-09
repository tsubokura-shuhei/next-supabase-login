/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["opvzcmwrnuzilrmlueju.supabase.co"],
  },
};

module.exports = nextConfig;
