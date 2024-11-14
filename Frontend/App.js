import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'


import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';



export default function App() {
  const {landscape} = useDeviceOrientation();
  const [category , setCategory] = useState();
  return (


    // <LoginScreen />
    <ListingEditScreen />
    // <MessagesScreen /> 
     
            
    
  );
}



