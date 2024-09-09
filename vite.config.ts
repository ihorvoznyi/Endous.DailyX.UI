import { sentryVitePlugin } from '@sentry/vite-plugin';
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
			routes(defineRoutes) {
				return defineRoutes(route => {
					route('/test', 'routes/test/layout.tsx');
				});
			},
		}),
		tsconfigPaths(),
		sentryVitePlugin({
			org: 'endous',
			project: 'dailyx-remix-ui',
			url: 'https://sentry.io/',
		}),
	],

	build: {
		sourcemap: true,
	},
});
