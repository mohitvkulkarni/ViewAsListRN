//Import libraries for making component

import React from 'react'
import { View, Text } from "react-native";

// Make Component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style = {viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 40,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowColor: '#000',
    elevation: 2,
    position: 'relative'
  }
};

//Make component to avail it to other parts of app

export default Header;
