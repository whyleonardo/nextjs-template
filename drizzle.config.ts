import { env } from "@/lib/env"

import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "postgresql",
  schema: ["./src/lib/db/schemas"],
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL
  }
})
