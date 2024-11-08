/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Replace with the Cloudinary domain
        port: "",
        pathname: "/**", // Allow all paths from Cloudinary
      },
    ],
  },
  // output:'export'
};

export default nextConfig;
