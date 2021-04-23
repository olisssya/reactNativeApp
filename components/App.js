/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useReducer } from "react";
import Home from "./Home";
import { reducer } from "../context/reducer";
import { stateContext } from "../context/stateContext";
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

const App = () => {
  const initialState = {
    heroes: [],
   
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <Home />
    </stateContext.Provider>
  );
};

export default App;
