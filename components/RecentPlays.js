import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecentRow from './RecentRow'

const RecentPlays = () => {
  return (
    <View className="p-2 mt-3">
      <RecentRow name1="Liked Songs" name2="Top Hits 100"/>
      <RecentRow name1="Sad Beats" name2="Alex Lustig"/>
      <RecentRow name1="I don't wanna" name2="Erase You"/>
    </View>
  )
}

export default RecentPlays

const styles = StyleSheet.create({})