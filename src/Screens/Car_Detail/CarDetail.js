import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderC from '../../Components/HeaderC';
import responsive from '../../Components/Responsive';
import {clr, FONTS} from '../../Constants/theme';
import BestCars from '../Main/BestCars';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Car1 from '../../Assets/Images/SVG/car1.svg';
import SeatIcon from '../../Assets/Images/SVG/SeatIcon.svg';
import Swiper from 'react-native-swiper';
import Star from '../../Assets/Images/SVG/Star.svg';
import Parking from '../../Assets/Images/SVG/Parking.svg';
import Charge from '../../Assets/Images/SVG/Charge.svg';
import AutoPilot from '../../Assets/Images/SVG/AutoPilot.svg';
import Speed from '../../Assets/Images/SVG/Speed.svg';
import EngineOut from '../../Assets/Images/SVG/EngineOut.svg';
import ButtonC from '../../Components/ButtonC';
import {useNavigation} from '@react-navigation/native';
import P1 from '../../Assets/Images/SVG/p1.svg';
import P2 from '../../Assets/Images/SVG/p2.svg';
import P3 from '../../Assets/Images/SVG/p3.svg';
import P4 from '../../Assets/Images/SVG/p4.svg';
import P5 from '../../Assets/Images/SVG/p5.svg';

const CarDetail = () => {
  const navigation = useNavigation();
  const [likedStates, setLikedStates] = useState(false);
  const toggleLike = () => {
    setLikedStates(!likedStates);
  };

  const data = [
    {title: 'Capacity', icon: SeatIcon, description: '5 Seats'},
    {title: 'Engine Out', icon: EngineOut, description: '670 HP'},
    {title: 'Max Speed', icon: Speed, description: '250km/h'},
    {title: 'Advance', icon: AutoPilot, description: 'Autopilot'},
    {title: 'Single Charge ', icon: Charge, description: '405 Miles'},
    {title: 'Advance', icon: Parking, description: 'Auto Parking'},
  ];
  const ReviewData = [
    {
      name: 'Hela Quintin',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      rating: '5.0',
      img:P1
    },
    {
      name: 'Maichel',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      rating: '4.9',
      img:P2
    },
    {
      name: 'Richard ',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      rating: '4.7',
      img:P3
    },
    {
      name: 'Mr. Davit ',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      rating: '4.0',
      img:P4
    },
    {
      name: 'Cameron',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      rating: '5.0',
      img:P5
    },
  ];

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.HeaderContainer}>
          <HeaderC title={'Car Details'} />
          <Swiper
            loop={false}
            activeDotStyle={{backgroundColor: 'black'}}
            height={responsive.height('32%')} // or use 250
          >
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
                onPress={toggleLike}>
                <AntDesign
                  name={likedStates ? 'heart' : 'hearto'}
                  color={likedStates ? 'red' : 'black'}
                  size={responsive.width(13)}
                />
              </TouchableOpacity>
              <Car1
                height={responsive.height('20%')}
                width={responsive.width('90%')}
              />
            </View>
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
                onPress={toggleLike}>
                <AntDesign
                  name={likedStates ? 'heart' : 'hearto'}
                  color={likedStates ? 'red' : 'black'}
                  size={responsive.width(13)}
                />
              </TouchableOpacity>
              <Car1
                height={responsive.height('20%')}
                width={responsive.width('90%')}
              />
            </View>
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
                onPress={toggleLike}>
                <AntDesign
                  name={likedStates ? 'heart' : 'hearto'}
                  color={likedStates ? 'red' : 'black'}
                  size={responsive.width(13)}
                />
              </TouchableOpacity>
              <Car1
                height={responsive.height('20%')}
                width={responsive.width('90%')}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.midContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={FONTS.h2}>Tesla Model S</Text>
              <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14}]}>
                A car with high specs that are rented{'\n'}at an affordable
                price.
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                }}>
                <Text style={[FONTS.h2, {fontSize: 16}]}>5.0</Text>
                <Star width={responsive.width(14)} />
              </View>
              <Text style={[FONTS.h3, {color: clr.Text2}]}>(100+Reviews)</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: clr.Text3,
              borderRadius: 1,
              marginVertical: responsive.margin(20),
            }}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image
                style={styles.profileImg}
                source={require('../../Assets/Images/profile.jpg')}
              />
              <Text>Usman Kashif</Text>
              <Image source={require('../../Assets/Images/Verified.png')} />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <View style={styles.PhoneMessage}>
                <Feather name="phone" size={20} color="black" />
              </View>
              <View style={styles.PhoneMessage}>
                <AntDesign name="message1" size={20} color="black" />
              </View>
            </View>
          </View>

          <Text style={[FONTS.h2, {marginTop: responsive.margin(15)}]}>
            Car features
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 14,
              marginVertical: 10,
            }}>
            {data.map((item, index) => {
              return (
                <View style={styles.dataContainer}>
                  <View style={styles.iconContainer}>
                    <item.icon
                      width={responsive.width(26)}
                      height={responsive.height(26)}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        FONTS.h3,
                        {color: clr.Text2, fontSize: responsive.fontSize(14.6)},
                      ]}>
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        FONTS.h3,
                        {fontSize: responsive.fontSize(16.52)},
                      ]}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: responsive.margin(5),
            }}>
            <Text style={FONTS.h2}>Review (125)</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
              <Text style={[FONTS.h4, {color: clr.Text2}]}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{gap: 20, marginVertical: 10}}>
            {ReviewData.map(item => (
              <View
                style={{
                  // flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  borderRadius: 10,
                  height: responsive.height('20%'),
                  borderColor: clr.Text3,
                  width: responsive.width('70%'),
                  height: responsive.height('14%'),
                  padding: responsive.padding(10),
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <item.img
                      style={styles.profileImg}
                      height={responsive.uniform(45)}
                      width={responsive.uniform(45)}
                    />
                    <Text style={FONTS.h2}>{item.name}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Text style={[FONTS.h2, {fontSize: 16}]}>
                      {item.rating}
                    </Text>
                    <Star width={responsive.width(14)} />
                  </View>
                </View>
                <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14}]}>
                  {item.review}
                </Text>
              </View>
            ))}
          </ScrollView>
          <ButtonC
            title={'Book Now'}
            fontSize={16}
            color={'white'}
            iconNameNext={'arrowright'}
            iconColor={'white'}
            iconFamily={'AntDesign'}
            flexDirection={'row'}
            gap={5}
            onPress={()=>navigation.navigate('Booking')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CarDetail;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  profileImg: {
    height: responsive.uniform(40),
    width: responsive.uniform(40),
    resizeMode: 'cover',
    borderRadius: 50,
  },
  PhoneMessage: {
    borderWidth: 1,
    borderRadius: responsive.uniform(100),
    width: responsive.uniform(36),
    height: responsive.uniform(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'D7D7D7',
  },
  dataContainer: {
    height: responsive.height(120),
    width: responsive.width(105),
    backgroundColor: '#EDEDED',
    borderRadius: responsive.borderRadius(10),
    padding: responsive.padding(7),
    gap: 10,
  },
  midContainer: {
    padding: responsive.padding(15),
    backgroundColor: 'white',
    flex: 1,
    borderRadius: responsive.borderRadius(30),
  },
  HeaderContainer: {
    padding: responsive.padding(15),
  },
  iconContainer: {
    height: responsive.uniform(34),
    width: responsive.width(34),
    backgroundColor: 'white',
    borderRadius: responsive.borderRadius(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
