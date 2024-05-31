import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"

import { afterEach } from "vitest"
import failOnConsole from "vitest-fail-on-console"

afterEach(() => {
  cleanup()
})

failOnConsole({
  shouldFailOnDebug: true,
  shouldFailOnError: true,
  shouldFailOnInfo: true,
  shouldFailOnLog: false,
  shouldFailOnWarn: true
})
