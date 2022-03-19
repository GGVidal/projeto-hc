import React, { FC } from "react";
import {
  HeaderContainer,
  IconContainer,
  ChipContainer,
  TextChip,
  Title,
  ButtonsContainer,
} from "./styles";
import Camera from "../../assets/Camera.svg";

export const TractorListHeader: FC = () => {
  return (
    <>
      <HeaderContainer>
        <ButtonsContainer>
          <IconContainer>
            <Camera width={36} height={36} />
          </IconContainer>
          <ChipContainer>
            <TextChip>Teste</TextChip>
          </ChipContainer>
        </ButtonsContainer>
        <Title>Tractor inspection</Title>
      </HeaderContainer>
    </>
  );
};
