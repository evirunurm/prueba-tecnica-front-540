
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
	},
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@repositories": path.resolve(__dirname, "src/repositories"),
			"@domain": path.resolve(__dirname, "src/domain"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
});
