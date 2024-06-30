import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

const ExpandImage = ({image, setImage}) => {
  const [isLike, setIsLike] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      }}>
      <StatusBar backgroundColor="#525252" barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 600,
            borderRadius: 15,
            overflow: 'hidden',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}>
            <TouchableOpacity onPress={() => setIsLike(prev => !prev)}>
              <Ionic
                name={isLike ? 'heart' : 'heart-outline'}
                style={{fontSize: 26, color: isLike ? 'red' : 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={{marginLeft: 'auto'}}>
              <MaterialIcons
                name="cancel"
                style={{fontSize: 25, color: 'black'}}
              />
            </TouchableOpacity>
          </View>
          <Image source={image} style={{width: '100%', height: '60%'}} />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              padding: 10,
              flex: 1,
            }}>
            <TextInput
              placeholder="메모장..."
              placeholderTextColor="gray"
              style={{
                color: 'black',
                backgroundColor: '#FAF3B6',
                paddingVertical: 15,
                paddingHorizontal: 20,
                width: '100%',
                height: '100%',
                textAlignVertical: 'top',
              }}
              multiline
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpandImage;
