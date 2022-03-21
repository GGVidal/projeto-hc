import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { FAB } from "../../components/FAB";
import { Text } from "../../components/Text";
import { TractorListHeader } from "../../components/TractorListHeader";
import { TractorListItem } from "../../components/TractorListItem";
import { SubHeaderContainer } from "./styles";
import Add from "../../assets/add.svg";
import { useNavigation } from "@react-navigation/native";
import { RootStack } from "../../navigation/routes.types";

export const TractorList: FC = () => {
  const { navigate } = useNavigation();
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
        <TractorListItem onPress={() => navigate("TractorDetails")} />
        <TractorListItem onPress={() => navigate("TractorDetails")} />
      </SafeAreaView>
      <FAB onPress={() => navigate("CreateTractor")}>
        <Add width={18} height={18} />
      </FAB>
    </>
  );
};
