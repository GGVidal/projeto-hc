import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { InspectionItem } from "../InspectionItem";
import { ButtonsContainer, InspectionContainer } from "./styles";

export const InspectionList: FC = () => {
  const { navigate } = useNavigation();
  return (
    <InspectionContainer>
      <ButtonsContainer>
        <Button
          height="36px"
          width="198px"
          borderRadius="18px"
          color="#2F3542"
          onPress={() => navigate("AddInspection")}
        >
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
      {/* Aqui deveria ter uma flatlist que ia renderizar os items fazendo um map e retornando o inspection item, mas não tive tempo :D */}
      <InspectionItem />
      <InspectionItem />
      <InspectionItem />
      <InspectionItem />
    </InspectionContainer>
  );
};
