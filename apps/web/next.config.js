if (!process.env.NEXT_REWRITE_DOCS_URL) {
  throw new Error("NEXT_REWRITE_DOCS_URL environment variable is not defined");
}
console.info(
  "process.env.NEXT_REWRITE_DOCS_URL",
  process.env.NEXT_REWRITE_DOCS_URL
);

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${process.env.NEXT_REWRITE_DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${process.env.NEXT_REWRITE_DOCS_URL}/docs/:path*`,
      },
    ];
  },
};
