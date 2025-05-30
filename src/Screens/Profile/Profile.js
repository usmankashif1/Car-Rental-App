import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {clr, FONTS} from '../../Constants/theme';
import responsive from '../../Components/Responsive';
import HeaderC from '../../Components/HeaderC';
import ClockIcon from '../../Assets/Images/SVG/ClockIcon.svg';
import EngineOut from '../../Assets/Images/SVG/EngineOut.svg';
import {useNavigation} from '@react-navigation/native';

// Profile data
const profileData = {
  name: 'Benjamin Jack',
  email: 'benjamin.jack@gmail.com',
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
};

// Menu items data with exact icons from image
const generalMenuItems = [
  {
    id: '1',
    title: 'Favorite Cars',
    iconComponent: () => (
      <View style={styles.Icon}>
        <AntDesign
          name="hearto"
          color={clr.Text2}
          size={responsive.width(20)}
        />
      </View>
    ),
    route: 'FavoriteCars',
  },
  {
    id: '2',
    title: 'Previous Rant',
    iconComponent: () => (
      <View style={styles.Icon}>
        <ClockIcon />
      </View>
    ),
    route: 'PreviousRant',
  },
  {
    id: '3',
    title: 'Notification',
    iconComponent: () => (
      <View style={styles.Icon}>
        <Fontisto name="bell" size={responsive.width(20)} color={clr.Text2} />
      </View>
    ),
    route: 'Notification',
  },
  {
    id: '4',
    title: 'Connected to QENT Partnerships',
    route: 'WelcomePartner',

    iconComponent: () => (
      <View style={styles.Icon}>
        <EngineOut />
      </View>
    ),
  },
];

const supportMenuItems = [
  {
    id: '5',
    title: 'Settings',
    iconComponent: () => (
      <View style={styles.Icon}>
        <AntDesign
          name="setting"
          size={responsive.width(20)}
          color={clr.Text2}
        />
      </View>
    ),
    route: 'Settings',
  },
  {
    id: '6',
    title: 'Languages',
    iconComponent: () => (
      <View style={styles.Icon}>
        <Entypo name="language" size={responsive.width(20)} color={clr.Text2} />
      </View>
    ),
    route: 'Languages',
  },
  {
    id: '7',
    title: 'Invite Friends',
    iconComponent: () => (
      <View style={styles.Icon}>
        <Octicons name="people" size={responsive.width(20)} color={clr.Text2} />
      </View>
    ),
    route: 'InviteFriends',
  },
  {
    id: '8',
    title: 'privacy policy',
    iconComponent: () => (
      <View style={styles.Icon}>
        <Ionicons
          name="document-text-outline"
          size={responsive.width(20)}
          color={clr.Text2}
        />
      </View>
    ),
    route: 'PrivacyPolicy',
  },
  {
    id: '9',
    title: 'Help Support',
    iconComponent: () => (
      <View style={styles.Icon}>
        <MaterialIcons
          name="headset-mic"
          size={responsive.width(20)}
          color={clr.Text2}
        />
      </View>
    ),
    route: 'HelpSupport',
  },
  {
    id: '10',
    title: 'Log out',
    iconComponent: () => (
      <View style={styles.Icon}>
        <AntDesign
          name="logout"
          size={responsive.width(20)}
          color={clr.Text2}
        />
      </View>
    ),
    route: 'Logout',
  },
];
// Components
const ProfileHeader = ({profile}) => (
  <View>
    <View style={styles.profileHeader}>
      <View style={styles.profileImageContainer}>
        <Image source={{uri: profile.avatar}} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIconContainer}>
          <View style={styles.editPencil}>
            <Ionicons name="camera-outline" size={responsive.width(14)} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileEmail}>{profile.email}</Text>
      </View>
      <TouchableOpacity style={styles.editProfileButton}>
        <Feather name="edit-3" size={responsive.width(10)} />
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const MenuSection = ({title, items, onItemPress}) => (
  <View style={styles.menuSection}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.menuItemsContainer}>
      {items.map((item, index) => (
        <MenuItem
          key={item.id}
          item={item}
          onPress={() => onItemPress(item)}
          isLast={index === items.length - 1}
        />
      ))}
    </View>
  </View>
);

const MenuItem = ({item, onPress, isLast}) => (
  <TouchableOpacity
    style={[styles.menuItem, isLast && styles.menuItemLast]}
    onPress={onPress}
    activeOpacity={0.7}>
    <View style={styles.menuItemLeft}>
      <View style={styles.iconContainer}>{item.iconComponent()}</View>
      <Text style={styles.menuItemText}>{item.title}</Text>
    </View>
    <View style={styles.chevronContainer}>
      <Feather
        name="chevron-right"
        size={responsive.width(20)}
        color={clr.Text2}
      />{' '}
    </View>
  </TouchableOpacity>
);

// Main Profile Screen Component
const ProfileScreen = () => {
  const handleMenuItemPress = item => {
    const destination = item.route || item.screen;
    if (destination) {
      navigation.navigate(destination);
    } else {
      console.warn('No destination screen defined for this item.');
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: responsive.padding(15)}}>
        <HeaderC title={'Profile'} />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <ProfileHeader profile={profileData} />

        <MenuSection
          title="General"
          items={generalMenuItems}
          onItemPress={handleMenuItemPress}
        />

        <MenuSection
          title="Support"
          items={supportMenuItems}
          onItemPress={handleMenuItemPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.primary,
    paddingHorizontal: responsive.padding(15),
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: responsive.padding(100),
  },

  // Profile Header Styles
  profileHeader: {
    alignItems: 'center',
    paddingTop: responsive.padding(20),
    paddingBottom: responsive.padding(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: responsive.margin(10),
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

  profileInfo: {
    marginBottom: responsive.margin(20),
  },
  profileName: {
    fontSize: responsive.fontSize(20),
    fontWeight: '600',
    color: clr.Text1,
    marginBottom: responsive.margin(4),
  },
  profileEmail: {
    fontSize: responsive.fontSize(14),
    color: clr.Text2,
    fontWeight: '400',
  },
  editProfileButton: {
    alignItems: 'center',
    marginBottom: responsive.margin(15),
  },
  editProfileText: {
    fontSize: responsive.fontSize(14),
    color: clr.Text2,
    ...FONTS.h3,
  },

  // Menu Section Styles
  menuSection: {},
  sectionTitle: {
    fontSize: responsive.fontSize(16),
    ...FONTS.h2,
    color: clr.Text1,
    marginTop: responsive.margin(20),
    marginBottom: responsive.margin(5),
    paddingHorizontal: responsive.padding(10),
  },
  menuItemsContainer: {
    paddingTop: responsive.padding(5),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsive.padding(15),
    paddingHorizontal: responsive.padding(15),
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
    minHeight: responsive.height(56),
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: responsive.uniform(24),
    height: responsive.uniform(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsive.margin(16),
  },
  menuItemText: {
    fontSize: responsive.fontSize(16),
    color: clr.Text1,
    fontWeight: '400',
    flex: 1,
  },
  chevronContainer: {
    width: responsive.uniform(20),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    width: responsive.uniform(6),
    height: responsive.uniform(6),
    borderTopWidth: 1.5,
    borderRightWidth: 5,
    borderColor: clr.Text2,
    transform: [{rotate: '45deg'}],
  },

  // Icon Styles
  Icon: {
    width: responsive.uniform(40),
    height: responsive.uniform(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: clr.Text3,
  },
  heartShape: {
    width: responsive.uniform(16),
    height: responsive.uniform(14),
    borderWidth: 1.5,
    borderColor: clr.icon,
    borderRadius: responsive.uniform(8),
    transform: [{rotate: '45deg'}],
    backgroundColor: 'transparent',
  },

  clockIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockBorder: {
    width: responsive.uniform(18),
    height: responsive.uniform(18),
    borderRadius: responsive.uniform(9),
    borderWidth: 1.5,
    borderColor: clr.icon,
    position: 'absolute',
  },
  clockHand: {
    width: responsive.uniform(6),
    height: 1.5,
    backgroundColor: clr.icon,
    position: 'absolute',
    top: responsive.uniform(9),
    left: responsive.uniform(9),
    transformOrigin: 'left center',
    transform: [{rotate: '45deg'}],
  },

  bellIcon: {
    width: responsive.uniform(18),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellShape: {
    width: responsive.uniform(14),
    height: responsive.uniform(16),
    borderWidth: 1.5,
    borderColor: clr.icon,
    borderTopLeftRadius: responsive.uniform(7),
    borderTopRightRadius: responsive.uniform(7),
    borderBottomWidth: 2,
  },

  linkIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkChain: {
    width: responsive.uniform(8),
    height: responsive.uniform(8),
    borderRadius: responsive.uniform(4),
    borderWidth: 1.5,
    borderColor: clr.icon,
    position: 'absolute',
  },
  linkChain2: {
    transform: [{translateX: responsive.uniform(6)}],
  },

  settingsIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gear: {
    width: responsive.uniform(16),
    height: responsive.uniform(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gearTooth: {
    width: responsive.uniform(2),
    height: responsive.uniform(4),
    backgroundColor: clr.icon,
    position: 'absolute',
    top: responsive.uniform(-2),
  },
  gearCenter: {
    width: responsive.uniform(6),
    height: responsive.uniform(6),
    borderRadius: responsive.uniform(3),
    borderWidth: 1.5,
    borderColor: clr.icon,
    backgroundColor: 'transparent',
  },

  languageIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    fontSize: responsive.fontSize(14),
    color: clr.icon,
    fontWeight: '500',
  },

  friendsIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  person1: {
    width: responsive.uniform(10),
    height: responsive.uniform(10),
    borderRadius: responsive.uniform(5),
    borderWidth: 1.5,
    borderColor: clr.icon,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  person2: {
    width: responsive.uniform(10),
    height: responsive.uniform(10),
    borderRadius: responsive.uniform(5),
    borderWidth: 1.5,
    borderColor: clr.icon,
    position: 'absolute',
    right: 0,
    top: responsive.uniform(3),
  },

  documentIcon: {
    width: responsive.uniform(16),
    height: responsive.uniform(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentBody: {
    width: responsive.uniform(12),
    height: responsive.uniform(16),
    borderWidth: 1.5,
    borderColor: clr.icon,
    position: 'absolute',
    borderTopRightRadius: responsive.uniform(2),
  },
  documentCorner: {
    width: responsive.uniform(3),
    height: responsive.uniform(3),
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderColor: clr.icon,
    position: 'absolute',
    top: responsive.uniform(-1.5),
    right: responsive.uniform(2),
  },
  documentLine1: {
    width: responsive.uniform(6),
    height: 1,
    backgroundColor: clr.icon,
    position: 'absolute',
    top: responsive.uniform(6),
    left: responsive.uniform(5),
  },
  documentLine2: {
    width: responsive.uniform(8),
    height: 1,
    backgroundColor: clr.icon,
    position: 'absolute',
    top: responsive.uniform(9),
    left: responsive.uniform(4),
  },
  documentLine3: {
    width: responsive.uniform(6),
    height: 1,
    backgroundColor: clr.icon,
    position: 'absolute',
    top: responsive.uniform(12),
    left: responsive.uniform(5),
  },

  headsetIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headsetBand: {
    width: responsive.uniform(16),
    height: responsive.uniform(8),
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: clr.icon,
    borderTopLeftRadius: responsive.uniform(8),
    borderTopRightRadius: responsive.uniform(8),
    position: 'absolute',
    top: 0,
  },
  headsetEarLeft: {
    width: responsive.uniform(4),
    height: responsive.uniform(6),
    borderWidth: 1.5,
    borderColor: clr.icon,
    borderRadius: responsive.uniform(2),
    position: 'absolute',
    left: responsive.uniform(1),
    top: responsive.uniform(6),
  },
  headsetEarRight: {
    width: responsive.uniform(4),
    height: responsive.uniform(6),
    borderWidth: 1.5,
    borderColor: clr.icon,
    borderRadius: responsive.uniform(2),
    position: 'absolute',
    right: responsive.uniform(1),
    top: responsive.uniform(6),
  },
  headsetMic: {
    width: responsive.uniform(2),
    height: responsive.uniform(4),
    backgroundColor: clr.icon,
    position: 'absolute',
    bottom: responsive.uniform(2),
    left: responsive.uniform(6),
  },

  logoutIcon: {
    width: responsive.uniform(20),
    height: responsive.uniform(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutArrow: {
    width: responsive.uniform(8),
    height: responsive.uniform(8),
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: clr.icon,
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
    left: responsive.uniform(2),
  },
  logoutDoor: {
    width: responsive.uniform(8),
    height: responsive.uniform(12),
    borderWidth: 1.5,
    borderColor: clr.icon,
    borderLeftWidth: 0,
    position: 'absolute',
    right: responsive.uniform(2),
  },
});

export default ProfileScreen;
