import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Location from "expo-location";
import axios from "axios";//fetch
import Loading from "./Loading.js";
import MainScreen from "./Main.js"
import Weather from "./SelectFeeling.js";
import Feeling from "./SelectFeeling.js";
//import Feeling from "./Feeling.js";
const WEATHER_API_KEY ="765ed73d4d92f1e27e000c6371f2f459";

class StartScreen extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async(latitude, longitude) => {
    const {
        data: {
            main: { temp },
            weather
        }
    } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.3840749&lon=126.66334940000002&appid=765ed73d4d92f1e27e000c6371f2f459&units=metric`
    ); //axios를 이용해 openAPI 가져옴
    //   console.log( data );

    this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp,
    });
  };
  getLocation = async() => {
    try {
        await Location.requestForegroundPermissionsAsync(); //client에게 위치 정보 따와도 되는지 허가요청
        const {
            coords: { latitude, longitude }
        } = await Location.getCurrentPositionAsync(); //expo의 현재 위치 가져와주는 기능
        this.getWeather(latitude, longitude)
            //this.setState({ isLoading: false });
    } catch {
        Alert.alert("Can't find you.", "We can't recommend you anything.");
    }
}
  componentDidMount() { //render 되고 난 후 실행
    this.getLocation();

    fetch('http://192.168.0.7:80')
      .then(res =>
        console.log(res),
          // this.setState({
          //   sample: res
          // })
        )
  }
  render() {
    const { isLoading, temp, condition } = this.state;
      return ( isLoading ? ( < Loading /> ) : (< Weather temp = { Math.round(temp) } condition = { condition }/> )
      )
    }
}

const AppNavigator = createStackNavigator(
  {
    Ready: { screen : StartScreen},
    Main: { screen : MainScreen }
  },
  {
    initialRouteName: 'Ready',
  }
  );
  export default createAppContainer(AppNavigator);
 