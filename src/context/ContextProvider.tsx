import React from "react";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";
import { BackDropProvider } from "./BackDropContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackDropProvider>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    </BackDropProvider>
  );
};

export default ContextProvider;
