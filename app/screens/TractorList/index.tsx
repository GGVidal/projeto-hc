import React, { FC } from "react";
import { Text } from "../../components/Text";
import { TractorListHeader } from "../../components/TractorListHeader";
import { TractorListItem } from "../../components/TractorListItem";
import { SubHeaderContainer } from "./styles";

export const TractorList: FC = () => {
  return (
    <>
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
    </>
  );
};
