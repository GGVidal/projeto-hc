import React, { FC } from "react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { InspectionItem } from "../InspectionItem";
import { ButtonsContainer, InspectionContainer } from "./styles";

export const InspectionList: FC = () => {
  return (
    <InspectionContainer>
      <ButtonsContainer>
        <Button height="36px" width="198px" borderRadius="18px" color="#2F3542">
          <Text
            color="#FFF"
            letterSpacing="0.7px"
            fontWeight="600"
            fontSize="14px"
          >
            + ADD INSPECTION
          </Text>
        </Button>
      </ButtonsContainer>
      <InspectionItem />
    </InspectionContainer>
  );
};
