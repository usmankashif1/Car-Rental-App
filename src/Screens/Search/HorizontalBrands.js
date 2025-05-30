import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import responsive from '../../Components/Responsive';
import TeslaIcon from '../../Assets/Images/SVG/TeslaIcon.svg';
import LamborghiniIcon from '../../Assets/Images/SVG/LamborghiniIcon.svg';
import BmwIcon from '../../Assets/Images/SVG/BmwIcon.svg';
import All from '../../Assets/Images/SVG/All.svg';
import FerrariIcon from '../../Assets/Images/SVG/FerrariIcon.svg';
import {clr, FONTS} from '../../Constants/theme';
const HorizontalBrands = () => {
  const [show, setShow] = useState('1');

  const brandsName = [
    {id: '1', name: 'All', Icon: All},
    {id: '2', name: 'Ferrari', Icon: FerrariIcon},
    {id: '3', name: 'Tesla', Icon: TeslaIcon},
    {id: '4', name: 'BMW', Icon: BmwIcon},
    {id: '5', name: 'Lamborghini', Icon: LamborghiniIcon},
  ];
  return (
    <View style={styles.Container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brandsName.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.brandsContainer,
              show === item.id && styles.EffectStyle,
            ]}
            onPress={() => setShow(item.id)}>
            <View
              style={[
                styles.BrandsIconContainer,
                show === item.id && styles.SelectedBrandIconContaiiner,
              ]}>
              <item.Icon
                height={responsive.height(22)}
                width={responsive.width(22)}
                color={show === item.id ? 'black' : 'white'}
              />
            </View>
            <Text style={[FONTS.h3, show === item.id && {color: 'white'}]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalBrands;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: responsive.padding(12),
    borderRadius: responsive.uniform(60),
    justifyContent: 'center',
  },
  BrandsIconContainer: {
    height: responsive.uniform(32),
    width: responsive.uniform(32),
    backgroundColor: 'black',
    borderRadius: responsive.uniform(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  EffectStyle: {
    backgroundColor: clr.bttonBg,
    borderRadius: responsive.borderRadius(60),
    height: responsive.height(42),
    borderWidth: 1,
    borderColor: 'black',
  },
  SelectedBrandIconContaiiner: {
    backgroundColor: 'white',
    height: responsive.uniform(30),
    width: responsive.uniform(30),
  },
});
