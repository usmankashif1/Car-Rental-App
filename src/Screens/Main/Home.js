import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import {clr, FONTS, SIZES} from '../../Constants/theme';
import responsive from '../../Components/Responsive';
const {height, width} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import InputC from '../../Components/InputC';
import Brands from './Brands';
import BestCars from './BestCars';
import NearByCarIcon from '../../Assets/Images/SVG/NearByCarIcon.svg';
import { useNavigation } from '@react-navigation/native';
import FilterModal from '../FilterModal.js/FilterModel';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flexGrow: 1, paddingBottom: 30}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.UperContainer}>
        <View style={styles.header}>
          <View style={styles.LogoNameContainer}>
            <View style={styles.logoIcon}>
              <Ionicons
                name="car-sport"
                size={responsive.width(27)}
                color="white"
              />
            </View>
            <Text style={[FONTS.h1, {fontSize: responsive.fontSize(30)}]}>
              Qent
            </Text>
          </View>
          <View style={styles.bellProfileContainer}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={styles.bellContainer}>
                <Octicons
                  name="bell"
                  size={responsive.width(20)}
                  color="#767676"
                />
              </View>
              <View style={styles.notificationContainer}>
                <Text style={[FONTS.h3, {color: 'white'}]}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgContainer}>
              <Image
                style={styles.profileImg}
                source={require('../../Assets/Images/profile.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchFilterContainer}>
          <InputC
            iconName={'search'}
            iconFamily={'Feather'}
            placeholder="Search your dream car..."
            width={responsive.width('75%')}
            height={responsive.height('7%')}
          />
          <TouchableOpacity style={styles.filterContainer} onPress={() => setModalVisible(true)}>
            <Image
              style={styles.filterImg}
              source={require('../../Assets/Images/filter.png')}
            />
          </TouchableOpacity>
                <FilterModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        </View>

        <Text style={FONTS.h3}>Brands</Text>
        <View style={{marginTop: responsive.margin(10)}}>
          <Brands  />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: responsive.borderRadius(30),
          padding: responsive.padding(15),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: responsive.margin(5),
          }}>
          <Text style={FONTS.h2}>Best Cars</Text>
          <TouchableOpacity>
            <Text style={[FONTS.h4, {color: clr.Text2}]}>View All</Text>
          </TouchableOpacity>
        </View>
        <Text style={[FONTS.h4, {color: clr.Text2, top: 7}]}>Available</Text>
        <View style={{marginVertical:10}}>
        <BestCars
          name={['Ferrari-FF', 'Tesla Model S']}
          rating={['5.0', '4.9']}
          location={['Washington DC', 'Chicago ,USA ']}
          seats={['4', '5']}
          price={['100', '200']}
          onPress={()=>navigation.navigate('CarDetail')}
        />
        </View>
        <View style={{gap: 10,paddingBottom:40}}>
          <View style={styles.NearByContainer}>
            <Text style={[FONTS.h2, {color: clr.Text1}]}>Nearby</Text>
            <TouchableOpacity>
              <Text style={[FONTS.h4, {color: clr.Text2}]}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.nearByIconContainer}>
            <NearByCarIcon
              height={responsive.height(110)}
              width={responsive.width(324)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  UperContainer: {
    padding: responsive.padding(15),
  },
  LogoNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    height: responsive.height('6%'),
    width: responsive.width('12.5%'),
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
  },
  bellContainer: {
    borderWidth: 1,
    height: responsive.height('5%'),
    width: responsive.width('10%'),
    borderRadius: 50,
    borderColor: '#d7d7d7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    height: responsive.height('5%'),
    width: responsive.width('10%'),
    resizeMode: 'cover',
    borderRadius: 50,
  },
  bellProfileContainer: {
    flexDirection: 'row',
    gap: responsive.width(5),
  },
  notificationContainer: {
    backgroundColor: clr.Text1,
    height: responsive.height('2.5%'),
    width: responsive.width('5%'),
    borderRadius: 50,
    right: 15,
    bottom: 5,
    justifyContent: 'centers',
    alignItems: 'center',
  },
  filterContainer: {
    height: responsive.uniform(53),
    width: responsive.uniform(53),
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d7d7d7',
    backgroundColor: 'white',
  },
  filterImg: {
    height: responsive.height('5%'),
    width: responsive.width('7%'),
    resizeMode: 'contain',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsive.margin(20),
  },
  NearByContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nearByIconContainer: {
    height: responsive.height(121),
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: responsive.borderRadius(15),
    
  },
});
