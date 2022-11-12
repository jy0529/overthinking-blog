const withMDX = require('@next/mdx')({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
    extension: /\.mdx?$/,
    providerImportSource: "@mdx-js/react",
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withMDX({
  env: {
    STATIC_URL: isProd ? process.env.STATIC_URL : ''
  },
  assetPrefix: isProd ? process.env.STATIC_URL : '',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})