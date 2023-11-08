import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import RecentPlayedCard from "./RecentPlayedCard";

const RecentlyPlayed = () => {
  return (
    <View>
      <View className="p-3">
        <View>
          <Text className="color-white text-2xl font-bold">Picked For You</Text>
        </View>
        <RecentPlayedCard />
      </View>
    </View>
  );
};

export default RecentlyPlayed;

const styles = StyleSheet.create({});
