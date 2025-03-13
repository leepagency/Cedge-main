import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dashboard.cedge.com.sa"],
  },
  experimental: {
    outputFileTracing: true,
  },
  output: 'standalone'
};

export default withNextIntl(nextConfig);
