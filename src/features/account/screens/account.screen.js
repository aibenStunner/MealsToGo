import React from "react";
import {
  AcccountContainer,
  AccountBackground,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AcccountContainer>
        <AuthButton
          icon="lock-open-outline"
          color={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            color={colors.brand.primary}
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AcccountContainer>
    </AccountBackground>
  );
};
