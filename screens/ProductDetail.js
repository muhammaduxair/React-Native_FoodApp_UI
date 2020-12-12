import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Ingredients from "./components/ingredient";

const ProDet = ({ navigation }) => {
  let [heart, setHeart] = useState(false);
  let [count, setCount] = useState(1);
  let [cart, setCart] = useState(true);

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
      }}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 7,
          paddingHorizontal: 10,
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/fire.png")}
          />
          <Text style={{ marginLeft: 7, fontSize: 18, fontWeight: "bold" }}>
            290 Calories
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={() => setHeart(!heart)}>
          {!heart ? (
            <Ionicons name="ios-heart-outline" size={30} color="#000" />
          ) : (
            <Ionicons name="heart-sharp" size={30} color="red" />
          )}
        </TouchableWithoutFeedback>
      </View>

      {/* image */}
      <View
        style={{
          width: "100%",
          height: 220,
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Image
          resizeMode="stretch"
          source={require("../assets/images/black.png")}
          style={{ width: "70%", height: "100%" }}
        />
      </View>

      {/* counter */}
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: 5,
          paddingBottom: 10,
        }}
      >
        {cart ? (
          <View
            style={{
              backgroundColor: "#dadde0",
              paddingVertical: 5,
              paddingHorizontal: 10,
              width: "40%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                count < 7
                  ? setCount(count + 1)
                  : alert("You can select a maximum of 7 items")
              }
            >
              <Ionicons name="ios-add-sharp" size={25} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{count}</Text>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => (count <= 1 ? "" : setCount(count - 1))}
            >
              <Ionicons name="remove-outline" size={25} />
            </TouchableOpacity>
          </View>
        ) : undefined}
      </View>

      {/* price & name */}
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            black burger
          </Text>
          <Text
            style={{
              fontSize: 16,
              textTransform: "capitalize",
              color: "gray",
            }}
          >
            beef burger
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            $ {count == 0 ? "00" : 12.99 * count}
          </Text>
        </View>
      </View>

      {/* inGredients */}
      <View style={{ marginTop: 20, paddingVertical: 5 }}>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Ingredients
          </Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Ingredients />
        </View>
      </View>

      {/* details */}
      <View
        style={{
          marginTop: 15,
          paddingHorizontal: 10,
          width: "100%",
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", width: "100%" }}>
          Details
        </Text>
        <Text style={{ textAlign: "justify", fontSize: 16, width: "100%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          excepturi numquam ipsam modi totam vel voluptate? Nesciunt quam fugit
          animi eaque eveniet.
        </Text>
      </View>

      {/* cart */}
      <View
        style={{
          position: "relative",
          bottom: 0,
          left: 0,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={() => setCart(!cart)}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: cart ? "#000" : "#fff",
              borderRadius: 50,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: cart ? undefined : 5,
              borderColor: "#000",
            }}
          >
            {cart ? (
              <Ionicons name="cart" size={30} color="#fff" />
            ) : (
              <FontAwesome name="times" size={30} color="#000" />
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default ProDet;
