import React from 'react';

// UI & Styles
import {View} from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './homeScreenStyles';

// Data
import {movies} from '../../db';

export default function HomeScreen() {
  return (
    <View style={styles.sectionContainer}>
      {movies?.map(item => {
        return (
          <MovieCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.text}
            image={item.image}
          />
        );
      })}
    </View>
  );
}
