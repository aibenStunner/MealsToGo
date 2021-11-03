import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${statusBarHeight && `margin-top: ${statusBarHeight}px`};
`;
