import React, {useState} from 'react';

// UI & Styles
import styles from './movieCardStyles';
import {View, TouchableHighlight} from 'react-native';
import {
  CardLayout,
  CardImage,
  Title,
  Description,
} from '../globalComponentsStyles';

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
        activeOpacity={0.8}
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
