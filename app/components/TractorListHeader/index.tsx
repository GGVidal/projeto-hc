import React, { FC } from "react";
import {
  HeaderContainer,
  IconContainer,
  ChipContainer,
  Title,
  ButtonsContainer,
} from "./styles";
import Filter from "../../assets/filter.svg";
import { Text } from "../Text";
import { View } from "react-native";

export const TractorListHeader: FC = () => {
  return (
    <>
      <HeaderContainer>
        <ButtonsContainer>
          <IconContainer>
            <View>
              <Filter width={18} height={18} />
            </View>
          </IconContainer>
          <ChipContainer needsOffscreenAlphaCompositing>
            <Text
              fontSize="14px"
              fontWeight="600"
              color="#FFFFFF"
              letterSpacing="0.7px"
            >
              SORT BY: NAME
            </Text>
          </ChipContainer>
        </ButtonsContainer>
        <Title>Tractor inspection</Title>
      </HeaderContainer>
    </>
  );
};
