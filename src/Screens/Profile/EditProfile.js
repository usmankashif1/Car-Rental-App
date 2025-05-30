import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import responsive from '../../Components/Responsive';
import {clr, FONTS} from '../../Constants/theme';
import HeaderC from '../../Components/HeaderC';
import P1 from '../../Assets/Images/SVG/p1.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputC from '../../Components/InputC';
import ButtonC from '../../Components/ButtonC';

const EditProfile = () => {
  return (
    <View style={styles.Container}>
      <View style={{   padding:responsive.padding(15),}}>
        <HeaderC title={'Profile'} />
      </View>
      <View style={styles.headerContainer} />
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <P1 />
          <TouchableOpacity style={styles.editIconContainer}>
            <View style={styles.editPencil}>
              <Ionicons name="camera-outline" size={responsive.width(14)} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[FONTS.h2,{fontSize:responsive.fontSize(16)}]}>Benjamin xJack</Text>
       
      </View>
 
      <View style={{alignItems:'center',gap:responsive.margin(15),   padding:responsive.padding(15),}}>
       <InputC placeholder='First Name' width='100%'/>
        <InputC placeholder='Last Name' width='100%'/>
        <InputC placeholder='Email' width='100%'/>
        <InputC placeholder='Phone Number' width='100%'/>
        <ButtonC title={'Save Changes'} color={'white'} fontSize={responsive.fontSize(18)} width='100%'/>
        </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  profileImageContainer: {
    position: 'relative',
    marginBottom: responsive.margin(10),
    padding:responsive.padding(5),

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
    paddingTop: responsive.padding(10),
    paddingBottom: responsive.padding(30),
  },
  Container: {
    flex: 1,
    backgroundColor: clr.primary,

  },
  headerContainer:{
    borderBottomWidth:1,
    borderColor:clr.Text3,
    
  }
});
