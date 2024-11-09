"use client"

import { useLogout } from "@/features/auth/controllers/use-logout"

import { LogOutIcon } from "lucide-react"

export const LogoutButton = () => {
  const { mutate } = useLogout()

  async function handleLogout() {
    mutate()
  }
  return (
    <button
      type="button"
      className="flex size-full h-10 items-center justify-center text-center"
      onClick={handleLogout}
    >
      <LogOutIcon className="mr-2 size-4" />
      Logout
    </button>
  )
}
