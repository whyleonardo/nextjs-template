"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { cn } from "@/lib/utils"

import { useOAuthLogin } from "@/features/auth/controllers/use-oauth-login"

import { Loader2Icon } from "lucide-react"

export const LoginCard = () => {
  const { mutate, isPending } = useOAuthLogin()

  async function handleGithubLogin() {
    mutate({ provider: "github" })
  }

  return (
    <Card className="w-full max-w-[450px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription className="max-w-2xl">
          Choose your login method
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button
          className="w-full overflow-hidden"
          onClick={handleGithubLogin}
          disabled={isPending}
        >
          <div className="relative">
            <Icons.github
              className={cn(
                "mr-2 size-5 fill-background transition",
                isPending && "-translate-y-8"
              )}
            />

            <div
              className={cn(
                "absolute left-0 top-0 translate-y-8 transition",
                isPending && "translate-y-0"
              )}
            >
              <Loader2Icon className="size-5 animate-spin text-background transition" />
            </div>
          </div>
          Login with Github
        </Button>
      </CardContent>
    </Card>
  )
}
