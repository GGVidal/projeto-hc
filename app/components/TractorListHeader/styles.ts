import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background: #1157b9 0% 0% no-repeat padding-box;
  width: 100%;
  height: 120px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.Pressable`
  border-radius: 10px;
  opacity: 0.2;
  width: 36px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin-top: 11px;
  margin-left: 15px;
`;

export const ChipContainer = styled.Pressable`
  width: 141px;
  height: 36px;
  border-radius: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  text-align: left;
  opacity: 0.2;
  margin-right: 15px;
  margin-top: 11px;
`;

export const TextChip = styled.Text`
  font-size: 24px;
  font-weight: 600;
  align-self: center;
  letter-spacing: 0.7px;
  color: white;
  opacity: 1;
  text-transform: uppercase;
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
