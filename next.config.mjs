/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/love-text-art.html",
        destination: "/love-text-art",
        permanent: true,
      },
      {
        source: "/good-night-text-art.html",
        destination: "/good-night-text-art",
        permanent: true,
      },
      {
        source: "/happy-birthday-text-art.html",
        destination: "/happy-birthday-text-art",
        permanent: true,
      },
      {
        source: "/happy-birthday-text-art.html",
        destination: "/happy-birthday-text-art",
        permanent: true,
      },
      {
        source: "/friendship-text-art.html",
        destination: "/friendship-text-art",
        permanent: true,
      },
      {
        source: "/music-text-art.html",
        destination: "/music-text-art",
        permanent: true,
      },
      {
        source: "/spongebob-text-art.html",
        destination: "/spongebob-text-art",
        permanent: true,
      },
      {
        source: "/animal-text-art.html",
        destination: "/animal-text-art",
        permanent: true,
      },
      {
        source: "/hello-hi-text-art.html",
        destination: "/hello-hi-text-art",
        permanent: true,
      },
      {
        source: "/thumbs-up-text-art.html",
        destination: "/thumbs-up-text-art",
        permanent: true,
      },
      {
        source: "/thank-you-text-art.html",
        destination: "/thank-you-text-art",
        permanent: true,
      },
      {
        source: "/among-us-text-art.html",
        destination: "/among-us-text-art",
        permanent: true,
      },
      {
        source: "/bunny-text-art.html",
        destination: "/bunny-text-art",
        permanent: true,
      },
      {
        source: "/anime-text-art.html",
        destination: "/anime-text-art",
        permanent: true,
      },
      {
        source: "/text-faces/:path*.html",
        destination: "/text-faces/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
