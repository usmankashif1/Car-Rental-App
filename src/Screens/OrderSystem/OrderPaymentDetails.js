import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {clr, FONTS} from '../../Constants/theme';
import ButtonC from '../../Components/ButtonC';
import HeaderC from '../../Components/HeaderC';
import responsive from '../../Components/Responsive';
import LottieView from 'lottie-react-native';
import TickLottie from '../../Assets/Lotti/TickLotti.json';
import {useNavigation} from '@react-navigation/native';

const OrderPaymentDetails = () => {
  const navigation = useNavigation();

  const bookingInfo = [
    {label: 'Car Model', value: 'Tesla Model 3'},
    {label: 'Rental Date', value: '19Jan24 - 22Jan24'},
    {label: 'Name', value: 'Benjamin Jack'},
  ];

  const transactionDetails = [
    {label: 'Transaction ID', value: '#T000123B0J1'},
    {label: 'Transaction Date', value: '01Jan2024 - 10:30 am'},
    {label: 'Payment Method', value: '💳 123 *** *** ***225'},
    {label: 'Amount', value: '$1400'},
    {label: 'Service fee', value: '$15'},
    {label: 'Tax', value: '$0'},
  ];

  const totalAmount = '$1415';

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: clr.Text3,
          padding: responsive.padding(15),
        }}>
        <HeaderC title={'Payment States'} />
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: responsive.padding(80),
          padding: responsive.padding(15),
        }}>
        <LottieView
          source={TickLottie}
          autoPlay
          loop={false}
          style={{
            width: responsive.width(105),
            height: responsive.height(105),
            alignSelf: 'center',
          }}
        />
        <Text style={[styles.title, {marginVertical: responsive.margin(10)}]}>
          Payment successful
        </Text>
        <Text style={styles.subtitle}>
          Your car rent Booking has been successfully
        </Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Booking information</Text>
          <View
            style={{
              height: 1,
              backgroundColor: clr.Text3,
              marginVertical: responsive.margin(10),
            }}
          />
          {bookingInfo.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: clr.Text3,
            marginVertical: responsive.margin(10),
          }}
        />
        <View style={styles.cardTwo}>
          <Text style={styles.sectionTitle}>Transaction detail</Text>
          {transactionDetails.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}

          <View style={[styles.row, styles.totalRow]}>
            <Text style={[styles.sectionTitle, {marginBottom: 0}]}>
              Total amount
            </Text>
            <Text style={styles.totalValue}>{totalAmount}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="download-outline"
            size={responsive.width(20)}
            color="#333"
          />
          <Text style={styles.buttonText}>Download Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: 'white'}]}>
          <Ionicons
            name="share-social-outline"
            size={responsive.width(20)}
            color="#333"
          />
          <Text style={styles.buttonText}>Share Your Receipt</Text>
        </TouchableOpacity>

        <ButtonC
          title={'Back to Home'}
          color={'white'}
          fontSize={responsive.fontSize(16)}
          marginVertical={responsive.margin(10)}
          onPress={() => navigation.navigate('BottomNavigation')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: clr.primary,
  },
  title: {
    ...FONTS.h2,
    fontSize: responsive.fontSize(16),
    textAlign: 'center',
    marginBottom: responsive.margin(4),
  },
  subtitle: {
    ...FONTS.h4,
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: responsive.margin(20),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(10),
    padding: responsive.padding(15),
    marginBottom: responsive.margin(20),
    borderWidth: 1,
    borderColor: clr.Text3,
  },
  cardTwo: {
    borderRadius: responsive.borderRadius(10),
    padding: responsive.padding(15),
    marginBottom: 20,
  },
  sectionTitle: {
    ...FONTS.h2,
    fontSize: responsive.fontSize(16),
    marginBottom: responsive.margin(12),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsive.padding(6),
  },
  label: {
    color: '#555',
  },
  value: {
    fontWeight: '500',
    color: '#000',
  },
  totalRow: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: responsive.margin(10),
    paddingTop: responsive.padding(10),
  },
  totalValue: {
    fontSize: responsive.fontSize(16),
    ...FONTS.h2,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: responsive.borderRadius(25),
    paddingVertical: responsive.padding(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsive.margin(8),
    borderWidth: 1,
    borderColor: clr.Text3,
  },
  buttonText: {
    ...FONTS.h4,
    marginLeft: responsive.margin(8),
    fontSize: responsive.fontSize(16),
    color: '#333',
  },
});

export default OrderPaymentDetails;
