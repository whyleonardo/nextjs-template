import { useRouter } from "next/navigation"

import { authClient } from "@/features/auth/lib/auth-client"

import { useMutation, useQueryClient } from "@tanstack/react-query"

type Provider =
  | "github"
  | "apple"
  | "discord"
  | "facebook"
  | "microsoft"
  | "google"
  | "spotify"
  | "twitch"
  | "twitter"
  | "dropbox"
  | "linkedin"
  | "gitlab"

export const useOAuthLogin = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async ({ provider }: { provider: Provider }) => {
      await authClient.signIn.social({
        provider
      })
    },
    onSuccess: () => {
      router.refresh()
      queryClient.invalidateQueries({ queryKey: ["current-user"] })
    }
  })

  return mutation
}
