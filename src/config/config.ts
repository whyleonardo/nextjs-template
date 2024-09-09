import { env } from "@/lib/env"

export const siteConfig = {
  name: "Next Boilerplate",
  url: env.NEXT_PUBLIC_SITE_BASE_URL
}

export type SiteConfig = typeof siteConfig
