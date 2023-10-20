import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bar from "../components/Bar";
import { TouchableOpacity } from "react-native";
import RecentPlays from "../components/RecentPlays";
import RecentCard from "../components/RecentCard";
import TopBar from "../components/TopBar";
import PickedTemplate from "../components/PickedTemplate";

const HomeScreen = () => {
  return (
    <View className="bg-black pt-12 flex-1">
        <TopBar/>
        <RecentPlays/>
        <PickedTemplate/>
    </View>
  );
};

export default HomeScreen;
