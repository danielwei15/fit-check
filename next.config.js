/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ext.same-assets.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "img.ssensemedia.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  