import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderC from '../../Components/HeaderC';
import Progress3 from '../../Assets/Images/SVG/Progress3.svg';
import Male from '../../Assets/Images/SVG/Male.svg';
import Female from '../../Assets/Images/SVG/Female.svg';
import OtherIcon from '../../Assets/Images/SVG/OtherIcon.svg';
import responsive from '../../Components/Responsive';
import {clr, FONTS} from '../../Constants/theme';
import InputC from '../../Components/InputC';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from '../FilterModal.js/DatePicker';
import ButtonC from '../../Components/ButtonC';
import {useNavigation} from '@react-navigation/native';

const Booking = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedRentalTime, setSelectedRentalTime] = useState('1');
  const navigation = useNavigation();
  const rentalTimeOptions = [
    {id: '1', time: 'Hour'},
    {id: '2', time: 'Day'},
    {id: '3', time: 'Weekly'},
    {id: '4', time: 'Monthly'},
  ];

  const GenderData = [
    {id: '1', gender: 'Male', icon: Male},
    {id: '2', gender: 'Female', icon: Female},
    {id: '3', gender: 'Other', icon: OtherIcon},
  ];

  const [selected, setSelected] = useState();
  return (
    <View style={styles.Container}>
      <View
        style={{
          borderBottomWidth: 1,
          padding: responsive.padding(15),
          borderColor: clr.Text3,
        }}>
        <HeaderC title={'Booking Details'} />
      </View>
      <ScrollView
        contentContainerStyle={{
          gap: responsive.margin(15),
          marginVertical: responsive.margin(10),
          paddingBottom: responsive.padding(40),
          padding: responsive.padding(15),
        }}
        showsVerticalScrollIndicator={false}>
        <Progress3 width={responsive.width('92%')} />
        <View
          style={{
            borderWidth: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            height: responsive.height(65),
            backgroundColor: 'white',
            padding: responsive.padding(15),
            borderColor: clr.Text3,
            borderRadius: responsive.borderRadius(10),
          }}>
          <View>
            <Text
              style={[
                FONTS.h3,
                {color: 'black', fontSize: responsive.fontSize(14)},
              ]}>
              Book with driver
            </Text>
            <Text
              style={[
                FONTS.h4,
                {color: clr.Text2, fontSize: responsive.fontSize(14)},
              ]}>
              Don't have a driver? book with driver.
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: 'black'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <InputC
          placeholder="Full Name *"
          iconFamily={'AntDesign'}
          iconName={'user'}
          iconColor={clr.Text2}
          size={responsive.width(18)}
          width="100%"
        />
        <InputC
          placeholder="Email Address *"
          iconFamily={'Feather'}
          iconName={'mail'}
          iconColor={clr.Text2}
          size={responsive.width(18)}
          width="100%"
        />
        <InputC
          placeholder="Contact *"
          iconFamily={'Feather'}
          iconName={'phone'}
          iconColor={clr.Text2}
          size={responsive.width(18)}
          width="100%"
        />

        <Text
          style={[
            FONTS.h3,
            {color: 'black', fontSize: responsive.fontSize(14)},
          ]}>
          Gender
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {GenderData.map(item => (
            <TouchableOpacity
              style={[
                styles.GenderStyle,
                selected === item.id && styles.selectedGender,
              ]}
              key={item.id}
              onPress={() => setSelected(item.id)}>
              <item.icon color={selected === item.id ? 'white' : clr.Text2} />
              <Text
                style={[
                  FONTS.h3,
                  selected === item.id && styles.selectedgenderText,
                ]}>
                {item.gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rental Time */}
        <View style={styles.filterSection}>
          <Text
            style={[
              FONTS.h3,
              {
                color: 'black',
                fontSize: responsive.fontSize(14),
                marginVertical: 10,
              },
            ]}>
            Rental Date & Time
          </Text>
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
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: clr.Text3,
            borderRadius: 62,
            height: responsive.height(57),
            paddingLeft: 30,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.dateSection}>
            <Text
              style={[
                FONTS.h4,
                {fontSize: responsive.fontSize(14), color: 'black'},
              ]}>
              Pick up Date
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Ionicons
                name="calendar-outline"
                size={responsive.width(14)}
                color="#888"
              />

              <DatePicker color={clr.Text2} />
            </View>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.dateSection}>
            <Text
              style={[
                FONTS.h4,
                {fontSize: responsive.fontSize(14), color: 'black'},
              ]}>
              Return Date
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Ionicons
                name="calendar-outline"
                size={responsive.width(14)}
                color="#888"
              />

              <DatePicker color={clr.Text2} />
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            FONTS.h3,
            {color: 'black', fontSize: responsive.fontSize(14)},
          ]}>
          Car Location
        </Text>
        <InputC
          placeholder="Shore Dr, Chicago 0062 Usa"
          placeholderTextColor={clr.Text2}
          iconFamily={'EvilIcons'}
          iconName={'location'}
          iconColor={clr.Text2}
          size={responsive.width(20)}
          width="100%"
        />
        <ButtonC
          title={'$1400 Pay Now'}
          color={'white'}
          fontSize={responsive.fontSize(16)}
          onPress={()=>navigation.navigate('PaymentMethods')}
        />
      </ScrollView>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: clr.primary,
  },

  GenderStyle: {
    height: responsive.height(40),
    width: responsive.width(90),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsive.borderRadius(60),
    flexDirection: 'row',
    gap: 5,
    backgroundColor: 'white',
  },
  selectedGender: {
    backgroundColor: 'black',
  },
  selectedgenderText: {
    color: 'white',
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
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  dateSection: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  date: {
    fontSize: responsive.fontSize(12),
    ...FONTS.h4,
    marginLeft: 5,
  },
  separator: {
    width: responsive.width(1),
    backgroundColor: '#ccc',
    marginHorizontal: 15,
    height: responsive.height(37),
    borderColor: clr.Text3,
    right: responsive.margin(10),
  },
});
