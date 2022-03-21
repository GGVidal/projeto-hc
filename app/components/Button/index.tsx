import React, { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  color,
  children,
  borderRadius,
  width,
  height,
  onPress,
}) => {
  return (
    <StyledButton
      borderRadius={borderRadius}
      onPress={onPress}
      width={width}
      height={height}
      color={color}
    >
      {children}
    </StyledButton>
  );
};
