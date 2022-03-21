import { useNavigation } from "@react-navigation/native";
import React, { FC, useLayoutEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { IconContainer as HeaderContainer } from "../../navigation/styles";
import {
  SubHeaderContainer,
  IconContainer,
  TractorDetail,
  DescriptionContainer,
  SquareShape,
  StatusContainer,
  ScreenContainer,
} from "./styles";
import Back from "../../assets/arrow_left.svg";
import Tractor from "../../assets/Trator.svg";
import { TractorInspectorContainer } from "./components/TractorInspectorContainer";

export const TractorDetails: FC = () => {
  const { setOptions, goBack } = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <HeaderContainer headerPosition="left" onPress={() => goBack()}>
          <Back height={18} width={18} />
        </HeaderContainer>
      ),
    });
  });
  return (
    <>
      <SubHeaderContainer />

      <ScreenContainer>
        <TractorDetail>
          <IconContainer>
            <Tractor width={41} height={36} />
          </IconContainer>
          <DescriptionContainer>
            <Text
              fontWeight="bold"
              letterSpacing="0.4px"
              fontSize="20px"
              color="#2F3542"
            >
              John D - 9R 390
            </Text>
            <Text
              fontWeight="normal"
              letterSpacing="0px"
              fontSize="14px"
              color="#2F3542"
            >
              ID: 9090990
            </Text>
            <StatusContainer>
              <SquareShape />
              <Text
                fontWeight="bold"
                letterSpacing="0.7px"
                fontSize="14px"
                color="#2F3542"
              >
                NEED REPAIR
              </Text>
            </StatusContainer>
          </DescriptionContainer>
        </TractorDetail>
        <TractorInspectorContainer />
      </ScreenContainer>
    </>
  );
};
