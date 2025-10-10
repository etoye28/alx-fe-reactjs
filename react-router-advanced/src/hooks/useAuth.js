import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated] = useState(true); // or false to test
  return { isAuthenticated };
};
