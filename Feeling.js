import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons'; 

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

export default function Feeling(){
    return (
        <View>
            <Ionicons
            size={96}
            name={feelingOptions["Happy"].iconName}
            color="black"
            />
        </View>
    );
}