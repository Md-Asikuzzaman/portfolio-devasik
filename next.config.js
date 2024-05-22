module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
        },

        {
          protocol: "http",
          hostname: "devasik.vercel.app",
        },
      ],
    },
  };
  return nextConfig;
};
