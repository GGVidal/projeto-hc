import React, { FC } from "react";
import { Text, View } from "react-native";
import {
  Container,
  IconContainer,
  ListItemContainer,
  StyledIcon,
} from "./styles";
import Trator from "../../assets/Trator.svg";

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
        </ListItemContainer>
      </Container>
    </>
  );
};
