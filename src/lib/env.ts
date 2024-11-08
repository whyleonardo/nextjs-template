import { createEnv } from "@t3-oss/env-nextjs"

import { z } from "zod"

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().url(),
    DATABASE_URL: z.string().url(),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_SITE_BASE_URL: z.string().url().optional()
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_BASE_URL: process.env.NEXT_PUBLIC_SITE_BASE_URL
  }
})
