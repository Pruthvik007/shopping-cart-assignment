import { createContext, useState } from "react";

export const BackDropContext = createContext({
  isVisible: false,
  setIsVisible: (isVisible: boolean) => {
    isVisible;
  },
});

export const BackDropProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <BackDropContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </BackDropContext.Provider>
  );
};
