/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//Components
import HomeScreen from './src/containers/HomeScreen';

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
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
