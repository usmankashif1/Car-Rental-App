import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderC from '../../Components/HeaderC';
import {clr, FONTS} from '../../Constants/theme';
import responsive from '../../Components/Responsive';
import Star from '../../Assets/Images/SVG/Star.svg';
import InputC from '../../Components/InputC';
import ButtonC from '../../Components/ButtonC';
import P1 from '../../Assets/Images/SVG/p1.svg';
import P2 from '../../Assets/Images/SVG/p2.svg';
import P3 from '../../Assets/Images/SVG/p3.svg';
import P4 from '../../Assets/Images/SVG/p4.svg';
import P5 from '../../Assets/Images/SVG/p5.svg';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const navigation=useNavigation();
  const ReviewData = [
    {
      name: 'Hela Quintin',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      date: 'Today',
      img: P1,
    },
    {
      name: 'Maichel',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      date: 'Yesterday',
      img: P2,
    },
    {
      name: 'Richard ',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      date: '1 Week ago',
      img: P3,
    },
    {
      name: 'Mr. Davit ',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      date: '3 Weeks ago',
      img: P4,
    },
    {
      name: 'Cameron',
      review:
        'The rental car was clean, reliable and the service was quick and efficient.',
      date: '3 Weeks ago',
      img: P5,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <HeaderC title={'Reviews'} />
        </View>
        <View style={styles.divider} />
        <View style={styles.contentWrapper}>
          <View style={styles.ratingRow}>
            <Star width={responsive.width(19)} height={responsive.height(19)} />
            <Text style={styles.ratingText}>5.0 Reviews (125)</Text>
          </View>

          <View style={styles.searchWrapper}>
            <InputC
              placeholder="Find reviews.........."
              iconName={'search1'}
              iconFamily={'AntDesign'}
              iconColor={clr.Text2}
              backgroundColor="white"
              width="100%"
            />
          </View>

          <View style={styles.reviewsContainer}>
            {ReviewData.map((item, index) => (
              <View key={index} style={styles.reviewCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.userInfo}>
                    <item.img
                      style={styles.profileImg}
                      height={responsive.uniform(45)}
                      width={responsive.uniform(45)}
                    />
                    <Text style={FONTS.h2}>{item.name}</Text>
                  </View>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>

                <View style={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} width={responsive.width(14)} />
                  ))}
                </View>

                <Text style={styles.reviewText}>{item.review}</Text>
              </View>
            ))}
          </View>
        </View>
        <ButtonC
          title={'Book Now'}
          fontSize={16}
          color={'white'}
          iconNameNext={'arrowright'}
          iconColor={'white'}
          iconFamily={'AntDesign'}
          flexDirection={'row'}
          gap={5}
          marginVertical={responsive.margin(20)}
          onPress={()=>navigation.navigate('PaymentMethods')}
        />
      </View>
    </ScrollView>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  headerWrapper: {
    padding: responsive.padding(15),
  },
  divider: {
    borderWidth: 1,
    borderColor: clr.Text3,
    borderRadius: 1,
  },
  contentWrapper: {
    alignSelf: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: responsive.margin(10),
  },
  ratingText: {
    ...FONTS.h2,
    fontSize: 16,
  },
  searchWrapper: {
    alignItems: 'center',
    marginVertical: responsive.margin(20),
  },
  reviewsContainer: {
    gap: 15,
  },
  reviewCard: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: responsive.borderRadius(15),
    borderColor: clr.Text3,
    width: responsive.width('90%'),
    height: responsive.height('18%'),
    padding: responsive.padding(10),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dateText: {
    ...FONTS.h4,
    color: clr.Text2,
    fontSize: 12,
  },
  starsRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewText: {
    ...FONTS.h4,
    color: clr.Text2,
    fontSize: 14,
  },
  profileImg: {
    height: responsive.uniform(40),
    width: responsive.uniform(40),
    resizeMode: 'cover',
    borderRadius: 50,
  },
});
