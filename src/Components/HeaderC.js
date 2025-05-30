import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Back from '../Assets/Images/SVG/Back.svg';
import Dots from '../Assets/Images/SVG/3Dots.svg';
import responsive from './Responsive';
import { FONTS } from '../Constants/theme';
import { useNavigation } from '@react-navigation/native';
const HeaderC = ({title}) => {
  const navigation=useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButtonContainer} onPress={()=>navigation.goBack()}>
        <Back height={responsive.height(18)} width={responsive.width(15)} />
      </TouchableOpacity>
      <Text style={FONTS.h2}>{title}</Text>
      <TouchableOpacity style={styles.backButtonContainer}>
        <Dots height={responsive.height(18)} width={responsive.width(15)} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderC;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButtonContainer: {
    height: responsive.uniform(44),
    width: responsive.uniform(44),
    borderWidth: 1,
    borderColor: '#d7d7d7',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
