import { createContext, useState } from "react";
import { User } from "../types/User";
import { useCart } from "../hooks/useCart";

// Create a type for the context value
type UserContextType = {
  user: User | null;
  logUserIn: (user: User) => void;
  logUserOut: () => void;
};
export const UserContext = createContext<UserContextType>({
  user: null,
  logUserIn: () => {},
  logUserOut: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { clearCart } = useCart();
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const logUserIn = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logUserOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    clearCart();
  };

  return (
    <UserContext.Provider value={{ user, logUserIn, logUserOut }}>
      {children}
    </UserContext.Provider>
  );
};
