import { createEnv } from "@t3-oss/env-nextjs"

import { z } from "zod"

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_SITE_BASE_URL: z.string().url().min(1)
  },

  runtimeEnv: {
    NEXT_PUBLIC_SITE_BASE_URL: process.env.NEXT_PUBLIC_SITE_BASE_URL
  }
})
