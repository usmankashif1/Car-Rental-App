import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import Login from '../Screens/Auth/Login';
import InputC from '../Components/InputC';
import SignUp from '../Screens/Auth/SignUp';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import VerifyNumber from '../Screens/Auth/VerifyNumber';
import Splash_Screen from '../Screens/Splash/Splash_Screen';
import One from '../Screens/On_Boarding_Screen/One';
import Two from '../Screens/On_Boarding_Screen/Two';
import AuthVerificationCode from '../Screens/Auth/AuthVerificationCode';
import Home from '../Screens/Main/Home';
import Brands from '../Screens/Main/Brands';
import BestCars from '../Screens/Main/BestCars';
import Search from '../Screens/Search/Search';
import HorizontalBrands from '../Screens/Search/HorizontalBrands';
import PopularCars from '../Screens/Search/PopularCars';
import HeaderC from '../Components/HeaderC';
import CarDetail from '../Screens/Car_Detail/CarDetail';
import Review from '../Screens/ReviewScreen.js/Review';
import FilterModal from '../Screens/FilterModal.js/FilterModel';
import DatePicker from '../Screens/FilterModal.js/DatePicker';
import PaymentMethods from '../Screens/OrderSystem/PaymentMethods';
import Booking from '../Screens/OrderSystem/Booking';
import Confirmation from '../Screens/OrderSystem/Confirmation';
import OrderPaymentDetails from '../Screens/OrderSystem/OrderPaymentDetails';
import Chat from '../Screens/Chat/Chat';
import Notification from '../Screens/Notification/Notification';
import ProfileScreen from '../Screens/Profile/Profile';
import EditProfile from '../Screens/Profile/EditProfile';
import WelcomePartner from '../Screens/Partner_Program/WelcomePartner';
import AccountPartner from '../Screens/Partner_Program/AccountPartner';
import Verify_Success_Partner from '../Screens/Partner_Program/Verify_Success_Partner';
import Otp_Partner_Verify from '../Screens/Partner_Program/Otp_Partner_Verify';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
