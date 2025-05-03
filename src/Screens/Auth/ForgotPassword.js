import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import appTheme, {clr, FONTS} from '../../Constants/theme';
import ButtonC from '../../Components/ButtonC';
import InputC from '../../Components/InputC';
import {useNavigation} from '@react-navigation/native';
import responsive from '../../Components/Responsive';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.LogoNameContainer}>
        <View style={styles.logoIcon}>
          <Ionicons name="car-sport" size={responsive.width(27)} color="white" />
        </View>
        <Text style={[FONTS.h1, {fontSize: 30}]}>Qent</Text>
      </View>
      <View style={{alignItems:'center'}}>
            <Text style={FONTS.h1}>Reset your password</Text>
            <Text
              style={[
                FONTS.h4,
                {
                  color: clr.Text2,
                  marginVertical: responsive.margin(5),
                  fontSize: responsive.fontSize(14),
                  textAlign:'center'
                  
                },
              ]}>
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </Text>
          <InputC
            placeholder="Email"
            width="100%"
            marginVertical={responsive.margin(15)}
          />
          <ButtonC
            title={'Continue'}
            color={'white'}
            fontSize={18}
            width="100%"
            height={responsive.height('7%')}
            onPress={() => navigation.navigate('VerifyNumber')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[FONTS.h4, {fontSize: 14,marginVertical:responsive.margin(5)}]}>Return to Sign in</Text>
          </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14,right:4}]}>
          Create a
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[FONTS.h4, {color: clr.Text1, fontSize: 14,}]}>New Account</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appTheme.clr.primary,
    padding: 15,
    justifyContent:'space-between'
  },
  LogoNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    height: responsive.height('6%'),
    width: responsive.width('12.5%'),
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
  },
  
 
});
