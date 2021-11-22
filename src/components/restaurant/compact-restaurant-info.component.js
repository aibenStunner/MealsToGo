import React from "react";
import { Image, View, Platform } from "react-native";

import styled from "styled-components/native";
import WebView from "react-native-webview";

import { TextComponent } from "../typography/text.component";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  overflow: hidden;
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image_ = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image_ source={{ uri: restaurant.photos[0] }} />
      <TextComponent center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </TextComponent>
    </Item>
  );
};
