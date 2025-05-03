import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {clr, FONTS} from '../Constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const IconLibrary = {
  AntDesign,
  Entypo,
  FontAwesome5,
  EvilIcons,
  FontAwesome,
  Feather,
};

const InputC = ({
  iconFamily,
  iconName,
  iconColor = clr.Text2,
  backgroundColor = 'white',
  width = '90%',
  height = 52,
  radius = 10,
  borderColor = '#D7D7D7',
  bdwidth = 1.5,
  placeholder = 'Enter Name',
  placeholderTextColor = clr.Text2,
  value,
  onChangeText,
  isPassword = false,
  size = 25,
  marginTop,
  keyboardType,
  marginVertical,
  fontSize = 12,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);
  const Icon = iconFamily ? IconLibrary[iconFamily] : null;

  return (
    <View
      style={{
        backgroundColor,
        width,
        height,
        borderRadius: radius,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: bdwidth,
        borderColor,
        paddingHorizontal: 10,
        marginTop: marginTop,
        marginVertical: marginVertical,
      }}>
      {Icon && iconName && (
        <Icon name={iconName} size={size} color={iconColor} />
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[FONTS.h4, styles.input, {fontSize: fontSize}]}
        keyboardType={keyboardType}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <FontAwesome5
            name={secureTextEntry ? 'eye-slash' : 'eye'}
            size={20}
            color={clr.Text2}
          />
        </TouchableOpacity>
      )}
      {/* {Icon && iconName && (
        <Icon name={iconName} size={size} color={iconColor} />
      )} */}
    </View>
  );
};

export default InputC;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    fontFamily: 'Roboto-Regular',
    backgroundColor: 'white',
  },
});
