import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import responsive from '../../Components/Responsive';
import { clr, FONTS } from '../../Constants/theme';

const Splash_Screen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.Container}>
        <View style={styles.BothContainer}>
          <View style={styles.logoIcon}>
            <Ionicons name="car-sport" size={responsive.width('12%')} color="white" />
          </View>
          <Text style={[FONTS.largeTitle, { left: responsive.margin(5), fontSize: responsive.fontSize(60) }]}>
            Qent
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash_Screen;

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  Container: {
    flex: 1,
    backgroundColor: clr.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BothContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    height: responsive.height('10%'),
    width: responsive.width('21%'),
    backgroundColor: 'black',
    borderRadius: responsive.borderRadius(50),
    alignItems: 'center',
    justifyContent: 'center',
    right: responsive.margin(5),
  },
});
