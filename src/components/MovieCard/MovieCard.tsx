import React, {useState} from 'react';

// UI & Styles
import {View, TouchableHighlight, Text, Platform} from 'react-native';
import styled from 'styled-components/native';
import styles from './movieCardStyles';

const CardLayout = styled.View`
  padding: 15px;
  ${Platform.select({
    ios: `
      height: 600px;
      width: 460px;
    `,
    android: `
      height: 300px;
      width: 260px;
      color: red;
    `,
  })};
`;

const CardImage = styled.Image`
  flex: 1;
  resize-mode: contain;
  width: null;
`;

const Title = styled.Text`
  text-align: center;
  color: #fff;
  ${Platform.select({
    ios: `font-size: 30px;`,
    android: `font-size: 20px; margin-bottom: 10px`,
  })};
`;

const Description = styled.Text`
  color: #fff;
  ${Platform.select({
    ios: `font-size: 24px;`,
    android: `font-size: 14px; line-height:20px`,
  })};
`;

export type Props = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

export default function MovieCard(props: Props) {
  const [focus, setFocus] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    setShowText(false);
  };

  const handleText = () => {
    setShowText(true);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableHighlight
        style={focus ? styles.cardFocused : styles.cardDefault}
        activeOpacity={0.9}
        onFocus={handleFocus}
        underlayColor="#fff"
        onBlur={handleBlur}
        onPress={handleText}>
        <CardLayout>
          <CardImage source={props.image} />
        </CardLayout>
      </TouchableHighlight>

      <View style={styles.infoContainer}>
        <Title> {showText ? props.title : null}</Title>
        <Description>{showText ? props.description : null}</Description>
      </View>
    </View>
  );
}
