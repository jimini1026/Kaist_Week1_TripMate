import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileInfo from './ProfileInfo';

const PhoneNumber = ({iconName, name, phoneNumber, pressInfo, setPressInfo, iconKind = 'Ionic'}) => {
  let iconIsIonic = false;
  if (iconKind === 'Ionic') {
    iconIsIonic = true;
  } else {
    iconIsIonic = false;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        setPressInfo([true, phoneNumber]);
      }}
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
        width: 330,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 7,
        paddingBottom: 7,
        marginBottom: 12,
      }}>
      {iconIsIonic ? (
        <Ionic
          name={iconName}
          style={{color: '#262F34', fontSize: 50, paddingRight: 10}}
        />
      ) : (
        <MaterialCommunityIcons
          name={iconName}
          style={{fontSize: 40, paddingRight: 10, color: '#D6510B'}}
        />
      )}
      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'gray'}}>{phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zLndex: 1,
  },
}

export default PhoneNumber;
