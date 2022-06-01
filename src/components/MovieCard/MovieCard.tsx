import React, {useState} from 'react';

// UI & Styles
import {View, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';
import styles from './movieCardStyles';

export type Props = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

const CardLayout = styled.View`
  height: 600px;
  width: 460px;
  margin: 60px;
`;

const CardImage = styled.Image`
  flex: 1;
  resize-mode: contain;
  width: null;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 30px;
`;

function MovieCard(props: Props) {
  const [focus, setFocus] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleText = () => {
    setShowText(true);
  };

  return (
    <View>
      <TouchableHighlight
        style={focus ? styles.cardFocused : styles.cardDefault}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPress={handleText}>
        <CardLayout>
          <CardImage source={props.image} />
        </CardLayout>
      </TouchableHighlight>
      <Title style={{color: 'white'}}> {showText ? props.title : null}</Title>
      <Title style={{color: 'white'}}>
        {showText ? props.description : null}
      </Title>
    </View>
  );
}

export default MovieCard;
