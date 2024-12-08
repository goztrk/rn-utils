import React from "react";

/**
 * Hook to check if all hooks have returned true
 * Use this hook when loading initial stuff on the app.
 * @param hooks - Array of boolean values
 * @returns boolean
 */
export const useAppInitialLoad = (hooks: boolean[]) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // Check if all hooks have returned true
    setLoaded(hooks.every((state) => state === true));
  }, [hooks]);

  return loaded;
};
