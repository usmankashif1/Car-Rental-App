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

const WelcomePartner = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.Img}
        source={require('../../Assets/Images/HandShake.png')}>
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
              Welcome to{'\n'}
              <Text
                style={[
                  FONTS.largeTitle,
                  {
                    color: 'white',
                    marginVertical: responsive.margin(30),
                    fontSize: responsive.fontSize(30),
                  },
                ]}>
                QENT Partner program.
              </Text>
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              height: responsive.height('26%'),
              width: responsive.width('90%'),
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
              Welcome to Our Community! We’re glad to have you as a partner in
              our car rental service. Ready to rent out your car? Let’s get
              started!
            </Text>
           
            <ButtonC
              fontSize={responsive.fontSize(20)}
              width={'100%'}
              title="Get Started"
              color={'white'}
              onPress={() => navigation.navigate('AccountPartner')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePartner;

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
