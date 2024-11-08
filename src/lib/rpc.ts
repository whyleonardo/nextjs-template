import { env } from "@/lib/env"

import type { AppType } from "@/app/api/[[...route]]/route"

import { hc } from "hono/client"

export const client = hc<AppType>(env.NEXT_PUBLIC_SITE_BASE_URL as string)
