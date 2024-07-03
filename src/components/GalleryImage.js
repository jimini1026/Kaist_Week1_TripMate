import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
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
        width: 150,
        height: 150,
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Image source={img} style={{width: '100%', height: '100%'}} />
      <View style={{ position: 'absolute', flexDirection: 'row',
        paddingLeft: '64%', paddingTop: '88%'}}>
        <Ionic
          name={isLike ? 'heart' : 'heart-outline'}
          style={{
            fontSize: 20,
            paddingRight: 7,
            color: isLike ? '#D6510B' : '#FEF4ED',
          }}
        />
        {note ? (
          <Ionic
            name="pencil-outline"
            style={{fontSize: 18, color: '#D6510B'}}
          />
        ) : (
          <Ionic name="pencil" style={{fontSize: 18, color: '#FEF4ED'}} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GalleryImage;
