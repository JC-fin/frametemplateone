/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/lbtn',
                destination: 'https://nore.beehiiv.com/',
                permanent: false
            },
            {
                source: '/rbtn',
                destination: 'https://bip1559.org/',
                permanent: false
            }
        ]
    }

};

export default nextConfig;
