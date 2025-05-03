import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import appTheme, {clr, FONTS} from '../../Constants/theme';
import ButtonC from '../../Components/ButtonC';
import InputC from '../../Components/InputC';
import {useNavigation} from '@react-navigation/native';
import responsive from '../../Components/Responsive';

const VerifyNumber = () => {
  const navigation = useNavigation();
  // const [country, setCountry] = useState(null);
  // const [visible, setVisible] = useState(false);

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
        <Text style={[FONTS.h1, {fontSize: responsive.fontSize(30)}]}>
          Verify your phone number
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
          We have sent you an SMS with a code to your number
        </Text>

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(true)}>
          {country ? (
            <View style={styles.countrySelected}>
              <Text style={styles.countryText}>{country.name}</Text>
            </View>
          ) : (
            <View style={styles.UpDownContainer}>
              <Text style={[FONTS.h4, styles.buttonText]}>Select Country</Text>
              <Image
                style={styles.UpDown}
                source={require('../../Assets/Images/UpDown.png')}
              />
            </View>
          )}
        </TouchableOpacity> */}

        {/* {visible && (
          // <CountryPicker
          //   withFilter
          //   withFlag
          //   withCountryNameButton
          //   withEmoji
          //   onSelect={selectedCountry => {
          //     setCountry(selectedCountry);
          //     setVisible(false);
          //   }}
          //   onClose={() => setVisible(false)}
          //   visible={visible}
          // />
        )} */}

        <InputC
          placeholder="Your Country"
          width="100%"
          marginVertical={responsive.margin(10)}
          keyboardType={'default'}
          fontSize={responsive.fontSize(16)}
        />
        <InputC
          placeholder="Phone Number"
          width="100%"
          marginVertical={responsive.margin(10)}
          keyboardType={'numeric'}
          fontSize={responsive.fontSize(16)}
        />

        <ButtonC
          title={'Continue'}
          color={'white'}
          fontSize={18}
          width="100%"
          onPress={()=>navigation.navigate('AuthVerificationCode')}
        />

       
      </View>

      <View style={styles.signUpContainer}>
        <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14, right: 3}]}>
          Create a
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[FONTS.h4, {color: 'black', fontSize: 14}]}>
            New Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyNumber;

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
    marginLeft:8
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
});
