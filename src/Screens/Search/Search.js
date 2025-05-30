import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../../Assets/Images/SVG/Back.svg';
import Dots from '../../Assets/Images/SVG/3Dots.svg';
import responsive from '../../Components/Responsive';
import {clr, FONTS} from '../../Constants/theme';
import InputC from '../../Components/InputC';
import BestCars from '../Main/BestCars';
import HorizontalBrands from './HorizontalBrands';
import PopularCars from './PopularCars';
import HeaderC from '../../Components/HeaderC';
import {useNavigation} from '@react-navigation/native';
import FilterModal from '../FilterModal.js/FilterModel';
const Search = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: clr.primary}}>
      <ScrollView
        style={styles.Container}
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <HeaderC title={'Search'} />
        <View style={styles.searchFilterContainer}>
          <InputC
            iconName={'search'}
            iconFamily={'Feather'}
            placeholder="Search your dream car..."
            width={responsive.width('75%')}
            height={responsive.height('7%')}
          />
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={() => setModalVisible(true)}>
            <Image
              style={styles.filterImg}
              source={require('../../Assets/Images/filter.png')}
            />
          </TouchableOpacity>
          <FilterModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>

        <HorizontalBrands />
        <View style={styles.RecommdContainer}>
          <Text style={[FONTS.h2, {color: clr.Text1}]}>Recommend For You</Text>
          <TouchableOpacity>
            <Text style={[FONTS.h4, {color: clr.Text2}]}>View All</Text>
          </TouchableOpacity>
        </View>
        <BestCars
          name={['Tesla Model S', 'Ferrari LaFerrari']}
          rating={['5.0', '5.0']}
          location={['Chicago, USA ', 'Washington DC']}
          seats={['4', '5']}
          price={['100', '80']}
          onPress={() => navigation.navigate('CarDetail')}
        />
        <BestCars
          name={['Tesla Model S', 'Ferrari LaFerrari']}
          rating={['5.0', '5.0']}
          location={['Chicago, USA ', 'Washington DC']}
          seats={['4', '5']}
          price={['100', '80']}
          onPress={() => navigation.navigate('CarDetail')}
        />

        <View style={styles.RecommdContainer}>
          <Text style={[FONTS.h2, {color: clr.Text1}]}>Our Popular Cars</Text>
          <TouchableOpacity>
            <Text style={[FONTS.h4, {color: clr.Text2}]}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{paddingBottom: responsive.padding(60)}}
          horizontal>
          <PopularCars
            name={['Ferrari-FF', 'Tesla Model S']}
            rating={['5.0', '4.9']}
            location={['Washington DC', 'Chicago ,USA ']}
            seats={['4', '5']}
            price={['100', '200']}
            onPress={() => navigation.navigate('CarDetail')}
          />
          <PopularCars
            name={['Ferrari-FF', 'Tesla Model S']}
            rating={['5.0', '4.9']}
            location={['Washington DC', 'Chicago ,USA ']}
            seats={['4', '5']}
            price={['100', '200']}
            onPress={() => navigation.navigate('CarDetail')}
          />
        </ScrollView>

       
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: clr.primary,
    // flex: 1,
    padding: responsive.padding(15),
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  RecommdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: responsive.margin(15),
  },
});
