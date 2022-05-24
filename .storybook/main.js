module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app",
	],
	framework: "@storybook/react",
	webpackFinal: (config) => {
		return {
			...config,
			plugins: config.plugins.filter((plugin) => {
				if (plugin.constructor.name === "ESLintWebpackPlugin") {
					return false;
				}
				return true;
			}),
		};
	},
};






