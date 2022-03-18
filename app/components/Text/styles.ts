import styled from "styled-components/native";
import { TextProps } from "./types";

export const StyledText = styled.Text<TextProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
