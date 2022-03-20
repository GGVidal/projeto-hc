import React, { FC } from "react";
import { StyledButton, StyledText } from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ color, children }) => {
  return (
    <StyledButton color={color}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};
