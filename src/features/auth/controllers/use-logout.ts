import { useRouter } from "next/navigation"

import { authClient } from "@/features/auth/lib/auth-client"

import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useLogout = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      await authClient.signOut()
    },
    onSuccess: () => {
      router.refresh()
      queryClient.invalidateQueries({ queryKey: ["current-user"] })
    }
  })

  return mutation
}
