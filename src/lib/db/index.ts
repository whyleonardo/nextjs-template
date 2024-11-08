import * as schema from "@/lib/db/schemas"
import { env } from "@/lib/env"

import { neon } from "@neondatabase/serverless"

import { drizzle } from "drizzle-orm/neon-http"

const client = neon(env.DATABASE_URL)

export const db = drizzle(client, { schema })
