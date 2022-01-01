import React from "react";

import { TextComponent } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

import { CartIcon, CartIconContainer } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <TextComponent variant="label">{error}</TextComponent>
      </CartIconContainer>
    </SafeArea>
  );
};
