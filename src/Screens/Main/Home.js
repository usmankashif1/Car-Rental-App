import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {clr, FONTS, SIZES} from '../../Constants/theme';
import responsive from '../../Components/Responsive';
const {height, width} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {stickyWorkers} from '../../../metro.config';
import InputC from '../../Components/InputC';
import Brands from './Brands';

const Home = () => {
  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.filterContainer}>
        <Image style={styles.filterImg} source={require('../../Assets/Images/filter.png')}/>
      </TouchableOpacity>
      </View>
      <Text style={[FONTS.h3,{marginVertical:responsive.margin(10)}]}>Brands</Text>
      <Brands/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.primary,
    padding: 15,
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
    borderWidth: 2,
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
  filterContainer:{
    height:responsive.height('7%'),
    width:responsive.width('14.5%'),
    borderWidth:2,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    borderColor:clr.Text3,
    backgroundColor:'white'
  },
  filterImg:{
    height:responsive.height('5%'),
    width:responsive.width('7%'),
    resizeMode:'contain'
  },
  searchFilterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:responsive.margin(20),
  }
});
