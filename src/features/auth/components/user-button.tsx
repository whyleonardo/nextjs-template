"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { useCurrentUser } from "@/features/auth/controllers/use-current-user"

import { LogoutButton } from "./logout-button"

export const UserButton = () => {
  const { data } = useCurrentUser()

  if (!data) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="cursor-pointer overflow-hidden border p-px transition hover:opacity-80"
        asChild
      >
        <Avatar className="size-12">
          <AvatarImage
            src={data.image as string}
            alt={data.name}
            className="rounded-full"
          />
          <AvatarFallback className="bg-primary-foreground uppercase">
            {data.name[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-56 select-none rounded-lg"
        align="end"
        sideOffset={4}
        side="bottom"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex flex-col items-center gap-2 px-1 py-1.5 text-center">
            <Avatar className="size-12 rounded-full">
              <AvatarImage src={data.image as string} alt={data.name} />
              <AvatarFallback className="border bg-primary-foreground text-xl uppercase">
                {data.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-sm leading-tight">
              <span className="truncate font-semibold">{data.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {data.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0 text-warning-subtle-foreground">
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
