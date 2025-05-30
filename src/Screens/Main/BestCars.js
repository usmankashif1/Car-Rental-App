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
const BestCars = ({
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
              <TouchableOpacity
                style={{
                  height: responsive.uniform(25),
                  width: responsive.uniform(25),
                  borderRadius: responsive.uniform(12.5),
                  borderWidth: 1,
                  borderColor: clr.Text2,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  right: 10,
                  top: 10,
                }}
                onPress={() => toggleLike(index)}>
                <AntDesign
                  name={likedStates[index] ? 'heart' : 'hearto'}
                  color={likedStates[index] ? 'red' : 'black'}
                  size={responsive.width(13)}
                />
              </TouchableOpacity>

              <item.Icon
                height={responsive.height('11%')}
                width={responsive.width('40%')}
              />
            </View>

            <View style={styles.CarDetails}>
              <Text style={FONTS.h3}>{item.Carname}</Text>
              <View style={styles.ratingStarContainer}>
                <Text style={[FONTS.h3, {color: clr.Text2}]}>
                  {item.rating}
                </Text>
                <Star width={responsive.width(14)} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 4,
                }}>
                <Octicons
                  name="location"
                  color={clr.Text2}
                  size={responsive.width(12)}
                />
                <Text style={[FONTS.h3, {color: clr.Text2, marginLeft: 4}]}>
                  {item.location}
                </Text>
              </View>
              <View style={styles.seatDollarContainer}>
                <View style={styles.seatdollar}>
                  <SeatIcon width={responsive.width(14)} />
                  <Text style={[FONTS.h3, {color: clr.Text2, marginLeft: 4}]}>
                    {item.seatCount} Seats
                  </Text>
                </View>
                <View style={styles.seatdollar}>
                  <DollarIcon width={responsive.width(15)} />
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

export default BestCars;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsive.margin(10),
  },
  brandsContainer: {
    height: responsive.height('29.18%'),
    width: responsive.width('44%'),
    borderRadius: responsive.borderRadius(15),
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cacaca',
  },
  BrandsIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: responsive.height(2),
    height: responsive.height(113),
  },
  CarDetails: {
    padding: responsive.padding(10),
    backgroundColor: 'white',
    gap: responsive.margin(4),
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
