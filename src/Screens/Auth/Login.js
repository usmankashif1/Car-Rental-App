import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import appTheme, {clr, FONTS} from '../../Constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputC from '../../Components/InputC';
import ButtonC from '../../Components/ButtonC';
import CheckBox from '@react-native-community/checkbox';
import responsive from '../../Components/Responsive';

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.LogoNameContainer}>
        <View style={styles.logoIcon}>
          <Ionicons
            name="car-sport"
            size={responsive.width(27)}
            color="white"
          />
        </View>
        <Text style={[FONTS.h1, {fontSize: 30}]}>Qent</Text>
      </View>
      <Text style={[FONTS.h1, {marginVertical: responsive.margin(20)}]}>
        Welcome Back{'\n'}Ready to hit the road.
      </Text>
      <View>
        <InputC placeholder="Email / Phone Number" width="97%" />
        <InputC
          marginVertical={responsive.margin(10)}
          isPassword={true}
          placeholder="Password"
          width="97%"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: responsive.margin(10),
          bottom: responsive.margin(10),
        }}>
        <TouchableOpacity
          style={styles.CheckBox}
          onPress={() => setChecked(!checked)}>
          <FontAwesome
            style={{right: responsive.margin(3)}}
            name={checked ? 'square-o' : 'check-square'}
            size={responsive.width(17)}
            color="#454545"
          />
          <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14}]}>
            Remember Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[FONTS.h4, {right: 3, color: clr.Text2, fontSize: 14}]}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <ButtonC
          borderWidth={1}
          borderColor={clr.Text1}
          color={'white'}
          title={'Login'}
          width="100%"
          fontSize={20}
          onPress={()=>navigation.navigate('BottomNavigation', { screen: 'Home' })} 
          />
        <ButtonC
          borderWidth={1}
          borderColor={clr.Text2}
          color={'black'}
          backgroundColor={'#EDEDED'}
          title={'Sign Up'}
          marginVertical={responsive.margin(15)}
          width="100%"
          fontSize={20}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <View style={styles.LineOR}>
        <Text style={[FONTS.h4, {color: clr.Text2}]}>
          _________________________
        </Text>
        <Text style={[FONTS.h2, {color: clr.Text2}]}>Or</Text>
        <Text style={[FONTS.h4, {color: clr.Text2}]}>
          _________________________
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
          size={responsive.width(20)}
        />
        <ButtonC
          borderWidth={1}
          color={'black'}
          backgroundColor={'#EDEDED'}
          title={'Google Pay'}
          marginVertical={responsive.margin(15)}
          width="100%"
          borderColor={clr.Text2}
          iconFamily={'AntDesign'}
          iconName={'google'}
          flexDirection={'row'}
          left={5}
          height={responsive.height(49)}
          fontSize={14}
          size={responsive.width(20)}
        />
      </View>
      <View style={styles.signUp}>
        <Text style={[FONTS.h4, {fontSize: 14, color: clr.Text2}]}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[FONTS.h4, {fontSize: 14, left: 5, color: 'black'}]}>
            Sign Up.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appTheme.clr.primary,
    padding: responsive.padding(15),
  },
  LogoNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsive.margin(5),
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
  btnContainer: {
    marginVertical: responsive.margin(5),
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
    marginVertical: responsive.margin(5),
  },
  CheckBox: {
    right: responsive.margin(5),
    alignItems: 'center',
    flexDirection: 'row',
  },
});
