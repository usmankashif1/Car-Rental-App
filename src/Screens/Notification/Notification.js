import React from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import responsive from '../../Components/Responsive';
import appTheme from '../../Constants/theme';
import HeaderC from '../../Components/HeaderC';
import DiscountIcon from '../../Assets/Images/SVG/DiscountIcon.svg';
import NoticeIcon from '../../Assets/Images/SVG/NoticeIcon.svg';
import WarningIcon from '../../Assets/Images/SVG/WarningIcon.svg';
import ClockIcon from '../../Assets/Images/SVG/ClockIcon.svg';
import NotiIcon from '../../Assets/Images/SVG/NotiIcon.svg';
import TickIcon from '../../Assets/Images/SVG/TickIcon.svg';
const {clr, FONTS} = appTheme;

const notifications = [
  {
    section: 'Today',
    data: [
      {
        id: '1',
        title: 'Car Booking Successful',
        time: '10:00 am',
        message:
          'Your car is ready! Check your email for the booking and pickup instructions. Safe travels!',
        isNew: true,
        icon: TickIcon,
      },
      {
        id: '2',
        title: 'Payment Notification',
        time: '10:00 am',
        message:
          'Your payment was processed successfully! Enjoy your ride and Stay Safe.',
        isNew: true,
        icon: NotiIcon,
      },
      {
        id: '3',
        title: 'Car Pickup/Drop-off time',
        time: '09:00 am',
        message:
          'Pickup time confirmed! See you at [Time] for your car rental. Drop-off Time Confirmed! Please',
        isNew: false,
        icon: ClockIcon,
      },
    ],
  },
  {
    section: 'Previous',
    data: [
      {
        id: '4',
        title: 'Late Return Warning',
        time: 'Yesterday',
        message:
          'Late Return Alert! Please return the car as soon as possible to avoid extra charges.',
        isNew: false,
        icon: WarningIcon,
      },
      {
        id: '5',
        title: 'Cancellation Notice',
        time: 'Yesterday',
        message:
          'Your Reservation Has Been Canceled or Booking Cancelled Successfully.',
        isNew: false,
        icon: NoticeIcon,
      },
      {
        id: '6',
        title: 'Discount Notification',
        time: 'Yesterday',
        message:
          "Congratulations! You've unlocked a 10% discount on your next rental.",
        isNew: false,
        icon: DiscountIcon,
      },
    ],
  },
];

const NotificationItem = ({title, message, time, isNew, Icon}) => (
  <View
    style={[
      styles.notificationContainer,
      isNew === true && styles.NotificationUnreadContainer,
    ]}>
    <View style={styles.notificationHeader}>
      <View
        style={{
          height: responsive.uniform(44),
          width: responsive.uniform(44),
          borderWidth: 1,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: clr.Text3,
        }}>
        <Icon
          height={responsive.height(25)}
          width={responsive.height(25)}
          color={'black'}
        />
      </View>
      <View style={{marginLeft: responsive.margin(10)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: responsive.width('78%'),
          }}>
          <Text style={[FONTS.h3, {color: clr.Text1,}]}>{title}</Text>
          <View style={styles.timeRow}>
            <Text style={[FONTS.h4, {color: clr.Text2, marginRight: 5}]}>
              {time}
            </Text>
            {isNew && <View style={styles.dot} />}
          </View>
        </View>
        <View style={{width: '93%'}}>
          <Text
            style={[
              FONTS.h4,
              {color: clr.Text2, marginTop: responsive.margin(4)},
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const NotificationsScreen = () => {
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{                paddingBottom: responsive.padding(100),
}}>
        {notifications.map(section => (
          <View key={section.section} style={styles.sectionContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: responsive.padding(15),
              }}>
              <Text
                style={[
                  FONTS.h2,
                  {
                    color: clr.Text1,
                    fontSize: responsive.fontSize(16),
                  },
                ]}>
                {section.section}
              </Text>
              {section.section === 'Today' && (
                <Text style={[FONTS.h4, {fontSize: responsive.fontSize(14)}]}>
                  2 Unread Notification
                </Text>
              )}
            </View>
            <FlatList
              data={section.data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <NotificationItem
                  Icon={item.icon}
                  title={item.title}
                  message={item.message}
                  time={item.time}
                  isNew={item.isNew}
                />
              )}
              scrollEnabled={false} // disable inner scrolling
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.primary,
  },
  sectionContainer: {
    
  },
  notificationContainer: {
    padding: responsive.padding(15),
    marginBottom: responsive.height(12),
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: responsive.uniform(8),
    height: responsive.uniform(8),
    borderRadius: responsive.uniform(4),
    backgroundColor: clr.Tertiary,
  },
  NotificationUnreadContainer: {
    backgroundColor: 'white',
  },
});

export default NotificationsScreen;
