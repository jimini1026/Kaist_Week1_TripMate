import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const GalleryImage = ({
  bgColor,
  setImage,
  imgSource,
  imgIndx,
  setImgIndx,
  isLike,
  note,
}) => {
  const img = imgSource;
  return (
    <TouchableOpacity
      onPress={() => {
        setImage(img);
        setImgIndx(imgIndx);
      }}
      style={{
        width: '40%',
        height: 200,
        backgroundColor: bgColor,
        alignItems: 'center',
        paddingTop: 10,
        marginVertical: 15,
      }}>
      <Image source={img} style={{width: '85%', height: '85%'}} />
      <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: '40%'}}>
        <Entypo
          name={isLike ? 'heart' : 'heart-outlined'}
          style={{
            fontSize: 20,
            paddingRight: 10,
            color: isLike ? 'red' : 'black',
          }}
        />
        {note ? (
          <MaterialCommunityIcons
            name="pencil"
            style={{fontSize: 20, color: 'black'}}
          />
        ) : (
          <Octicons name="pencil" style={{fontSize: 20, color: 'black'}} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GalleryImage;
