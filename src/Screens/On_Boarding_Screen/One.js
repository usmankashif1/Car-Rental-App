import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../Constants/theme';
import ButtonC from '../../Components/ButtonC';
import {useNavigation} from '@react-navigation/native';
import responsive from '../../Components/Responsive';

const One = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.Img}
        source={require('../../Assets/Images/onboardinfIMg1.png')}>
        <Image
          style={{height: '100%', width: '100%', position: 'absolute'}}
          source={require('../../Assets/Images/Rectangle1.png')}
        />
        <View style={{justifyContent: 'space-between', flex: 1, padding: responsive.padding(20)}}>
          <View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../Assets/Images/car.png')}
              />
            </View>
            <Text style={[FONTS.largeTitle, {color: 'white', marginVertical: responsive.margin(30)}]}>
              Welcome to{'\n'}Qent
            </Text>
          </View>
          <View>
            <ButtonC
              onPress={() => navigation.navigate('Two')}
              title="Get Started"
              color={'white'}
              fontSize={responsive.fontSize(20)}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default One;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Img: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    backgroundColor: 'white',
    height: responsive.height('10%'),
    width: responsive.width('21%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  logo: {
    height: responsive.height('6%'),
    width: responsive.height('8%'),
    resizeMode:'contain'
  },
});
