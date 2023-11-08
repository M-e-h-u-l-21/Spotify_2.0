import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../components/SearchScreen/TopBar";
import SearchBar from "../components/SearchScreen/SearchBar";

const SearchSreen = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="mt-16">
        <TopBar />
        <SearchBar/>
      </View>
    </View>
  );
};

export default SearchSreen;

const styles = StyleSheet.create({});
