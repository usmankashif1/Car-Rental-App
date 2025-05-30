import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HeaderC from '../../Components/HeaderC';
import responsive from '../../Components/Responsive';
import {clr, FONTS} from '../../Constants/theme';
import Progress2 from '../../Assets/Images/SVG/Progress2.svg';
import Car2 from '../../Assets/Images/SVG/car2.svg';
import Star from '../../Assets/Images/SVG/Star.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonC from '../../Components/ButtonC';
import { useNavigation } from '@react-navigation/native';

const Confirmation = () => {
  const navigation = useNavigation();

  const bookingInfo = [
    {label: 'Booking ID', value: '00451'},
    {label: 'Name', value: 'Benjamin Jack'},
    {label: 'Pick up Date', value: '19 Jan 2024  10:30 am'},
    {label: 'Return Date', value: '22 Jan 2024  05:00 pm'},
    {
      label: 'Location',
      value: 'Shore Dr, Chicago 0062 Usa',
      isLocation: true,
    },
  ];

  // Payment info data
  const paymentInfo = [
    {label: 'Trx ID', value: '#141mtslv5854d58'},
    {label: 'Amount', value: '$1400'},
    {label: 'Service fee', value: '$15'},
  ];

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
          paddingBottom: responsive.padding(100),
          padding: responsive.padding(15),
        }}
        showsVerticalScrollIndicator={false}>
        <Progress2 width={responsive.width('92%')} />
        <Car2
          height={responsive.height('20%')}
          width={responsive.width('90%')}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={FONTS.h2}>Tesla Model S</Text>
            <Text style={[FONTS.h4, {color: clr.Text2, fontSize: 14}]}>
              A car with high specs that are rented{'\n'}at an affordable price.
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
            height: responsive.height(1),
            backgroundColor: clr.Text3,
            marginTop: responsive.margin(30),
          }}></View>
        <Text style={styles.sectionTitle}>Booking informational</Text>

        <View style={styles.infoContainer}>
          {bookingInfo.map((item, index) => (
            <View key={index} style={styles.infoRow}>
              <Text style={styles.infoLabel}>• {item.label}</Text>
              {item.isLocation ? (
                <View style={styles.locationContainer}>
                  <Ionicons name="location-outline" size={16} color="#888" />
                  <Text style={styles.infoValue}>{item.value}</Text>
                </View>
              ) : (
                <Text style={styles.infoValue}>{item.value}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Payment Section */}
        <Text style={styles.sectionTitle}>Payment</Text>

        <View style={styles.paymentContainer}>
          {paymentInfo.map((item, index) => (
            <View key={index} style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>{item.label}</Text>
              <Text style={styles.paymentValue}>{item.value}</Text>
            </View>
          ))}

          {/* Dotted Line */}
          <View style={styles.dottedLine} />

          <View style={styles.paymentRow}>
            <Text style={styles.totalLabel}>Total amount</Text>
            <Text style={styles.totalValue}>$1415</Text>
          </View>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Payment with</Text>
            <Image
              source={require('../../Assets/Images/mastercard.png')}
              style={styles.cardImage}
              resizeMode="contain"
            />
          </View>
          <ButtonC
            title={'Confirm'}
            color={'white'}
            fontSize={16}
            marginVertical={10}
            width="100%"
            onPress={() => navigation.navigate('OrderPaymentDetails')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  infoContainer: {
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoLabel: {
    ...FONTS.h3,
    color: '#666',
    fontSize: 14,
  },
  infoValue: {
    ...FONTS.h4,

    color: clr.Text2,
    fontSize: 14,
    textAlign: 'right',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  paymentContainer: {
    marginTop: 5,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  paymentLabel: {
    ...FONTS.h3,

    color: '#666',
    fontSize: 14,
  },
  paymentValue: {
    ...FONTS.h4,

    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  dottedLine: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 1,
    marginVertical: 12,
  },
  totalLabel: {
    ...FONTS.h3,

    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalValue: {
    ...FONTS.h4,

    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 40,
    height: 25,
  },
});
