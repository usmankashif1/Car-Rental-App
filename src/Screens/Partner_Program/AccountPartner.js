import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import responsive from '../../Components/Responsive';
import {clr, FONTS} from '../../Constants/theme';
import HeaderC from '../../Components/HeaderC';
import P1 from '../../Assets/Images/SVG/p1.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputC from '../../Components/InputC';
import ButtonC from '../../Components/ButtonC';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const AccountPartner = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  const carTypes = [
    {id: '1', car: 'Car Brand'},
    {id: '2', car: 'Car Model'},
  ];

  const colorOptions = [
    {name: 'White', value: '#FFFFFF', borderColor: '#E0E0E0'},
    {name: 'Gray', value: '#AAAAAA', borderColor: '#AAAAAA'},
    {name: 'Blue', value: '#0000FF', borderColor: '#0000FF'},
    {name: 'Black', value: '#000000', borderColor: '#000000'},
  ];
  const fuelTypeOptions = ['Electric', 'Petrol', 'Diesel', 'Hybrid'];

  const [selectedColor, setSelectedColor] = useState('Blue');
  const [selectedFuelType, setSelectedFuelType] = useState('Electric');

  const [selectedCarType, setSelectedCarType] = useState('1');
  const [selectedCar, setSelectedcar] = useState('Tesla');
  // const [selectedRegular, setSelectedRegular] = useState('');

  const regularCars = ['Tesla', 'Honda', 'Toyota', 'Nissan', 'Mercedes'];
  const luxuryCars = ['BMW', 'Ferrari', 'Bentley', 'Maybach', 'Lamborghini'];
  return (
    <View style={styles.Container}>
      <View style={{padding: responsive.padding(15)}}>
        <HeaderC title={'Profile'} />
      </View>
      <View style={styles.headerContainer} />

      <ScrollView
        style={{padding: responsive.padding(15)}}
        contentContainerStyle={{paddingBottom: responsive.padding(30)}}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <P1 height={responsive.height(80)} width={responsive.width(80)} />
            <TouchableOpacity style={styles.editIconContainer}>
              <View style={styles.editPencil}>
                <Ionicons name="camera-outline" size={responsive.width(14)} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            FONTS.h2,
            {fontSize: responsive.fontSize(16), marginVertical: 10},
          ]}>
          Car Owner Information
        </Text>

        <View style={{alignItems: 'center', gap: responsive.margin(15)}}>
          <InputC placeholder="Full Name" width="100%" />
          <InputC placeholder="Email Address" width="100%" />
          <InputC placeholder="Contact" width="100%" />
          <InputC placeholder="Diving licenses Number" width="100%" />
        </View>
        <Text
          style={[
            FONTS.h2,
            {fontSize: responsive.fontSize(16), marginVertical: 10},
          ]}>
          Car Information
        </Text>
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

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.heading}>Regular Cars Brand</Text>
              {regularCars.map((car, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedcar(car)}
                  key={index}>
                  <Text
                    style={[
                      styles.carName,
                      selectedCar === car && styles.selectedCar,
                    ]}>
                    {car}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />

            <View style={styles.column}>
              <Text style={styles.heading}>Luxury Cars Brand</Text>
              {luxuryCars.map((car, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedcar(car)}
                  tyle={[
                    styles.column,
                    selectedCar === car && styles.selectedCar,
                  ]}>
                  <Text
                    style={[
                      styles.carName,
                      selectedCar === car && styles.selectedCar,
                    ]}>
                    {car}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Upload Section */}
        <View style={styles.uploadBox}>
          <Text style={styles.uploadText}>Upload Cars images</Text>
          <View style={styles.uploadButtons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather
                name="camera"
                size={responsive.width(20)}
                color={clr.Text2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <EvilIcons
                name="image"
                size={responsive.width(30)}
                color={clr.Text1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusBtn}>
              <AntDesign
                name="plus"
                size={responsive.width(20)}
                color={clr.Text2}
              />
            </TouchableOpacity>
          </View>
        </View>
        <InputC
          placeholder="Car Registration Number"
          width="100%"
          marginVertical={responsive.margin(20)}
        />

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

        <InputC
          placeholder="Enter your car ability , durability ,etc message here......."
          multiline={true}
          height={responsive.height(120)}
          width="100%"
        />

        <TouchableOpacity
          style={styles.CheckBox}
          onPress={() => setChecked(!checked)}>
          <FontAwesome
            name={checked ? 'square-o' : 'check-square'}
            size={responsive.width(17)}
            color="#454545"
          />
          <Text
            style={[styles.checkboxLabel, {color: clr.Text2, fontSize: 14}]}>
            Trams & continue
          </Text>
        </TouchableOpacity>
        <ButtonC
          title={'Submit'}
          color={'white'}
          fontSize={responsive.fontSize(18)}
          onPress={() => navigation.navigate('Otp_Partner_Verify')}
        />
      </ScrollView>
    </View>
  );
};

export default AccountPartner;

const styles = StyleSheet.create({
  profileImageContainer: {
    position: 'relative',
    marginBottom: responsive.margin(10),
    padding: responsive.padding(5),
  },
  profileImage: {
    width: responsive.uniform(80),
    height: responsive.uniform(80),
    borderRadius: responsive.uniform(40),
    backgroundColor: clr.Text3,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: responsive.margin(-2),
    right: responsive.margin(-2),
    backgroundColor: clr.white,
    borderRadius: responsive.uniform(16),
    width: responsive.uniform(30),
    height: responsive.uniform(30),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  profileHeader: {
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: clr.Text3,
  },

  carTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: responsive.borderRadius(10),
    borderColor: clr.Text3,
    height: responsive.height(52),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carTypeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsive.height(52),
  },
  selectedCarTypeButton: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: responsive.borderRadius(10),
  },
  carTypeText: {
    color: 'black',
    ...FONTS.h3,
  },
  selectedCarTypeText: {
    color: 'white',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: responsive.padding(10),
    padding: responsive.padding(15),
    marginVertical: responsive.margin(20),
    borderWidth: 1,
    borderColor: clr.Text3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  carName: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  selectedCar: {
    backgroundColor: '#eee',
    borderRadius: 4,
    fontWeight: '600',
  },
  divider: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 12,
  },
  uploadBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    height: responsive.height(62),
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: clr.Text3,
  },
  uploadText: {
    fontSize: 14,
    color: '#333',
  },
  uploadButtons: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#eee',
    borderRadius: responsive.borderRadius(6),
  },
  iconBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  plusBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: clr.Text3,
  },
  filterSection: {
    marginTop: 20,
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
    justifyContent: 'space-between',
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
  sectionTitle: {
    ...FONTS.h2,
    marginBottom: 12,
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
  CheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
    marginVertical: responsive.margin(10),
  },
  checkboxLabel: {
    marginLeft: 6,
    fontSize: 16,
    color: '#444',
  },
});
