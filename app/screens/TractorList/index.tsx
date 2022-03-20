import React, { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { FAB } from "../../components/FAB";
import { Text } from "../../components/Text";
import { TractorListHeader } from "../../components/TractorListHeader";
import { TractorListItem } from "../../components/TractorListItem";
import { SubHeaderContainer } from "./styles";
import Add from "../../assets/add.svg";

export const TractorList: FC = () => {
  return (
    <>
      <SafeAreaView>
        <TractorListHeader />
        <SubHeaderContainer>
          <Text
            fontSize="14px"
            fontWeight="bold"
            letterSpacing="0.7px"
            color="#1157B9"
          >
            Tractor list
          </Text>
          <Text
            fontSize="14px"
            fontWeight="600"
            letterSpacing="0.7px"
            color="#8893A0"
          >
            (7 itens)
          </Text>
        </SubHeaderContainer>
        <TractorListItem />
        <TractorListItem />
      </SafeAreaView>
      <FAB>
        <Add width={18} height={18} />
      </FAB>
    </>
  );
};
