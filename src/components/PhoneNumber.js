import {View, Text} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PhoneNumber = ({iconName, name, phoneNumber, iconKind = 'Ionic'}) => {
  let iconIsIonic = false;
  if (iconKind === 'Ionic') {
    iconIsIonic = true;
  } else {
    iconIsIonic = false;
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
        width: '80%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 7,
        paddingBottom: 7,
        marginBottom: 12,
      }}>
      {iconIsIonic ? (
        <Ionic
          name={iconName}
          style={{color: 'gray', fontSize: 50, paddingRight: 10}}
        />
      ) : (
        <MaterialCommunityIcons
          name={iconName}
          style={{fontSize: 40, paddingRight: 10, color: 'gray'}}
        />
      )}
      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'gray'}}>{phoneNumber}</Text>
      </View>
    </View>
  );
};

export default PhoneNumber;
