import React, { useContext, useEffect,useReducer } from "react";
import {
  Alert,
  Link,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SearchInput from "../components/Search";
import { stateContext } from "../context/stateContext";
import { showHero } from "../navigation";
import { reducer } from "../context/reducer";


export default function HomeScreen(props) {
  const initialState = {
    heroes: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const result = await fetch("https://swapi.dev/api/people/");
    try {
      const data = await result.json();
      dispatch({ type: "LOAD_HEROES", payload: data.results });
    } catch (error) {
      Alert.alert("Нет ни одного героя :(");
    }
  }, []);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <SearchInput />
        <ScrollView contentContainerStyle={styles.wrapper}>
          {state.heroes.map((hero) => (
            <TouchableOpacity
              key={hero.name}
              onPress={showHero}
              activeOpacity={0.5}
              style={styles.heroLink}
            >
              <Text style={styles.text}>{hero.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </stateContext.Provider>
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
    marginRight: 10,
  },
  search: {
    flexDirection: "row",
    marginBottom: 50,
    marginTop: 50,
  },
  buttonStyle: {
    padding: 14,
    backgroundColor: "#500805",
    borderRadius: 6,
  },

  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  heroLink: {
    padding: 10,
  },
});
