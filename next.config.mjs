/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                  { key: 'X-Hello', value: 'World' },
                  // Disallow cross-origin for the middleware
                  { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
                  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                ],
              },
        ]
    }
};

export default nextConfig;
