import nextBundleAnalyzer from '@next/bundle-analyzer';
import withPWAInit from 'next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add empty turbopack config to silence the warning
  turbopack: {},
  // Disable webpack config for Turbopack compatibility
  webpack: undefined,
};

export default withBundleAnalyzer(withPWA(nextConfig));
