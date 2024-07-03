import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

const ExpandImage = ({
  image,
  setImage,
  isLikeDatas,
  setIsLikeDatas,
  indx,
  noteDatas,
  setNoteDatas,
}) => {
  const [isLike, setIslike] = useState(isLikeDatas[indx].isLike);
  const [note, setNote] = useState(noteDatas[indx].note);
  const updateIsLikeDatas = index => {
    setIslike(!isLike);
    let copiedItems = [...isLikeDatas];
    copiedItems[index].isLike = !copiedItems[index].isLike;
    setIsLikeDatas(copiedItems);
  };
  const updateNoteDatas = index => {
    let copiedItems = [...noteDatas];
    copiedItems[index].note = note;
    setNoteDatas(copiedItems);
  };

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
            <TouchableOpacity onPress={() => updateIsLikeDatas(indx)}>
              <Ionic
                name={isLike ? 'heart' : 'heart-outline'}
                style={{
                  fontSize: 26,
                  color: isLike ? '#D6510B' : '#262F34',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImage(null);
                updateNoteDatas(indx);
              }}
              style={{marginLeft: 'auto'}}>
              <MaterialIcons
                name="cancel"
                style={{fontSize: 25, color: '#262F34'}}
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
              value={note}
              onChange={e => setNote(e.nativeEvent.text)}
              placeholderTextColor="gray"
              style={{
                color: 'black',
                backgroundColor: '#FEF4ED',
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
