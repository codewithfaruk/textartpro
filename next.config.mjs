/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/love-text-art.html",
        destination: "/text-art/love-text-art",
        permanent: true,
      },
      {
        source: "/good-night-text-art.html",
        destination: "/text-art/good-night-text-art",
        permanent: true,
      },
      {
        source: "/happy-birthday-text-art.html",
        destination: "/text-art/happy-birthday-text-art",
        permanent: true,
      },
      {
        source: "/happy-birthday-text-art.html",
        destination: "/text-art/happy-birthday-text-art",
        permanent: true,
      },
      {
        source: "/friendship-text-art.html",
        destination: "/text-art/friendship-text-art",
        permanent: true,
      },
      {
        source: "/music-text-art.html",
        destination: "/text-art/music-text-art",
        permanent: true,
      },
      {
        source: "/spongebob-text-art.html",
        destination: "/text-art/spongebob-text-art",
        permanent: true,
      },
      {
        source: "/animal-text-art.html",
        destination: "/text-art/animal-text-art",
        permanent: true,
      },
      {
        source: "/hello-hi-text-art.html",
        destination: "/text-art/hello-hi-text-art",
        permanent: true,
      },
      {
        source: "/thumbs-up-text-art.html",
        destination: "/text-art/thumbs-up-text-art",
        permanent: true,
      },
      {
        source: "/thank-you-text-art.html",
        destination: "/text-art/thank-you-text-art",
        permanent: true,
      },
      {
        source: "/among-us-text-art.html",
        destination: "/text-art/among-us-text-art",
        permanent: true,
      },
      {
        source: "/bunny-text-art.html",
        destination: "/text-art/bunny-text-art",
        permanent: true,
      },
      {
        source: "/anime-text-art.html",
        destination: "/text-art/anime-text-art",
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
