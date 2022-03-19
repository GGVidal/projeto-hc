import React, { FC } from "react";
import {
  Container,
  DescriptionContainer,
  IconContainer,
  ListItemContainer,
  SquareShape,
  StatusContainer,
  StyledIcon,
} from "./styles";
import Trator from "../../assets/Trator.svg";
import { Text } from "../Text";
import { View } from "react-native";

export const TractorListItem: FC = () => {
  return (
    <>
      <Container>
        <ListItemContainer>
          <IconContainer>
            <StyledIcon>
              <Trator color="red" width={41} height={36} />
            </StyledIcon>
          </IconContainer>
          <DescriptionContainer>
            <Text
              fontSize="18px"
              fontWeight="bold"
              letterSpacing="0.9px"
              color="#2F3542"
            >
              My text
            </Text>
            <Text
              fontSize="14px"
              fontWeight="normal"
              letterSpacing="0px"
              color="#57606F"
            >
              ID: 899089
            </Text>
            <StatusContainer>
              <SquareShape />
              <Text
                fontSize="14px"
                fontWeight="bold"
                letterSpacing="0.7px"
                color="#2F3542"
              >
                Need repair
              </Text>
            </StatusContainer>
          </DescriptionContainer>
        </ListItemContainer>
      </Container>
    </>
  );
};
