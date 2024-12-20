import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	plugins: [react()],
	define: {
		"process.env": {
			REACT_APP_FRONTEND_MOBILE_API: "http://localhost:4000/graphql",
		},
	},
})
