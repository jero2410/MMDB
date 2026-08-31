export const Status = {
  Loading: "loading",
  Error: "error",
  Empty: "empty",
  Ready: "ready",
} as const;

export type Status = (typeof Status)[keyof typeof Status];