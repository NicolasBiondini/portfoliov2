/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "res.cloudinary.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "assets.poap.xyz",
    ],
  },
};

module.exports = nextConfig;
