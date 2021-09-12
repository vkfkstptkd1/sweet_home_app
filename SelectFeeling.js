import React,{Component} from "react";
import { View, Text, StyleSheet, StatusBar,Button } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const feelingOptions = {
  Happy: {
      iconName: "happy-outline"
  },
  Sad: {
      iconName: "sad-outline"
  },
  InLove: {
      iconName: "heart-circle-outline"
  },
  Bubbly: { //싱숭생숭
      iconName: "help"
  }
}
const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "뇌우",
        subtitle: "나가지 않는 게 좋겠네요."
    },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title : "이슬비",
        subtitle: "보슬보슬 비 내리는 날"
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "나가기 전 우산 꼭 챙기세요!"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title : "눈",
        subtitle: "나랑 눈사람 만들지 않을래요?"
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "우박",
        subtitle: "머리 조심!"
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "맑음",
        subtitle: "오늘처럼 날씨 좋은 날, 산책 어떠세요?"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "구름",
        subtitle: "혹시 모르니 우산 챙기세요!"
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "박무",
        subtitle: "운전 조심하세요!"
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "황사",
        subtitle: "마스크를 착용하는게 좋겠네요."
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "연무",
        subtitle: "밖으로 안나가는게 좋겠네요!"
      }
    };
    
    export default function Weather({ temp, condition,sample }) {
        return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
          <StatusBar barStyle="light-content" />
          <View style={styles.halfContainer}>
            <MaterialCommunityIcons
              size={96}
              name={weatherOptions[condition].iconName}
              color="white"
            />
            <Text style={styles.temp}>{temp}°</Text>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
          </View>
          <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
            <Text style={styles.subtitle}>{sample}</Text>
            <View style ={styles.buttonstyle} >
            <Ionicons.Button name={feelingOptions["Happy"].iconName} size={50} color="black" onPress={() => {navigation.navigate("MainScreen")}}>
            </Ionicons.Button>
            <Ionicons.Button name={feelingOptions["Sad"].iconName} size={50} color="black" onPress={() => {navigation.navigate("MainScreen")}}></Ionicons.Button>
            <Ionicons.Button name={feelingOptions["InLove"].iconName} size={50} color="black" onPress={() => {navigation.navigate("MainScreen")}}></Ionicons.Button>
            <Ionicons.Button name={feelingOptions["Bubbly"].iconName} size={50} color="black" onPress={() => {navigation.navigate("MainScreen")}}></Ionicons.Button>
            </View>
          </View>
        </LinearGradient>
      );
    }
    Weather.propTypes = {
      temp: PropTypes.number.isRequired,
      condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      temp: {
        fontSize: 42,
        color: "white"
      },
      halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      title: {
        color: "white",
        fontSize: 30,
        fontWeight: "300",
        marginBottom: 30,
        marginTop : 30
      },
      subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        marginBottom: 50
      },
      buttonstyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
      },
      textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
      }
    });