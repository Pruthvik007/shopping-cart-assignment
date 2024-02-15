import { useContext } from "react";
import { BackDropContext } from "../context/BackDropContext";

export const useBackDrop = () => useContext(BackDropContext);
