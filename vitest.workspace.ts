import { defineWorkspace } from "vitest/config";

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
  "packages/*",
  "apps/*",
  {
    test: {
      include: ["tests/**/*.test.{ts,tsx}"],
      name: "node",
      environment: "node",
    },
  },
]);
