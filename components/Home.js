import React, { useContext, useEffect } from "react";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

import { stateContext } from "../context/stateContext";

export default function Home() {
  const { state, dispatch } = useContext(stateContext);
  useEffect(async () => {
    const result = await fetch("https://swapi.dev/api/people/");
    try {
      const data = await result.json();
      dispatch({ type: "LOAD_HEROES", payload: data.results });
    } catch (error) {
      Alert.alert("No one hero :(");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="введите имя героя"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
        />
        <TouchableOpacity
      activeOpacity={.5}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>найти героя</Text>
</TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {state.heroes.map((hero) => (
          <Text key={hero.name} style={styles.text}>
            {hero.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e0000",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  wrapper: {
    alignItems: "center",
  },
  input: {
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    padding: 10,
    marginRight:10
  },
  search:{
    flexDirection:'row',
    marginBottom:50,
    marginTop:50
  },
  buttonStyle: {
    padding: 14,
    backgroundColor: '#500805',
    borderRadius: 6,
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },


});
