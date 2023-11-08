import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const ProfileImage = () => {
  return (
    <TouchableOpacity >
        <Image
          source={require("../../assets/images/whymona.png")}
          resizeMethod="resize"
          resizeMode="contain"
          className="rounded-full h-10 w-10"
        />
      </TouchableOpacity>
  )
}

export default ProfileImage

const styles = StyleSheet.create({})