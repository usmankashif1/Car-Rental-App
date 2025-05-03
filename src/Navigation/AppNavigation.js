import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'
import Login from '../Screens/Auth/Login'
import InputC from '../Components/InputC'
import SignUp from '../Screens/Auth/SignUp'
import ForgotPassword from '../Screens/Auth/ForgotPassword'
import VerifyNumber from '../Screens/Auth/VerifyNumber'
import Splash_Screen from '../Screens/Splash/Splash_Screen'
import One from '../Screens/On_Boarding_Screen/One'
import Two from '../Screens/On_Boarding_Screen/Two'
import AuthVerificationCode from '../Screens/Auth/AuthVerificationCode'
import Home from '../Screens/Main/Home'
import Brands from '../Screens/Main/Brands'
import BestCars from '../Screens/Main/BestCars'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})