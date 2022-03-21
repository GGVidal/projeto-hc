import { useNavigation } from "@react-navigation/native";
import React, { FC, useLayoutEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { IconContainer } from "../../navigation/styles";
import {
  AddTractorContainer,
  ButtonsContainer,
  FieldContainer,
} from "./styles";
import Close from "../../assets/close.svg";

export const AddTractor: FC = () => {
  const { setOptions, goBack } = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <IconContainer headerPosition="right" onPress={() => goBack()}>
          <Close height={18} width={18} />
        </IconContainer>
      ),
    });
  });
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
      <ButtonsContainer>
        <Button borderRadius="28px" width="166px" height="56px" color="#ABB3BD">
          <Text
            color="#FFFFFF"
            letterSpacing="1.62px"
            fontWeight="600"
            fontSize="18px"
          >
            CANCEL
          </Text>
        </Button>
        <Button borderRadius="28px" width="166px" height="56px" color="#52C782">
          <Text
            color="#FFFFFF"
            letterSpacing="1.62px"
            fontWeight="600"
            fontSize="18px"
          >
            SAVE
          </Text>
        </Button>
      </ButtonsContainer>
    </AddTractorContainer>
  );
};
