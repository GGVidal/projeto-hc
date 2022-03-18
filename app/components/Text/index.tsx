import React, { FC } from "react";
import { StyledText } from "./styles";
import { TextProps } from "./types";

export const Text: FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  letterSpacing,
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    />
  );
};
