import styled from "styled-components/native";
import { ButtonProps } from "./types";

export const StyledButton = styled.Pressable<ButtonProps>`
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;
