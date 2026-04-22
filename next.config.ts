import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rubixdigital.com.br' }],
        destination: 'https://rubixdigital.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
