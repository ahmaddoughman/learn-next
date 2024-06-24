/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"fakestoreapi.com",
                port:"",
                pathname: "/**"
            },
            {
                protocol:"https",
                hostname:"dummyimage.com",
                port:"",
                pathname: "/**"
            },
        ]
    }
};

export default nextConfig;


// https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg