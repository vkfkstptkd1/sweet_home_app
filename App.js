import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Location from "expo-location";
import axios from "axios";//fetch
import {Ionicons} from "@expo/vector-icons";
import Feeling from "./Feeling.js";

const WEATHER_API_KEY ="765ed73d4d92f1e27e000c6371f2f459";

class HomeScreen extends React.Component {
  state = {
    isLoading: true
  }
  render(){
   return (
     <View>
       <Feeling/>
     </View>
   );
  }
}

export default HomeScreen;

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
