// src/hooks/useLogAction.ts
import { useCallback } from 'react';

const useLogAction = () => {
  const logAction = useCallback((side: string, action: string) => {
    console.log(`[${side.toUpperCase()}] ${action.toUpperCase()} button clicked`);
  }, []);

  return logAction;
};

export default useLogAction;
