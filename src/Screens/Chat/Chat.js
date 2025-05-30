import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import responsive from '../../Components/Responsive';
import HeaderC from '../../Components/HeaderC';
import {clr, FONTS} from '../../Constants/theme';
import InputC from '../../Components/InputC';
import PlusIcon from '../../Assets/Images/SVG/PlusIcon.svg';
import P1 from '../../Assets/Images/SVG/p1.svg';
import P2 from '../../Assets/Images/SVG/p2.svg';
import P3 from '../../Assets/Images/SVG/p3.svg';
import P4 from '../../Assets/Images/SVG/p4.svg';
import P5 from '../../Assets/Images/SVG/p5.svg';
import P6 from '../../Assets/Images/SVG/p6.svg';
const Chat = () => {
  const Story = [
    {
      icon: PlusIcon,
      text: 'Add story',
    },
    {
      icon: P1,
      text: 'Carolina',
    },

    {
      icon: P2,
      text: 'Jonathon',
    },
    {
      icon: P3,
      text: 'Androw',
    },
    {
      icon: P4,
      text: 'Paper',
    },
    {
      icon: P5,
      text: 'Hela Quintin',
    },
    {
      icon: P6,
      text: 'Cameron',
    },
  ];

  const messages = [
    {
      id: '1',
      name: 'Hela Quintin',
      message: 'Your car is on the way! It will arrive.......',
      time: '09:20 am',
      unread: 2,
      avatar: P1,
      online: true,
    },
    {
      id: '2',
      name: 'Cameron',
      message: 'Ok, thanks!',
      time: '09:20 am',
      unread: 1,
      avatar: P2,
      online: true,
    },
    {
      id: '3',
      name: 'Mr. Davit',
      message: 'Thank you for booking with us! ......',
      time: '08:30 am',
      unread: 0,
      avatar: P3,
      online: true,
    },
    {
      id: '4',
      name: 'Richard',
      message: 'You: A voice message',
      time: '07:32 am',
      unread: 0,
      avatar: P4,
      online: false,
    },
    {
      id: '5',
      name: 'Maichel',
      message: 'You: It was an amazing and smooth ......',
      time: 'Yesterday',
      unread: 0,
      avatar: P5,
      online: false,
    },
    {
      id: '6',
      name: 'Anna',
      message: "It's Ok, thankyou",
      time: 'Yesterday',
      unread: 0,
      avatar: P6,
      online: false,
    },
    {
      id: '7',
      name: 'Hela Quintin',
      message: 'Your car is on the way! It will arrive.......',
      time: '09:20 am',
      unread: 2,
      avatar: P1,
      online: true,
    },
    {
      id: '8',
      name: 'Cameron',
      message: 'Ok, thanks!',
      time: '09:20 am',
      unread: 1,
      avatar: P2,
      online: true,
    },
    {
      id: '9',
      name: 'Mr. Davit',
      message: 'Thank you for booking with us! ......',
      time: '08:30 am',
      unread: 0,
      avatar: P3,
      online: true,
    },
    {
      id: '10',
      name: 'Richard',
      message: 'You: A voice message',
      time: '07:32 am',
      unread: 0,
      avatar: P4,
      online: false,
    },
    {
      id: '11',
      name: 'Maichel',
      message: 'You: It was an amazing and smooth ......',
      time: 'Yesterday',
      unread: 0,
      avatar: P5,
      online: false,
    },
    {
      id: '12',
      name: 'Anna',
      message: "It's Ok, thankyou",
      time: 'Yesterday',
      unread: 0,
      avatar: P6,
      online: false,
    },
  ];

  return (
    <View style={styles.container}>
      
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: clr.Text3,
          padding: responsive.padding(15),
        }}>
        <HeaderC title={'Chats'} />
      </View>
      <ScrollView>
    
      <View style={{padding: responsive.padding(15)}}>
        <InputC
          placeholder="Search your dream car....."
          placeholderTextColor={clr.Text2}
          iconName={'search'}
          iconFamily={'Feather'}
          width="100%"
          marginVertical={responsive.margin(10)}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: responsive.padding(20),
          gap: responsive.margin(15),
        }}
        style={{marginBottom: responsive.margin(10)}}>
        {Story.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                height: responsive.uniform(60),
                width: responsive.uniform(60),
                borderWidth: item.text === 'Add story' ? 1 : 0,
                borderRadius: responsive.borderRadius(100),
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: item.text === 'Add story' ? clr.Text3 : '',
                backgroundColor: 'white',
              }}>
              <item.icon
                height={
                  item.text === 'Add story'
                    ? responsive.height(20)
                    : responsive.height(65)
                }
                width={
                  item.text === 'Add story'
                    ? responsive.width(20)
                    : responsive.width(65)
                }
              />
            </View>
            <Text
              style={[
                FONTS.h4,
                {
                  fontSize: responsive.fontSize(12),
                  marginTop: responsive.margin(5),
                  textAlign: 'center',
                },
              ]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{gap: responsive.margin(10),marginVertical:15}}>
        {messages.map(item => (
          <TouchableOpacity
            style={[
              styles.chatContainer,
              item.unread > 0 && styles.chatContainerRead,
            ]}>
            <View style={styles.imageWrapper}>
              <item.avatar
                width={responsive.width(50)}
                height={responsive.height(50)}
              />
              {item.online && <View style={styles.onlineDot} />}
            </View>

            <View style={styles.messageWrapper}>
              <View style={styles.rowBetween}>
                <Text style={styles.name}>{item.name}</Text>
                {item.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unread}</Text>
                  </View>
                )}
              </View>

              <View style={styles.rowBetween}>
                <Text
                  style={[styles.message,item.unread > 0 && styles.UnreadMessage]}
                  numberOfLines={1}
                  >
                  {item.message}
                </Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: clr.primary,
    flex: 1,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    paddingHorizontal: responsive.padding(15),
    backgroundColor: clr.primary,
    height: responsive.height(76),
  },
  chatContainerRead: {
    backgroundColor: 'white',
  },
  imageWrapper: {
    position: 'relative',
    width: responsive.width(50),
    height: responsive.height(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: responsive.width(25),
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: responsive.width(10),
    height: responsive.height(10),
    borderRadius: responsive.width(5),
    backgroundColor: '#00cc66',
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageWrapper: {
    flex: 1,
    marginLeft: responsive.margin(12),
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: responsive.fontSize(16),
    ...FONTS.h3,
    color: '#000',
    bottom: 5,
  },
  time: {
    fontSize: responsive.fontSize(12),
    color: '#888',
  },
  message: {
    fontSize: responsive.fontSize(14),
    color: '#444',
    maxWidth: '80%',
  },

  unreadBadge: {
    backgroundColor: '#1976D2',
    borderRadius: responsive.borderRadius(50),
    width: responsive.uniform(20),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsive.margin(15),
    bottom: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: responsive.fontSize(12),
    ...FONTS.h4,
  },
  UnreadMessage:{
    color:'black',
  }
});
