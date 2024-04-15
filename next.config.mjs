/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config){
      config.module.rules.push({
        test: /\.geojson$/,
        use: ["json-loader"]
      });
      return config;
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                  { key: 'X-Hello', value: 'World' },
                  // Disallow cross-origin for the middleware
     
                ],
              },
        ]
    }
};

export default nextConfig;
