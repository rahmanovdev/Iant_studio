/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "png.pngtree.com",
      "www.photoland.com.au",
      "imgcdn.stablediffusionweb.com",
      "i.postimg.cc",
      "static.vecteezy.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
