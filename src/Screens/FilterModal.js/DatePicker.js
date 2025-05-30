import React, {useState} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FONTS } from '../../Constants/theme';
const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.getFullYear();
  return `${day},${month},${year}`;
};

const DatePicker = ({color}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={{}}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity onPress={showDatePicker}>
        {selectedDate && (
          <Text style={[FONTS.h4, {fontSize: 14,color:color}]}>{selectedDate}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
