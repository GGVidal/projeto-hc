import React, { FC } from "react";
import { FABContainer } from "./styles";
import { FABProps } from "./types";

export const FAB: FC<FABProps> = ({ children, onPress }) => {
  return <FABContainer onPress={() => onPress()}>{children}</FABContainer>;
};
