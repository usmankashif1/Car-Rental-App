import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import responsive from '../../Components/Responsive';
import Car1 from '../../Assets/Images/SVG/car1.svg';
import Car2 from '../../Assets/Images/SVG/car2.svg';
import {clr, FONTS} from '../../Constants/theme';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SeatIcon from '../../Assets/Images/SVG/SeatIcon.svg';
import Star from '../../Assets/Images/SVG/Star.svg';
import DollarIcon from '../../Assets/Images/SVG/DollarIcon.svg';
const PopularCars = ({
  name = ['', ''],
  rating = ['', ''],
  location = ['', ''],
  seats = ['', ''],
  price = ['', ''],
  onPress
}) => {
  const [likedStates, setLikedStates] = useState([false, false]);

  const toggleLike = index => {
    const updatedLikes = [...likedStates];
    updatedLikes[index] = !updatedLikes[index];
    setLikedStates(updatedLikes);
  };

  const brandsName = [
    {
      key: 1,
      Icon: Car1,
      Carname: name[0],
      rating: rating[0],
      location: location[0],
      seatCount: seats[0],
      price: price[0],
    },
    {
      key: 2,
      Icon: Car2,
      Carname: name[1],
      rating: rating[1],
      location: location[1],
      seatCount: seats[1],
      price: price[1],
    },
  ];
  return (
    <View style={styles.Container}>
      {brandsName.map((item, index) => (
        <TouchableOpacity style={{flexDirection: 'row'}} key={index} onPress={onPress}>
          <View style={styles.brandsContainer}>
            <View style={styles.BrandsIconContainer}>
              <item.Icon height={responsive.height('9%')} />
            </View>

            <View style={styles.CarDetails}>
              <Text style={[FONTS.h3,{fontSize:14}]}>{item.Carname}</Text>
              <View style={styles.ratingStarContainer}>
                <Text style={[FONTS.h3, {color: clr.Text2}]}>
                  {item.rating}
                </Text>
                <Star width={responsive.width(14)} />
              </View>
              
              <View style={styles.seatDollarContainer}>
                
                <View style={styles.seatdollar}>
                  
                  <Text style={[FONTS.h3, {color: clr.Text1}]}>
                    ${item.price}/Day
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PopularCars;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    marginVertical: responsive.margin(10),
  },
  brandsContainer: {
    height: responsive.height('12%'),
    width: responsive.width('67%'),
    borderRadius: responsive.borderRadius(15),
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cacaca',
    flexDirection: 'row',
    marginHorizontal:responsive.margin(5)
  },
  BrandsIconContainer: {
    width: responsive.width('40%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  CarDetails: {
    gap: responsive.margin(4),
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  ratingStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive.margin(5),
  },
  seatDollarContainer: {
    flexDirection: 'row',
    gap: responsive.margin(5),
  },
  seatdollar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 1,
  },
});
