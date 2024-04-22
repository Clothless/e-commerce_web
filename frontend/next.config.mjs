/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"i.ibb.co",
                port:"",
                pathname:"*"
            }
        ]
    },
    env:{
        BASE_URL: process.env.BASE_URL,
    }
};

export default nextConfig;