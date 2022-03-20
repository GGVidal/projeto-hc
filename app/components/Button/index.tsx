import React, { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  color,
  children,
  borderRadius,
  width,
  height,
}) => {
  return (
    <StyledButton
      borderRadius={borderRadius}
      width={width}
      height={height}
      color={color}
    >
      {children}
    </StyledButton>
  );
};
