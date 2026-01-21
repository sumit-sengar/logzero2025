

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/software-development',
        destination: '/services/custom-software-development',
        permanent: true,
      },
      {
        source: '/About/Mission',
        destination: '/about-us/mission',
        permanent: true,
      },
      {
        source: '/About/Clients',
        destination: '/about-us/clients',
        permanent: true,
      },
      {
        source: '/web-development-services',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/mobile-development-services/native-apps',
        destination: '/services/mobile-app-development/native-apps',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/case-studies/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig