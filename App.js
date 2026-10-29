import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import {Movie} from "./movie.js";

class AllMovies extends React.Component {
  render() {
    return(<View>
      <Movie title={"Doctor sleep"} year={"2019"} icon_name={"skull"} poster={require("./assets/img/doctor-sleep.jpg")} icon_color={"red"}/>
      <Movie title={"Midway"} year={"2020"} icon_name={"person-rifle"} poster={require("./assets/img/midway.jpg")} icon_color={"green"}/>
        <Movie title={"Five nights at freddy"} year={"2025"} icon_name={"skull"} poster={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzYQKrJ8hhjpdq2YkKYg2oTCnzZFJbwBpp0307iRTuQ&s=10'}} icon_color={"grey"}  />
    </View>)
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <AllMovies/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
