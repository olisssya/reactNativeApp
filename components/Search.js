import React, { useContext, useEffect, useState } from "react";
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

import { StateContext } from "../context/StateContext";

export default function Search(props) {
  const [inputText, onChangeInputText] = useState("");
  const { state, dispatch } = useContext(StateContext);

  async function searchHero () {
    const result = await fetch(`https://swapi.dev/api/people/?search=${inputText}`);
    try {
      const data = await result.json();
      console.log(data);
      dispatch({ type: "SEARCH_HERO", payload: data.results });
    } catch (error) {
      Alert.alert("Герой не найден");
    }
  }


    return (
        <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="введите имя героя"
          value={inputText}
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          onChangeText={onChangeInputText}
        />
        <TouchableOpacity
      onPress={searchHero}
      activeOpacity={.5}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>найти героя</Text>
</TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
 
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

