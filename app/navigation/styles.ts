import styled from "styled-components/native";

interface IconContainerProps {
  headerPosition: "right" | "left";
}

export const IconContainer = styled.Pressable<IconContainerProps>`
  border-radius: 10px;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ headerPosition }) =>
    headerPosition === "right" ? "margin-right: 15px" : "margin-left: 15px"}
  justify-content: center;
  align-items: center;
`;
