import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import responsive from '../../Components/Responsive';
import Car1 from '../../Assets/Images/SVG/car1.svg';
import Car2 from '../../Assets/Images/SVG/car2.svg';
import {clr, FONTS} from '../../Constants/theme';
import Octicons from 'react-native-vector-icons/Octicons';
import SeatIcon from '../../Assets/Images/SVG/SeatIcon.svg';
import DollarIcon from '../../Assets/Images/SVG/DollarIcon.svg';
const BestCars = () => {
  const brandsName = [
    {
      Icon: Car1,
      name: 'Ferrari-FF',
      rating: '5.0',
      location: 'Washington DC',
      seatCount: '4 Seats',
    },
    {
      Icon: Car2,
      name: 'Tesla Model S',
      rating: '5.0',
      location: 'Chicago, USA',
      seatCount: '5 Seats',
    },
  ];
  return (
    <View style={styles.Container}>
      {brandsName.map((item, index) => (
        <TouchableOpacity style={styles.brandsContainer} key={index}>
          {/* Upper Part - Icon */}
          <View style={styles.BrandsIconContainer}>
            <item.Icon
              height={responsive.height('11%')}
              width={responsive.width('40%')}
            />
          </View>

          {/* Lower Part - Details */}
          <View style={styles.CarDetails}>
            <Text style={FONTS.h3}>{item.name}</Text>
            <Text style={[FONTS.h3, {color: clr.Text2}]}>{item.rating}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
              }}>
              <Octicons
                name="location"
                color={clr.Text2}
                size={responsive.width(4)}
              />
              <Text style={[FONTS.h3, {color: clr.Text2, marginLeft: 4}]}>
                {item.location}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
              }}>
              <SeatIcon
                height={responsive.height(2)}
                width={responsive.width(4)}
              />
              <Text style={[FONTS.h3, {color: clr.Text2, marginLeft: 4}]}>
                {item.seatCount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
              }}>
              <DollarIcon
                height={responsive.height(2)}
                width={responsive.width(4)}
              />
              <Text style={[FONTS.h3, {color: clr.Text2, marginLeft: 4}]}>
                $100/day
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BestCars;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  brandsContainer: {
    height: responsive.height('29.18%'),
    width: responsive.width('48%'),
    borderRadius: responsive.borderRadius(15),
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  BrandsIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7D7D7',
    paddingVertical: responsive.height(2),
  },
  CarDetails: {
    padding: 8,
    backgroundColor: 'white',
  },
});
