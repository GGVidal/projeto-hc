import React, { FC } from "react";
import { Text, View } from "react-native";
import { HeaderContainer, IconContainer, ChipContainer } from "./styles";
import Camera from "../../assets/Camera.svg";

export const TractorListHeader: FC = () => {
  return (
    <HeaderContainer>
      <View>
        <IconContainer>
          <Camera width={36} height={36} />
        </IconContainer>
      </View>
      <View>
        <ChipContainer>
          <Text>Teste</Text>
        </ChipContainer>
      </View>
    </HeaderContainer>
  );
};
