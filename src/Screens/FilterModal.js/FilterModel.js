import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {clr, FONTS} from '../../Constants/theme';
import responsive from '../../Components/Responsive';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import InputC from '../../Components/InputC';
import ButtonC from '../../Components/ButtonC';
import DatePicker from './DatePicker';
import Calender from '../../Assets/Images/SVG/Calender.svg';
const FilterModal = ({modalVisible, setModalVisible}) => {
  const carTypes = [
    {id: '1', car: 'All Cars'},
    {id: '2', car: 'Regular Cars'},
    {id: '3', car: 'Luxury Cars'},
  ];
  const rentalTimeOptions = [
    {id: '1', time: 'Hour'},
    {id: '2', time: 'Day'},
    {id: '3', time: 'Weekly'},
    {id: '4', time: 'Monthly'},
  ];
  const colorOptions = [
    {name: 'White', value: '#FFFFFF', borderColor: '#E0E0E0'},
    {name: 'Gray', value: '#AAAAAA', borderColor: '#AAAAAA'},
    {name: 'Blue', value: '#0000FF', borderColor: '#0000FF'},
    {name: 'Black', value: '#000000', borderColor: '#000000'},
  ];
  const capacityOptions = [2, 4, 6, 8];
  const fuelTypeOptions = ['Electric', 'Petrol', 'Diesel', 'Hybrid'];

  const [sliderValues, setSliderValues] = useState([100, 500]);
  const [selectedCarType, setSelectedCarType] = useState('1');
  const [selectedRentalTime, setSelectedRentalTime] = useState('1');
  const [selectedCapacity, setSelectedCapacity] = useState(4);
  const [selectedFuelType, setSelectedFuelType] = useState('Electric');
  const [selectedColor, setSelectedColor] = useState('Blue');

  const multiSliderValuesChange = values => {
    setSliderValues(values);
  };

  const priceDistributionData = [
    1, 2, 7, 6, 10, 10, 13, 8, 15, 19, 23, 30, 16, 18, 13, 16, 8, 12, 4, 7, 10,
    5, 1,
  ];

  return (
    <Modal style={styles.container} isVisible={modalVisible}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <AntDesign name="close" color="black" size={20} />
          </TouchableOpacity>
          <Text
            style={[
              FONTS.h2 || styles.headerTitle,
              {flex: 1, textAlign: 'center'},
            ]}>
            Filters
          </Text>
          <View style={{width: 20}} />
        </View>

        <ScrollView
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          style={styles.filtersContainer}>
          {/* Car Types */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Type of Cars</Text>
            <View style={styles.carTypeContainer}>
              {carTypes.map(type => (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.carTypeButton,
                    selectedCarType === type.id && styles.selectedCarTypeButton,
                  ]}
                  onPress={() => setSelectedCarType(type.id)}>
                  <Text
                    style={[
                      styles.carTypeText,
                      selectedCarType === type.id && styles.selectedCarTypeText,
                    ]}>
                    {type.car}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View
            style={{
              height: responsive.height(1),
              backgroundColor: clr.Text3,
              marginTop: responsive.margin(30),
            }}></View>

          {/* Price Range */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Price range</Text>
            <View style={styles.barChartContainer}>
              {priceDistributionData.map((value, index) => (
                <View key={index} style={[styles.bar, {height: value * 2}]} />
              ))}
            </View>
            <MultiSlider
              values={sliderValues}
              sliderLength={330}
              onValuesChange={multiSliderValuesChange}
              min={50}
              max={700}
              step={1}
              selectedStyle={styles.selectedTrack}
              unselectedStyle={styles.unselectedTrack}
              trackStyle={styles.track}
              markerStyle={styles.marker}
              pressedMarkerStyle={styles.pressedMarker}
              containerStyle={styles.SliderStyle}
            />
            <View style={styles.priceRangeContainer}>
              <View style={styles.priceInputContainer}>
                <Text style={[FONTS.h4, styles.MinMAxText]}>Minimum</Text>
                <Text style={styles.priceInput}>${sliderValues[0]}</Text>
              </View>
              <View style={styles.priceInputContainer}>
                <Text style={[FONTS.h4, styles.MinMAxText]}>Maximum</Text>
                <Text style={styles.priceInput}>${sliderValues[1]}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: responsive.height(1),
              backgroundColor: clr.Text3,
              marginTop: responsive.margin(30),
            }}></View>

          {/* Rental Time */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Rental Time</Text>
            <View style={styles.optionsRow}>
              {rentalTimeOptions.map(option => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionButton,
                    selectedRentalTime === option.id &&
                      styles.selectedOptionButton,
                  ]}
                  onPress={() => setSelectedRentalTime(option.id)}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedRentalTime === option.id &&
                        styles.selectedOptionText,
                    ]}>
                    {option.time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Dates */}
          <View
            style={[
              styles.filterSection,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <Text style={[FONTS.h4, {fontSize: 14}]}>
              Pick up and Drop Date
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Calender right={responsive.margin(5)} />
              <DatePicker />
            </View>
          </View>
          {/* Location */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Car Location</Text>
            <View style={styles.locationInput}>
              <InputC
                placeholder="Shore Dr, Chicago 00061, Usa"
                placeholderTextColor="#888"
                iconFamily={'Ionicons'}
                iconName={'location-outline'}
                size={20}
                iconColor="#888"
                width="100%"
              />
            </View>
          </View>

          <View
            style={{
              height: responsive.height(1),
              backgroundColor: clr.Text3,
              marginTop: responsive.margin(30),
            }}></View>

          {/* Colors */}
          <View style={styles.filterSection}>
            <View style={styles.colorHeader}>
              <Text style={styles.sectionTitle}>Colors</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.colorsContainer}>
              {colorOptions.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedColor(color.name)}
                  style={[
                    styles.colorOption,
                    {
                      backgroundColor: color.value,
                      borderColor: color.borderColor,
                      
                    },
                    selectedColor === color.name && styles.selectedColorOption,
                  ]}>
                  {selectedColor === color.name && (
                    <AntDesign
                      name="check"
                      size={16}
                      color={color.name === 'White' ? 'black' : 'white'}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Capacity */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Sitting Capacity</Text>
            <View style={styles.optionsRow}>
              {capacityOptions.map(capacity => (
                <TouchableOpacity
                  key={capacity}
                  onPress={() => setSelectedCapacity(capacity)}
                  style={[
                    styles.optionButton,
                    selectedCapacity === capacity &&
                      styles.selectedOptionButton,
                  ]}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedCapacity === capacity &&
                        styles.selectedOptionText,
                    ]}>
                    {capacity}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Fuel Type */}
          <View style={[styles.filterSection, {marginBottom: 20}]}>
            <Text style={styles.sectionTitle}>Fuel Type</Text>
            <View style={styles.optionsRow}>
              {fuelTypeOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setSelectedFuelType(option)}
                  style={[
                    styles.optionButton,
                    selectedFuelType === option && styles.selectedOptionButton,
                  ]}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedFuelType === option && styles.selectedOptionText,
                    ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View
            style={{
              height: responsive.height(1),
              backgroundColor: clr.Text3,
              marginVertical: responsive.margin(30),
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                // Reset all filters
                setSelectedCarType('1');
                setSliderValues([100, 500]);
                setSelectedRentalTime('1');
                setSelectedCapacity(4);
                setSelectedFuelType('Electric');
                setSelectedColor('Blue');
                setPickupDate(new Date());
              }}>
              <Text style={[FONTS.h4,{fontSize:14}]}>Clear All</Text>
            </TouchableOpacity>
            <ButtonC
              title={'Show 100+ Cars'}
              fontSize={16}
              color={'white'}
              height={responsive.height(52)}
              width={responsive.width(152)}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    maxHeight: '95%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    ...FONTS.h2
  },
  filtersContainer: {
    paddingHorizontal: 16,

  },
  filterSection: {
    marginTop: 20,
  },
  sectionTitle: {
    ...FONTS.h2,
    marginBottom: 12,
  },
  carTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: responsive.borderRadius(60),
    borderColor: clr.Text3,
  },
  carTypeButton: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: responsive.borderRadius(46),
    alignItems: 'center',
  },
  selectedCarTypeButton: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
  },
  carTypeText: {
    color: 'black',
    ...FONTS.h3,
  },
  selectedCarTypeText: {
    color: 'white',
  },
  barChartContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: responsive.margin(13),
  },
  bar: {
    width: responsive.width(7),
    backgroundColor: '#333',
    borderRadius: 1,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  priceInputContainer: {
    width: responsive.width(80),
  },
  priceInput: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: clr.Text3,
    color: 'black',
    textAlign: 'center',
    top: 5,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  selectedOptionButton: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  optionText: {
    color: '#333',
  },
  selectedOptionText: {
    color: 'white',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  locationInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationTextInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  colorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllText: {
    color: '#666',
    fontSize: 14,
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
    marginLeft: -4,
  },
  colorOption: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  selectedColorOption: {
    borderWidth: 2,
  },
  selectedTrack: {
    backgroundColor: 'black',
  },
  unselectedTrack: {
    backgroundColor: 'black',
  },
  track: {
    height: responsive.height(2),
  },
  marker: {
    height: responsive.uniform(40),
    width: responsive.uniform(40),
    borderRadius: responsive.borderRadius(50),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: clr.Text2,
    elevation: 10,
  },
  pressedMarker: {
    height: responsive.uniform(30),
    width: responsive.uniform(30),
    borderRadius: responsive.borderRadius(50),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    elevation: 10,
  },
  SliderStyle: {
    bottom: responsive.margin(38),
  },
  MinMAxText: {
    // alignSelf:'center',
    textAlign: 'center',
    color: clr.Text2,
    fontSize: 14,
  },
  selectedWhiteColor: {
    color: 'black',
  },
});

export default FilterModal;
