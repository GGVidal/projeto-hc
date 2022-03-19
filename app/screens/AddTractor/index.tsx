import React, { FC } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { AddTractorContainer } from "./styles";

export const AddTractor: FC = () => {
  return (
    <AddTractorContainer>
      <Text
        color="#2F3542"
        letterSpacing="0.36px"
        fontWeight="bold"
        fontSize="18px"
      >
        Tractor Name
      </Text>
      <Input />
    </AddTractorContainer>
  );
};
