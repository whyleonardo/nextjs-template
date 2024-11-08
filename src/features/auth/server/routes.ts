import { auth } from "@/lib/auth"

import { sessionMiddleware } from "@/features/auth/middlewares/session"
import { userSelectSchema } from "@/schemas/user"

import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi"

const currentUserRoute = createRoute({
  summary: "Get the current user",
  path: "/current",
  method: "get",
  tags: ["Authentication"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            data: userSelectSchema
          }),
          example: {
            id: "w2890hgr4j0",
            name: "user_123",
            email: "user_123@email.com",
            updatedAt: new Date(),
            createdAt: new Date(),
            emailVerified: true,
            image: null
          }
        }
      },
      description: "Successful response"
    },
    401: {
      content: {
        "application/json": {
          schema: z.object({
            error: z.string().openapi({ example: "Unauthorized" })
          })
        }
      },
      description: "Unauthorized response"
    }
  },
  middleware: [sessionMiddleware] as const
})

const app = new OpenAPIHono()
  .openapi(currentUserRoute, async (c) => {
    const user = c.get("user")

    return c.json({ data: user }, 200)
  })
  .on(["GET", "POST"], "/*", async (c) => {
    return auth.handler(c.req.raw)
  })

export default app
