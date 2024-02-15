import React from "react";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";
import { BackDropProvider } from "./BackDropContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackDropProvider>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </BackDropProvider>
  );
};

export default ContextProvider;
