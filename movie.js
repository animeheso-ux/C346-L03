import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

export const Movie = ({title,year,icon_name,poster,icon_color}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{year}</Text>
            <FontAwesome6 name={icon_name} size={20} color={icon_color} />
            <Image source={poster} style={{height : 500 , width : 400}}/>
        </View>
    )
}