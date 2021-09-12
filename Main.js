import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class MainScreen extends React.Component{
    static navigationOptions = {
        title: '메인 페이지',
      };
    render() {
        const {navigate} = this.props.navigation;
        return (
    <View style = {styles.container}>
        <Text style = {styles.text}>SWEET HOME</Text>
        <StatusBar barStyle="dark-content" />
    </View>
    );
}
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#d6e6f0'
    },
    text : {
        color: "#2c2c2c",
        fontSize: 40
    }
})

