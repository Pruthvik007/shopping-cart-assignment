import { createContext, useState } from "react";

export const BackDropContext = createContext({
  isVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsVisible: (isVisible: boolean) => {},
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
