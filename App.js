import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";



const Movie = ({title,year,icon_name,poster,icon_color}) => {
  return (
      <View>
        <Text>{title}</Text>
        <Text>{year}</Text>
        <FontAwesome6 name={icon_name} size={20} color={icon_color} />
        <Image source={poster} style={{height : 500 , width : 400}}/>
      </View>
  )
}

class AllMovies extends React.Component {
  render() {
    return(<View>
      <Movie title={"Doctor sleep"} year={"2019"} icon_name={"skull"} poster={require("./assets/img/doctor-sleep.jpg")} icon_color={"red"}/>
      <Movie title={"Midway"} year={"2020"} icon_name={"person-rifle"} poster={require("./assets/img/midway.jpg")} icon_color={"green"}/>
        <Movie title={"Five nights at freddy"} year={"2025"} icon_name={"skull"} poster={{ uri: 'https://reactjs.org/logo-og.png'}} icon_color={"grey"}  />
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
