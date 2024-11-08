import { user } from "@/lib/db/schemas"

import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"

export const userSelectSchema = createSelectSchema(user, {
  image: z.string().optional()
})
export const userInsertSchema = createInsertSchema(user, {
  image: z.string().optional()
})

export type User = z.infer<typeof userSelectSchema>
