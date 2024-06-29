import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

const ExpandImage = ({image, setImage}) => {
  const [isLike, setIsLike] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      }}>
      <StatusBar backgroundColor="#525252" barStyle="dark-content" />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          width: '90%',
          top: windowHeight / 6,
          left: windowWidth / 18,
          height: 465,
          borderRadius: 15,
          zIndex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <TouchableOpacity onPress={() => setIsLike(true)}>
            <Ionic
              name={isLike ? 'heart' : 'heart-outline'}
              style={{fontSize: 26, color: 'black'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImage(null)}>
            <MaterialIcons
              name="cancel"
              style={{fontSize: 25, color: 'black'}}
            />
          </TouchableOpacity>
        </View>
        <Image source={image} style={{width: '100%', height: '80%'}} />
        <View
          style={{
            justifyContent: 'space-around',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
          }}>
          <Ionic
            name="person-circle-outline"
            style={{fontSize: 26, color: 'black'}}
          />
        </View>
      </View>
    </View>
  );
};

export default ExpandImage;
