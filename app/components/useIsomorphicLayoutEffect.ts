import {
  DependencyList,
  EffectCallback,
  useEffect,
  useLayoutEffect,
} from "react";

export function useIsomorphicLayoutEffect(
  effect: EffectCallback,
  deps?: DependencyList
) {
  if (typeof window === "undefined") {
    return useEffect(effect, deps);
  } else {
    return useLayoutEffect(effect, deps);
  }
}
