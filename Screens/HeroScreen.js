import React from "react";

import { Text, View, StyleSheet } from "react-native";


export default function HeroScreen({hero}) {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>{hero.name}</Text>
      <Text style={styles.text}>Gender: {hero.gender}</Text>
      <Text style={styles.text}>Birth year: {hero.birth_year}</Text>
      <Text style={styles.text}>Eye color: {hero.eye_color}</Text>
      <Text style={styles.text}>Hair color: {hero.hair_color}</Text>
      <Text style={styles.text}>Height: {hero.height}</Text>
      <Text style={styles.text}>Homeworld: {hero.homeworld}</Text>
      <Text style={styles.text}>Mass: {hero.mass}</Text>
      <Text style={styles.text}>Skin color: {hero.skin_color}</Text>
      <Text style={styles.text}>Created: {hero.created}</Text>
      <Text style={styles.text}>Edited: {hero.edited}</Text>
      

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
  title:{
    color:'white',
    fontSize: 25,
    fontWeight: "bold",
    marginBottom:20
  },
  text:{
    color:'white',
    fontSize: 15,
    marginBottom:10
  }
})
