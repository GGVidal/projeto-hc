import styled from "styled-components/native";

interface IconContainerProps {
  marginRight: string;
  marginLeft: string;
}

export const Container = styled.Pressable`
  margin-left: 15px;
  margin-right: 15px;
  background: #e9eaee 0% 0% no-repeat padding-box;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  width: 315px;
  height: 61px;
  align-items: center;
`;

export const IconContainer = styled.View<IconContainerProps>`
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`;

export const InfoContainer = styled.View`
  flex-direction: column;
`;

export const InfoContentContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const SquareShape = styled.View`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  border-radius: 4px;
  background: #feca57 0% 0% no-repeat padding-box;
`;

export const EditIconContainer = styled.Pressable`
  margin-left: 110px;
  margin-right: 10px;
  background-color: #1157B9
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 18px;
`;
