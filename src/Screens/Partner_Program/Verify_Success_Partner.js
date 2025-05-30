import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {clr, FONTS} from '../../Constants/theme';
import HeaderC from '../../Components/HeaderC';
import responsive from '../../Components/Responsive';
import LottieView from 'lottie-react-native';
import ButtonC from '../../Components/ButtonC';
import { useNavigation } from '@react-navigation/native';

const Verify_Success_Partner = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={{padding: responsive.padding(15)}}>
        <HeaderC title={'Verify Status'} />
      </View>
      <View style={styles.headerContainer} />
       <LottieView
          source={require('../../Assets/Lotti/TickLotti.json')}
          autoPlay
          loop={false}
          style={{
            width: responsive.width(105),
            height: responsive.height(105),
            alignSelf: 'center',
          }}/>
      <View style={{padding: responsive.padding(15)}}>
        <Text
          style={[
            FONTS.h3,
            {fontSize: responsive.fontSize(16), textAlign: 'center'},
          ]}>
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
          Your OTP verification was successful. now You can proceed with your
          account setup or booking process.
        </Text>
      <ButtonC title={'Next'} color={'white'} fontSize={responsive.fontSize(18)} marginVertical={20}
      onPress={()=>navigation.navigate('Payment_Method')}
      
      />

      </View>
    </View>
  );
};

export default Verify_Success_Partner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: clr.Text3,
  },
});
