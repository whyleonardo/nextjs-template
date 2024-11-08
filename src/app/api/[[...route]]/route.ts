import auth from "@/features/auth/server/routes"

import { OpenAPIHono } from "@hono/zod-openapi"
import { apiReference } from "@scalar/hono-api-reference"

import { handle } from "hono/vercel"

const app = new OpenAPIHono().basePath("/api")

const routes = app.route("/auth", auth)

app.doc("/openapi.json", {
  openapi: "3.1.0",
  info: {
    version: "0.0.1",
    title: "Jist API Reference"
  }
})

app.get(
  "/docs",
  apiReference({
    spec: {
      url: "/api/openapi.json"
    },
    pageTitle: "Jist API Reference"
  })
)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes
