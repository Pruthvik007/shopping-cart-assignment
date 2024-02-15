import React from "react";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default ContextProvider;
