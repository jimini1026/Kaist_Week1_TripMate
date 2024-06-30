import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GalleryImage = ({bgColor, setImage, imgSource}) => {
  const img = imgSource;
  return (
    <TouchableOpacity
      onPress={() => setImage(img)}
      style={{
        width: '40%',
        height: 200,
        backgroundColor: bgColor,
        alignItems: 'center',
        paddingTop: 10,
      }}>
      <Image source={img} style={{width: '85%', height: '85%'}} />
      <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: '40%'}}>
        <Entypo
          name="heart-outlined"
          style={{fontSize: 20, paddingRight: 10, color: 'black'}}
        />
        <MaterialCommunityIcons
          name="pencil"
          style={{fontSize: 20, color: 'black'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default GalleryImage;
