import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RecentCard = ({text}) => {
  return (
    <TouchableOpacity className="bg-[#2a2a2a] rounded-md flex-row items-center w-1/2 m-1 ">
        <View className="w-1/3 bg-amber-200 h-full"></View>
        <Text className="m-2 color-white font-semibold">{text}</Text>
    </TouchableOpacity>
  )
}

export default RecentCard
