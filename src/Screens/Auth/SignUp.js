import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import appTheme, {clr, FONTS} from '../../Constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputC from '../../Components/InputC';
import ButtonC from '../../Components/ButtonC';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import responsive from '../../Components/Responsive';

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.LogoNameContainer}>
        <View style={styles.logoIcon}>
          <Ionicons name="car-sport" size={responsive.width(27)} color="white" />
        </View>
        <Text style={[FONTS.h1, {fontSize: 30}]}>Qent</Text>
      </View>
      <Text style={[FONTS.h1, {marginVertical: 15, alignSelf: 'center'}]}>
        Sign Up
      </Text>
      <View
        style={{
          height: responsive.height('33%'),
          justifyContent: 'space-evenly',
        }}>
        <InputC
          placeholder="Full Name"
          width="97%"
          height={responsive.height('7%')}
        />
        <InputC
          placeholder="Email Address"
          width="97%"
          height={responsive.height('7%')}
        />
        <InputC
          isPassword={true}
          placeholder="Password"
          width="97%"
          height={responsive.height('7%')}
        />
        <InputC
          placeholder="Country"
          width="97%"
          height={responsive.height('7%')}
        />
      </View>

      <View style={styles.btnContainer}>
        <ButtonC
          height={responsive.height('7.5%')}
          borderWidth={1}
          borderColor={clr.Text1}
          color={'white'}
          title={'Sign Up'}
          width="100%"
          fontSize={18}
          onPress={()=>navigation.navigate('Home')}
        />
        <ButtonC
          borderWidth={1}
          color={'black'}
          backgroundColor={'#EDEDED'}
          title={'Login'}
          marginVertical={responsive.margin(12)}
          width="100%"
          height={responsive.height('7%')}
          fontSize={18}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.LineOR}>
        <Text style={[FONTS.h4, {color: clr.Text2}]}>
          __________________________
        </Text>
        <Text style={[FONTS.h2, {color: clr.Text2}]}>Or</Text>
        <Text style={[FONTS.h4, {color: clr.Text2}]}>
          __________________________
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <ButtonC
          iconFamily={'AntDesign'}
          iconName={'apple1'}
          borderWidth={1}
          borderColor={clr.Text2}
          color={'black'}
          title={'Apple Pay'}
          width="100%"
          backgroundColor="#EDEDED"
          flexDirection={'row'}
          left={5}
          height={responsive.height(49)}
          fontSize={14}
          size={20}
        />
        <ButtonC
          borderWidth={1}
          color={'black'}
          backgroundColor={'#EDEDED'}
          title={'Google Pay'}
          marginVertical={10}
          width="100%"
          borderColor={clr.Text2}
          iconFamily={'AntDesign'}
          iconName={'google'}
          flexDirection={'row'}
          left={5}
          height={responsive.height(49)}
          fontSize={14}
          size={20}
        />
      </View>
      <View style={styles.signUp}>
        <Text style={[FONTS.h4, {fontSize: 14, color: clr.Text2}]}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[FONTS.h4, {fontSize: 14, left: 5, color: 'black'}]}>
            Login.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appTheme.clr.primary,
    padding: responsive.padding(15),
  },
  LogoNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsive.margin(2),
  },
  logoIcon: {
    height: responsive.height('6%'),
    width: responsive.height('6.2%'),
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
  },
  btnContainer: {
    marginVertical: responsive.margin(10),
  },
  LineOR: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: responsive.margin(10),
  },

  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
