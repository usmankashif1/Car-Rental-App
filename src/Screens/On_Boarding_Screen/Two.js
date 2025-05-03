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

const Two = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.Img}
        source={require('../../Assets/Images/onboardinfIMg2.png')}>
        <Image
          style={{height: '100%', width: '100%', position: 'absolute'}}
          source={require('../../Assets/Images/Rectangle2.png')}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            padding: responsive.padding(20),
          }}>
          <View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../Assets/Images/car.png')}
              />
            </View>
            <Text
              style={[
                FONTS.largeTitle,
                {
                  color: 'white',
                marginVertical: responsive.margin(30),
                  fontSize: responsive.fontSize(40),
                },
              ]}>
              Lets Start{'\n'}A New Experience{'\n'}With Car rental.
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              height: responsive.height('26%'),
              width:responsive.width('90%')
            }}>
            <Text
              style={[
                FONTS.h4,
                {
                  color: 'white',
                  fontSize: responsive.fontSize(16),
                  flexWrap: 'wrap',
                },
              ]}>
              Discover your next adventure with Qent.we’re here to provide you
              with a seamless car rental experience.{'\n'}Let’s get started on
              your journey..
            </Text>
            <Image
              style={{
                height: responsive.height(10),
                width: responsive.width(45),
                resizeMode:'contain',
                alignSelf: 'center',
              }}
              source={require('../../Assets/Images/introSlider.png')}
            />
            <ButtonC
              fontSize={responsive.fontSize(20)}
              width={'100%'}
              title="Get Started"
              color={'white'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Two;

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
    resizeMode: 'contain',
  },
});
