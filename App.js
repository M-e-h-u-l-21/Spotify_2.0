import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  const Tab=createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
