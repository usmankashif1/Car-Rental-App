import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash_Screen from '../Screens/Splash/Splash_Screen';
import One from '../Screens/On_Boarding_Screen/One';
import Two from '../Screens/On_Boarding_Screen/Two';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import VerifyNumber from '../Screens/Auth/VerifyNumber';
import AuthVerificationCode from '../Screens/Auth/AuthVerificationCode';
import Home from '../Screens/Main/Home';

const StackNavigation = () => {
  const [Splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {Splash ? (
        <Stack.Screen
          name="Splash_Screen"
          component={Splash_Screen}
          options={{headerShown: false,animation:'slide_from_right'}}
        />
      ) : (
        <>
          <Stack.Screen
            name="One"
            component={One}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="Two"
            component={Two}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="VerifyNumber"
            component={VerifyNumber}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="AuthVerificationCode"
            component={AuthVerificationCode}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false,animation:'slide_from_right'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
