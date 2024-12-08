import React from "react";

/**
 * Load hook.
 * If a single app feature has multiple async operations that needs to be
 * finished before the feature is loaded, use this hook.
 *
 * @example
 * const { isAllLoaded, load } = useLoad({
 *  auth: false,
 *  user: false,
 * });
 *
 * React.useEffect(() => {
 *  someAsyncOperation().then(() => load("auth"));
 *  someOtherAsyncOperation().then(() => load("user"));
 * }, []);
 *
 * return isAllLoaded;
 *
 * @param initial - Initial state of the features
 * @returns Object with isAllLoaded and load function
 */
export const useLoad = (initial: Record<string, boolean>) => {
  const [loaded, setLoaded] = React.useState(initial);

  const load = React.useCallback(
    (name: keyof typeof loaded) => {
      setLoaded((prev) => ({ ...prev, [name]: true }));
    },
    [setLoaded]
  );

  const isAllLoaded = React.useMemo(
    () => Object.values(loaded).every((x) => x === true),
    [loaded]
  );

  return { isAllLoaded, load };
};
