import styled from "styled-components/native";
import { ButtonProps } from "./types";

export const StyledButton = styled.Pressable<ButtonProps>`
  border-radius: 28px;
  width: 166px;
  height: 56px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;
