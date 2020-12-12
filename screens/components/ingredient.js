import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Ingredients = () => (
  <>
    <View style={styles.ingredients}>
      <Image
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/ingridents/ing0.png")}
      />
    </View>
    <View style={styles.ingredients}>
      <Image
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/ingridents/ing1.png")}
      />
    </View>
    <View style={styles.ingredients}>
      <Image
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/ingridents/ing2.png")}
      />
    </View>
    <View style={styles.ingredients}>
      <Image
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/ingridents/ing3.png")}
      />
    </View>
    <View style={styles.ingredients}>
      <Image
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/ingridents/ing4.png")}
      />
    </View>
    <View style={styles.ingredients}>
      <Image
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/ingridents/ing5.png")}
      />
    </View>
  </>
);

export default Ingredients;

//
//
const styles = StyleSheet.create({
  ingredients: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 3,
  },
});
