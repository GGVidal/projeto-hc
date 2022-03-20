import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: #1157b9;
  width: 100%;
  height: 120px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.Pressable`
  border-radius: 10px;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 11px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
`;

export const ChipContainer = styled.Pressable`
  width: 141px;
  height: 36px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: left;
  margin-right: 15px;
  margin-top: 11px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: left;
  letter-spacing: 0.6px;
  color: #fff;
  opacity: 1;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-top: 21px;
`;
