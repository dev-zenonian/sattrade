/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.externals = [...config.externals, 'pino-pretty'];

		return config;
	},
};

module.exports = nextConfig;
