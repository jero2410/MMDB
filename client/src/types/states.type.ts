export const Status = {
  Loading: "loading",
  Error: "error",
  Empty: "empty",
  Ready: "ready",
} as const;

export type Status =
  (typeof Status)[keyof typeof Status];

export type State<T> =
  | {
      status: typeof Status.Loading;
      data?: undefined;
      error?: undefined;
    }
  | {
      status: typeof Status.Error;
      error: Error;
      data?: undefined;
    }
  | {
      status: typeof Status.Empty;
      data?: undefined;
      error?: undefined;
    }
  | {
      status: typeof Status.Ready;
      data: T;
      error?: undefined;
    };