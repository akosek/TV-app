import React from 'react';

// UI & Styles
import {View} from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './homeScreenStyles';

export type Props = {};

export default function HomeScreen(props: Props) {
  return (
    <View style={styles.sectionContainer}>
      <MovieCard
        id="2"
        title="Grand Budapest Hotel"
        description="A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
        image={require('../../assets/images/grandBudapest.png')}
      />
      <MovieCard
        id="1"
        title="Tannenbaums"
        description="lalala ksndksjndkjs akjnskajns"
        image={require('../../assets/images/tanenbaums.png')}
      />
    </View>
  );
}
