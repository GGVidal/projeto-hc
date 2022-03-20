import React, { FC } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { AddTractorContainer, FieldContainer } from "./styles";

export const AddTractor: FC = () => {
  return (
    <AddTractorContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          Tractor Name
        </Text>
        <Input />
      </FieldContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          ID
        </Text>
        <Input />
      </FieldContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          Horse power
        </Text>
        <Input />
      </FieldContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          Brand
        </Text>
        <Input />
      </FieldContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          Purchase date
        </Text>
        <Input />
      </FieldContainer>
      <Button color="#ABB3BD">
        <Text
          color="#FFFFFF"
          letterSpacing="1.62px"
          fontWeight="600"
          fontSize="18px"
        >
          CANCEL
        </Text>
      </Button>
    </AddTractorContainer>
  );
};
