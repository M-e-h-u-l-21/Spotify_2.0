import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bar = ({text}) => {
  return (
    <View className="bg-[#22d460] rounded-full">
      <Text className="color-black p-3">
        {text}
      </Text>
    </View>
  )
}

export default Bar

const styles = StyleSheet.create({})