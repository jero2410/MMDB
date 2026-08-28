export type State<T> =
  | { status: "loading"; data?: undefined; error?: undefined }
  | { status: "error"; error: Error; data?: undefined }
  | { status: "empty"; data?: undefined; error?: undefined }
  | { status: "ready"; data: T; error?: undefined };