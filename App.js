import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationBar from "react-native-navbar-color";
import { Ionicons } from "@expo/vector-icons";
import SearchSreen from "./screens/SearchSreen";
import Library from "./screens/Library";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#aaaaaa",
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopWidth:0
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return tabInfo.focused ? (
                <Image source={require("./assets/icons/HomeFilled.png")} />
              ) : (
                <Image source={require("./assets/icons/Homeoutline.png")} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchSreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return tabInfo.focused ? (
                <Image source={require("./assets/icons/SearchFilled.png")} />
              ) : (
                <Image source={require("./assets/icons/SearchOutline.png")} />
              );
            },
          }}
        />
        <Tab.Screen name="Your Library" component={Library} options={{
          
          tabBarIcon: (tabInfo) => {
            return tabInfo.focused ? (
              <Image source={require("./assets/icons/LibraryFilled.png")} />
            ) : (
              <Image source={require("./assets/icons/LibraryOutline.png")} />
            );
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
