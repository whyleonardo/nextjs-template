import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/__tests__/setup.ts",
		include: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
	},

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
