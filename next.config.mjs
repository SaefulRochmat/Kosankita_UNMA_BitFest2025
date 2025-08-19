/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.cic.ac.id',
            'images.pexels.com',
            'logos-world.net',
            'cdn.jsdelivr.net',
            'raw.githubusercontent.com',
            'upload.wikimedia.org'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logos-world.net',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
