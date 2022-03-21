import React, { FC } from "react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import {
  IconContainer,
  Container,
  InfoContainer,
  InfoContentContainer,
  SquareShape,
  EditIconContainer,
} from "./styles";
import ArrowDown from "../../../../assets/arrow_down.svg";
import Calendar from "../../../../assets/calendario.svg";
import Pencil from "../../../../assets/lapis.svg";

export const InspectionItem: FC = () => {
  return (
    <Container>
      <IconContainer marginLeft="10px" marginRight="5px">
        <ArrowDown width={30} height={26} />
      </IconContainer>
      <InfoContainer>
        <InfoContentContainer>
          <SquareShape />
          <Text
            fontSize="14px"
            letterSpacing="0.7px"
            color="#2F3542"
            fontWeight="bold"
          >
            Need Repair
          </Text>
        </InfoContentContainer>
        <InfoContentContainer>
          <IconContainer marginRight="4.73px" marginLeft="0px">
            <Calendar height={16} width={16} />
          </IconContainer>
          <Text
            fontSize="14px"
            letterSpacing="0.7px"
            color="#2F3542"
            fontWeight="bold"
          >
            01/02/2022
          </Text>
        </InfoContentContainer>
      </InfoContainer>
      <EditIconContainer>
        <Pencil height={17} width={17} />
      </EditIconContainer>
    </Container>
  );
};
