import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const CardLayout = styled.View`
  padding: 15px;
  ${Platform.select({
    ios: `
      height: 600px;
      width: 460px;
    `,
    android: `
      height: 300px;
      width: 260px;
    `,
  })};
`;

export const CardImage = styled.Image`
  flex: 1;
  resize-mode: contain;
  width: null;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  ${Platform.select({
    ios: `font-size: 35px; margin-vertical: 12px`,
    android: `font-size: 22px; margin-bottom: 10px`,
  })};
`;

export const Description = styled.Text`
  color: #fff;
  ${Platform.select({
    ios: `font-size: 28px; line-height:40px`,
    android: `font-size: 16px; line-height:22px`,
  })};
`;
