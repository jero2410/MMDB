import { useState } from "react";
import type { MutationState } from "../types/mutationStates.type";

export function useMutation<T, V>(mutationFn: (variables: V) => Promise<T>) {
  const [state, setState] = useState<MutationState<T>>({
    status: "idle",
  });

  const mutate = async (variables: V) => {
    setState({ status: "loading" });

    try {
      const data = await mutationFn(variables);

      setState({
        status: "success",
        data,
      });

      return data;
    } catch (error) {
      const err =
        error instanceof Error ? error : new Error("Something went wrong");

      setState({
        status: "error",
        error: err,
      });

      throw err;
    }
  };

  return {
    ...state,
    mutate,
  };
}
