import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bar from "../components/HomeScreen/Bar";
import { TouchableOpacity } from "react-native";
import RecentPlays from "../components/HomeScreen/RecentPlays";
import RecentCard from "../components/HomeScreen/RecentCard";
import TopBar from "../components/HomeScreen/TopBar";
import PickedTemplate from "../components/HomeScreen/PickedTemplate";
import RecentlyPlayed from "../components/HomeScreen/RecentlyPlayed";

const HomeScreen = () => {
  return (
    <ScrollView className="bg-black pt-12">
      <TopBar />
      <RecentPlays />
      <PickedTemplate />
      <RecentlyPlayed />
    </ScrollView>
  );
};
export default HomeScreen;
