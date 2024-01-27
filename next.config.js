/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'placehold.co'
			},
			{
				protocol: 'https',
				hostname: 'images-ext-1.discordapp.net'
			}
		]
	}
}

module.exports = nextConfig
