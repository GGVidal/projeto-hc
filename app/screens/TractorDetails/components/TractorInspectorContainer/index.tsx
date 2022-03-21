import React, { FC } from "react";
import { Text } from "../../../../components/Text";
import {
  IconContainer,
  StyledTractorInspectionContainer,
  TextContainer,
} from "./styles";
export const TractorInspectorContainer: FC = () => {
  return (
    <StyledTractorInspectionContainer>
      <TextContainer>
        <Text
          letterSpacing="0.7px"
          fontSize="14px"
          fontWeight="bold"
          color="#30336B"
        >
          TRACTOR INSPECTIONS
        </Text>
      </TextContainer>
      <IconContainer>
        <Text
          letterSpacing="0.9px"
          fontSize="18px"
          fontWeight="bold"
          color="#30336B"
        >
          3
        </Text>
      </IconContainer>
    </StyledTractorInspectionContainer>
  );
};
