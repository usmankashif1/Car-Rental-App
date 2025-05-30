import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import responsive from '../../Components/Responsive';
import TeslaIcon from '../../Assets/Images/SVG/TeslaIcon.svg';
import LamborghiniIcon from '../../Assets/Images/SVG/LamborghiniIcon.svg';
import BmwIcon from '../../Assets/Images/SVG/BmwIcon.svg';
import FerrariIcon from '../../Assets/Images/SVG/FerrariIcon.svg';
import { FONTS } from '../../Constants/theme';
const Brands = () => {
  const brandsName = [
    {name: 'Tesla', Icon: TeslaIcon},
    {name: 'Lamborghini', Icon: LamborghiniIcon},
    {name: 'BMW', Icon: BmwIcon},
    {name: 'Ferrari', Icon: FerrariIcon},
  ];
  return (
    <View style={styles.Container}>
      {brandsName.map(item => (
        <TouchableOpacity style={styles.brandsContainer}>
          <View style={styles.BrandsIconContainer}>
            <item.Icon
              height={responsive.height(36)}
              width={responsive.width(36)}
              color={'white'}
            />
          </View>
          <Text style={[FONTS.h4,{marginVertical:responsive.margin(10)}]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandsContainer: {
    alignItems: 'center',
  },
  BrandsIconContainer: {
    height: responsive.uniform(60),
    width: responsive.uniform(60),
    backgroundColor: 'black',
    borderRadius: responsive.uniform(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
