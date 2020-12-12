import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Products from "./components/product";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainScreen}>
      <View style={styles.box}>
        <Ionicons name="menu" size={35} color="#000" />
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>FOOD APP</Text>
        <Ionicons name="search-sharp" size={30} color="#000" />
      </View>

      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text style={styles.mainText}>Foods That</Text>
        <Text style={styles.mainText}>Meets You Needs</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 30, height: 100 }}
      >
        <View style={[styles.tabs, { backgroundColor: "#e4e64d" }]}>
          <Image
            style={styles.tabImg}
            source={require("../assets/images/burger1.png")}
          />
          <Text style={styles.tabText}>Burgers</Text>
        </View>
        <View style={[styles.tabs, { backgroundColor: "#e07f69" }]}>
          <Image
            style={[styles.tabImg, { width: 30 }]}
            source={require("../assets/images/fries.png")}
          />
          <Text style={styles.tabText}>Hot Fries</Text>
        </View>
        <View style={[styles.tabs, { backgroundColor: "#cce0e6" }]}>
          <Image
            style={styles.tabImg}
            source={require("../assets/images/burger2.png")}
          />
          <Text style={styles.tabText}>Black Burgers</Text>
        </View>
        <View style={[styles.tabs, { backgroundColor: "#c1ea6f" }]}>
          <Image
            style={styles.tabImg}
            source={require("../assets/images/burnito.png")}
          />
          <Text style={styles.tabText}>Burrito</Text>
        </View>
        <View style={[styles.tabs, { backgroundColor: "#e4d956" }]}>
          <Image
            style={[styles.tabImg, { width: 60 }]}
            source={require("../assets/images/chicken.png")}
          />
          <Text style={styles.tabText}>Chicken Broast</Text>
        </View>
      </ScrollView>

      <View
        style={{
          marginTop: 35,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>New Products</Text>
        <Ionicons name="ellipsis-horizontal" size={30} color="#000" />
      </View>

      <View
        style={{ width: "100%", flexDirection: "row", paddingHorizontal: 10 }}
      >
        <View style={{ width: "50%", marginTop: 20, paddingRight: 5 }}>
          <Products
            cal={290}
            image={require("../assets/images/white-smoke.png")}
            name="White Smoke"
            meat="Beaf Burger"
            onClick={() => navigation.navigate("ProductDetail")}
          />
          <Products
            cal={250}
            image={require("../assets/images/burrito.png")}
            name="Russian Burrito"
            meat="Vegetable Burrito"
            onClick={() => navigation.navigate("ProductDetail")}
          />
          <Products
            cal={270}
            image={require("../assets/images/broast-pro.png")}
            name="Broasted Chicken"
            meat="Chicken Broast"
            onClick={() => navigation.navigate("ProductDetail")}
          />
        </View>

        <View style={{ width: "50%", marginTop: 50, paddingLeft: 5 }}>
          <Products
            cal={280}
            image={require("../assets/images/black.png")}
            name="Burger Black"
            meat="Beaf Burger"
            onClick={() => navigation.navigate("ProductDetail")}
          />
          <Products
            cal={290}
            image={require("../assets/images/fries-pro.png")}
            name="Salty Fries"
            meat="Potato Fries"
            onClick={() => navigation.navigate("ProductDetail")}
          />
          <Products
            cal={290}
            image={require("../assets/images/hotdouge-pro.png")}
            name="Hotdouge Burger"
            meat="Beaf Burger"
            onClick={() => navigation.navigate("ProductDetail")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  box: {
    width: "100%",
    height: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  tabs: {
    marginHorizontal: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 8,
  },
  tabImg: {
    width: 40,
    height: "100%",
  },
  tabText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Home;
