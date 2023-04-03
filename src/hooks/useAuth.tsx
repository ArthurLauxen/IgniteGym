import { useContext } from "react";

import { AuthContexts } from "@contexts/AuthContexts";

export function useAuth() {
  const context = useContext(AuthContexts);

  return context;
}
