import React from "react";

import { TextComponent } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartIcon, CartIconContainer } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <TextComponent variant="label">Success!</TextComponent>
      </CartIconContainer>
    </SafeArea>
  );
};
