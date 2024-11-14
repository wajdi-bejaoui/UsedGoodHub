import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground 
    blurRadius={10}
    style={styles.background}
    source={require("../assets/background_img.webp")}>
      <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require("../assets/logo.png")}/>
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <AppButton title="Login"/>
        <AppButton title="Register" color="secondary" textColor='black'/>
        
      </View>
      
    </ImageBackground>
  );

  
}

const styles = StyleSheet.create({
 background : {
  flex : 1,
  justifyContent : 'flex-end',
  alignItems : 'center',
 },
 buttonsContainer : {
  padding : 20,
  width : '100%',
 },
 logo : {
  width : 100,
  height : 100,
 },
 logoContainer : {
  flex : 1,
  alignItems : 'center',
  position : 'absolute',
  top : 70,
 },
 tagLine : {
  fontSize:25,
  fontWeight:"600",
  paddingVertical :20,
 }
 
})

export default WelcomeScreen;