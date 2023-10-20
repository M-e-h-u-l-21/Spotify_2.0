import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecentCard from './RecentCard'

const RecentRow = ({name1,name2}) => {
  return (
    <View className="flex-row h-[70] w-[365]">
      <RecentCard text={name1}/>
      <RecentCard text={name2}/>
    </View>
  )
}

export default RecentRow

const styles = StyleSheet.create({})