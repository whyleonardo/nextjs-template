"use client"

import type { ReactNode } from "react"

import {
  QueryClient,
  QueryClientProvider,
  isServer
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

interface QueryProviderProps {
  children: ReactNode
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  }

  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
