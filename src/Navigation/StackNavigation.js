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
import BottomNavigation from './BottomNavigation';
import CarDetail from '../Screens/Car_Detail/CarDetail';
import Review from '../Screens/ReviewScreen.js/Review';
import PaymentMethods from '../Screens/OrderSystem/PaymentMethods';
import Booking from '../Screens/OrderSystem/Booking';
import OrderPaymentDetails from '../Screens/OrderSystem/OrderPaymentDetails';
import Confirmation from '../Screens/OrderSystem/Confirmation';
import WelcomePartner from '../Screens/Partner_Program/WelcomePartner';
import AccountPartner from '../Screens/Partner_Program/AccountPartner';
import Otp_Partner_Verify from '../Screens/Partner_Program/Otp_Partner_Verify';
import Verify_Success_Partner from '../Screens/Partner_Program/Verify_Success_Partner';
import Payment_Method from '../Screens/Partner_Program/Payment_Method';

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
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
      ) : (
        <>
          <Stack.Screen
            name="One"
            component={One}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Two"
            component={Two}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="VerifyNumber"
            component={VerifyNumber}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="AuthVerificationCode"
            component={AuthVerificationCode}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="CarDetail"
            component={CarDetail}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Review"
            component={Review}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="PaymentMethods"
            component={PaymentMethods}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Booking"
            component={Booking}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="OrderPaymentDetails"
            component={OrderPaymentDetails}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Confirmation"
            component={Confirmation}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="WelcomePartner"
            component={WelcomePartner}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="AccountPartner"
            component={AccountPartner}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Otp_Partner_Verify"
            component={Otp_Partner_Verify}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Verify_Success_Partner"
            component={Verify_Success_Partner}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="Payment_Method"
            component={Payment_Method}
            options={{headerShown: false, animation: 'slide_from_right'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
