import react from "@vitejs/plugin-react"

import { loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    coverage: {
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.{js,jsx,ts,tsx}", "**/*.d.ts"],
      reporter: ["test-coverage-results"]
    },
    reporters: ["test-results"],
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    setupFiles: ["./vitest-setup.ts"],
    env: loadEnv("", process.cwd(), "")
  }
})
