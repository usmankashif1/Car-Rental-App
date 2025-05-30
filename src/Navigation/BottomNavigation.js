import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Main/Home';
import Search from '../Screens/Search/Search';
import Chat from '../Screens/Chat/Chat';
import Notification from '../Screens/Notification/Notification';
import Profile from '../Screens/Profile/Profile';
import HomeIcon from '../Assets/Images/SVG/HomeIcon.svg';
import SearchIcon from '../Assets/Images/SVG/SearchIcon.svg';
import InboxIcon from '../Assets/Images/SVG/InboxIcon.svg';
import NotificationIcon from '../Assets/Images/SVG/NotificationIcon.svg';
import ProfileIcon from '../Assets/Images/SVG/ProfileIcon.svg';
import responsive from '../Components/Responsive';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: responsive.margin(5),
          marginLeft: responsive.margin(20),
          backgroundColor: '#21292B',
          borderRadius: responsive.borderRadius(54),
          height: responsive.height('9.35%'),
          width: responsive.width('88%'),
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 5},
          shadowRadius: 10,
          paddingTop: responsive.padding(15),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              height={responsive.height('2.46%')}
              width={responsive.width('5.33%')}
              color={focused ? 'white' : '#767676'}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SearchIcon
              height={responsive.height('2.46%')}
              width={responsive.width('5.33%')}
              color={focused ? 'white' : '#767676'}
            />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <InboxIcon
              height={responsive.height('2.46%')}
              width={responsive.width('5.33%')}
              color={focused ? 'white' : '#767676'}
            />
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <NotificationIcon
              height={responsive.height('2.46%')}
              width={responsive.width('5.33%')}
              color={focused ? 'white' : '#767676'}
            />
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileIcon
              height={responsive.height('2.46%')}
              width={responsive.width('5.33%')}
              color={focused ? 'white' : '#767676'}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
