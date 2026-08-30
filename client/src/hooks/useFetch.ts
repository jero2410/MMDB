import type { State } from "../types/states.type";
import { useState, useEffect } from "react";

export function useFetch<T>(url: string): State<T> {
  const [state, setState] = useState<State<T>>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    setState({ status: "loading" });

    const token =
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token");

    fetch(url, {
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length === 0) {
          setState({ status: "empty" });
        } else {
          setState({ status: "ready", data });
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setState({ status: "error", error: err });
        }
      });

    return () => controller.abort();
  }, [url]);

  return state;
}