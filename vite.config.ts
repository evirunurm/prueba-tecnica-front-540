import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	define: {
		"process.env": {
			REACT_APP_FRONTEND_MOBILE_API: "http://localhost:4000/graphql",
		},
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
})
