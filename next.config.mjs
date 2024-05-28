/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true
		}
	},
	experimental: {
		reactCompiler: true,
		ppr: "incremental"
	}
}

export default nextConfig
