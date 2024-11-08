import { redirect } from "next/navigation"

interface ProtectRouteProps {
  redirectUrl: string
}

export function protectRoute({ redirectUrl }: ProtectRouteProps) {
  redirect(redirectUrl)
}
