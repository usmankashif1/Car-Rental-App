import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderC from '../../Components/HeaderC';
import {clr, FONTS} from '../../Constants/theme';
import responsive from '../../Components/Responsive';
import Progress1 from '../../Assets/Images/SVG/Progress1.svg';
import CreditCard from '../../Assets/Images/SVG/CreditCard.svg';
import Default from '../../Assets/Images/SVG/Default.svg';
import CardIcons from '../../Assets/Images/SVG/CardIcons.svg';
import InputC from '../../Components/InputC';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {countries} from '../../Components/Countries';
import ButtonC from '../../Components/ButtonC';
import {nativeViewGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import {useNavigation} from '@react-navigation/native';
const PaymentMethods = () => {
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <HeaderC title={'Payment methods '} />
      <ScrollView>
        <View
          style={{
            height: responsive.height(1),
            backgroundColor: clr.Text3,
            marginTop: responsive.margin(20),
          }}></View>
        <View style={{marginVertical: responsive.margin(10)}}>
          <Progress1 width={responsive.width('92%')} />
        </View>

        <CreditCard width={responsive.width('92%')} />
        <Text
          style={[
            FONTS.h2,
            {fontSize: 16, marginVertical: responsive.margin(10)},
          ]}>
          Select Payment Method{' '}
        </Text>
        <View
          style={{flexDirection: 'row', marginVertical: responsive.margin(10)}}>
          <InputC
            placeholder="Cash Payment"
            placeholderTextColor={clr.Text2}
            iconFamily={'MaterialCommunityIcons'}
            iconName={'cash-fast'}
            width="100%"
            editable={false}
          />
          <Default right={responsive.margin(90)} top={responsive.margin(12)} />
        </View>
        <Text style={[FONTS.h2, {fontSize: 16}]}>Card information</Text>
        <View
          style={{
            maxHeight: 900,
            justifyContent: 'space-between',
            gap: 10,
            marginVertical: 10,
          }}>
          <InputC placeholder="Full Name" width="100%" />
          <InputC placeholder="Email Address" width="100%" />
          <View style={{flexDirection: 'row'}} width="100%">
            <InputC placeholder="Number" width="100%" />
            <CardIcons
              right={responsive.margin(130)}
              top={responsive.margin(15)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: clr.Text3,
              height: 52,
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <InputC
              placeholder="MM / YY"
              width="50%"
              borderWidth={0}
              borderBottomRightRadius={0}
              borderTopRightRadius={0}
              borderRightWidth={1}
              height={responsive.height('5%')}
            />
            <InputC
              placeholder="CVC"
              width="50%"
              borderWidth={0}
              borderBottomLeftRadius={0}
              borderTopLeftRadius={0}
              height={responsive.height('5%')}
              iconFamily={'Ionicons'}
              iconNextName={'card-outline'}
            />
          </View>
        </View>
        <Text style={[FONTS.h2, {fontSize: 16}]}>Country or region</Text>
        <View style={styles.dropdownWrapper}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={itemValue => setSelectedCountry(itemValue)}
            style={styles.picker}>
            {countries.map((country, index) => (
              <Picker.Item label={country} value={country} key={index} />
            ))}
          </Picker>
        </View>
        <InputC placeholder="Zip" width="100%" fontSize={14} />
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
        <View style={styles.LineOR}>
          <Text style={[FONTS.h4, {color: clr.Text2}]}>________________</Text>
          <Text style={[FONTS.h2, {color: clr.Text2}]}>Pay with card Or </Text>
          <Text style={[FONTS.h4, {color: clr.Text2}]}>________________</Text>
        </View>
        <View style={styles.btnContainer}>
          <ButtonC
            iconFamily={'AntDesign'}
            iconName={'apple1'}
            borderWidth={1}
            borderColor={clr.Text2}
            color={'black'}
            title={'Apple Pay'}
            width="100%"
            backgroundColor="#EDEDED"
            flexDirection={'row'}
            left={5}
            height={responsive.height(49)}
            fontSize={14}
            size={responsive.width(20)}
          />
          <ButtonC
            borderWidth={1}
            color={'black'}
            backgroundColor={'#EDEDED'}
            title={'Google Pay'}
            marginVertical={responsive.margin(15)}
            width="100%"
            borderColor={clr.Text2}
            iconFamily={'AntDesign'}
            iconName={'google'}
            flexDirection={'row'}
            left={5}
            height={responsive.height(49)}
            fontSize={14}
            size={responsive.width(20)}
          />
        </View>
        <ButtonC
          title={'Continue'}
          color={'white'}
          fontSize={16}
          onPress={() => navigation.navigate('Confirmation')}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: clr.primary,
    padding: responsive.padding(15),
  },
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: clr.Text3,
    borderRadius: responsive.borderRadius(10),
    backgroundColor: 'white',
    marginVertical: responsive.margin(10),
  },
  picker: {
    height: responsive.height('7.5%'),
    width: '100%',
    color: clr.Text2,
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
  btnContainer: {
    marginVertical: responsive.margin(5),
  },
  LineOR: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: responsive.margin(10),
  },
});
