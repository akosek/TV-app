/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

//Components
import HomeScreen from './src/containers/HomeScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flexGrow: 1,
      }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
