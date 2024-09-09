import { createEnv } from "@t3-oss/env-nextjs"

import { z } from "zod"

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_SITE_BASE_URL: z.string().url().optional()
  },

  runtimeEnv: {
    NEXT_PUBLIC_SITE_BASE_URL: process.env.NEXT_PUBLIC_SITE_BASE_URL
  }
})
