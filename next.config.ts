import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/sign-up",
      destination: "/auth/sign-up",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;

export default nextConfig;
