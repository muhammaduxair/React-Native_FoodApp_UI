import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

const Products = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onClick}>
      <View
        style={{
          backgroundColor: "#e0dede",
          borderRadius: 10,
          padding: 10,
          justifyContent: "flex-start",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../assets/images/fire.png")}
          />
          <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 16 }}>
            {props.cal} Calories
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 100,
            paddingHorizontal: 5,
            marginTop: 10,
          }}
        >
          <Image
            resizeMode="stretch"
            style={{ width: "100%", height: "100%" }}
            source={props.image}
          />
        </View>
        <Text style={{ paddingTop: 10, fontSize: 20, fontWeight: "bold" }}>
          {props.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray" }}>
          {props.meat}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Products;
