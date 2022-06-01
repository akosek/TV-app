/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import ReactNative, {
  Platform,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//Components
import MovieCard from './src/components/MovieCard/MovieCard';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContnet: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.sectionContainer}>
        <MovieCard
          title="Grand Budapest Hotel"
          description="lalala ksndksjndkjs akjnskajns"
          image={require('./assets/images/grandBudapest.png')}
        />
        <MovieCard
          title="Tannenbaums"
          description="lalala ksndksjndkjs akjnskajns"
          image={require('./assets/images/tanenbaums.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContnet: 'center',
    alignItems: 'center',
  },
});

export default App;
