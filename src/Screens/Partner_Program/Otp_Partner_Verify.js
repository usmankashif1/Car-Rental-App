import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import appTheme, {clr, FONTS} from '../../Constants/theme';
import ButtonC from '../../Components/ButtonC';
import InputC from '../../Components/InputC';
import {useNavigation} from '@react-navigation/native';
import responsive from '../../Components/Responsive';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

const Otp_Partner_Verify = () => {
  const navigation = useNavigation();
  // const [country, setCountry] = useState(null);
  // const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  return (
    <View style={styles.Container}>
      <View style={styles.LogoNameContainer}>
        <View style={styles.logoIcon}>
          <Ionicons
            name="car-sport"
            size={responsive.width(27)}
            color="white"
          />
        </View>
        <Text style={[FONTS.h1, {fontSize: responsive.fontSize(30)}]}>
          Qent
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={[FONTS.h1, {fontSize: responsive.fontSize(28)}]}>
          Enter Verification Code
        </Text>
        <Text
          style={[
            FONTS.h4,
            {
              color: clr.Text2,
              fontSize: responsive.fontSize(14),
              textAlign: 'center',
              marginVertical: responsive.margin(10),
            },
          ]}>
          We have send a Code to : +100******00
        </Text>

        <CodeField
          onChangeText={setValue}
          value={value}
          cellCount={4}
          rootStyle={{marginTop: responsive.margin(15)}}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              <Text style={[FONTS.h4, styles.cellText]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <ButtonC
          title={'Continue'}
          color={'white'}
          fontSize={18}
          width="100%"
          marginVertical={responsive.margin(20)}
          onPress={()=>navigation.navigate('Verify_Success_Partner')}
        />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14, right: 3}]}>
        Didn’t receive the OTP? 
        </Text>
        <TouchableOpacity>
          <Text style={[FONTS.h4, {color: 'black', fontSize: 14}]}>
          Resend
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp_Partner_Verify;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appTheme.clr.primary,
    padding: 15,
    justifyContent: 'space-between',
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

  button: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: responsive.margin(2),
  },
  buttonText: {
    fontSize: responsive.fontSize(16),
    color: clr.Text2,
  },
  countrySelected: {
    flexDirection: 'row',
  },
  countryText: {
    fontSize: responsive.fontSize(18),
    color: 'black',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  UpDown: {
    height: responsive.height(22),
    width: responsive.width('105%'),
    resizeMode: 'contain',
  },
  UpDownContainer: {
    flexDirection: 'row',
    left: 7,
  },
  cell: {
    width: responsive.width(69),
    height: responsive.height(70),
    fontSize: responsive.fontSize(30),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cacaca',
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: responsive.margin(5),
  },
  cellText: {
    textAlign: 'center',
    fontSize: responsive.fontSize(35),
  },
  focusCell: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
