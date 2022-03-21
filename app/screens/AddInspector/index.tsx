import React, { FC, useLayoutEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import {
  AddInspectorContainer,
  ButtonsContainer,
  FieldContainer,
  PhotoContainer,
  SaveContainer,
} from "./styles";
import Camera from "../../assets/Camera.svg";
import { useNavigation } from "@react-navigation/native";
import { IconContainer as HeaderContainer } from "../../navigation/styles";
import Back from "../../assets/arrow_left.svg";

export const AddInspector: FC = () => {
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
    <AddInspectorContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          Status
        </Text>
        <ButtonsContainer>
          <Button
            borderRadius="8px"
            width="112px"
            height="54px"
            color="#8CCC87"
          >
            <Text
              color="#FFFFFF"
              letterSpacing="0.35px"
              fontWeight="600"
              fontSize="14px"
            >
              GOOD
            </Text>
          </Button>
          <Button
            borderRadius="8px"
            width="112px"
            height="54px"
            color="#FECA57"
          >
            <Text
              color="#FFFFFF"
              letterSpacing="0.35px"
              fontWeight="600"
              fontSize="14px"
            >
              NEED REPAIR
            </Text>
          </Button>
          <Button
            borderRadius="8px"
            width="112px"
            height="54px"
            color="#FF5E57"
          >
            <Text
              color="#FFFFFF"
              letterSpacing="0.35px"
              fontWeight="600"
              fontSize="14px"
            >
              BROKEN
            </Text>
          </Button>
        </ButtonsContainer>
      </FieldContainer>
      <FieldContainer>
        <Text
          color="#2F3542"
          letterSpacing="0.36px"
          fontWeight="bold"
          fontSize="18px"
        >
          Date
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
          Details
        </Text>
        <Input />
      </FieldContainer>
      <FieldContainer>
        <PhotoContainer>
          <Camera width={30} height={24} />
          <Text
            color="#2F3542"
            letterSpacing="0px"
            fontWeight="600"
            fontSize="20px"
          >
            ADD PHOTO
          </Text>
        </PhotoContainer>
      </FieldContainer>
      <SaveContainer>
        <Button borderRadius="28px" width="345px" height="56px" color="#52C782">
          <Text
            color="#FFFFFF"
            letterSpacing="1.62px"
            fontWeight="600"
            fontSize="18px"
          >
            SAVE
          </Text>
        </Button>
      </SaveContainer>
    </AddInspectorContainer>
  );
};
