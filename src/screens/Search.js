import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import GalleryImage from '../components/GalleryImage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ExpandImage from '../components/ExpandImage';

const Search = () => {
  const [image, setImage] = useState(null);

  const RowImage = ({bgColor1, bgColor2}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 15,
        }}>
        <GalleryImage bgColor={bgColor1} setImage={setImage} />
        <GalleryImage bgColor={bgColor2} setImage={setImage} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <View style={{paddingTop: 60, paddingBottom: 60}}>
          <RowImage bgColor1="#FF607F" bgColor2="#00D7FF" />
          <RowImage bgColor1="#40A940" bgColor2="#FF5AD9" />
          <RowImage bgColor1="#FFA500" bgColor2="#98EBDC" />
          <RowImage bgColor1="#FFC5D0" bgColor2="#FFFA82" />
        </View>
      </ScrollView>
      {image ? <ExpandImage image={image} setImage={setImage} /> : null}
      {/* <ScrollView>
        <SearchInput />
        <SearchContent getData={getData} />
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            top: Platform.OS === 'ios' ? statusBarHeight : 0,
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
              <Image
                source={image}
                style={{width: 30, height: 30, borderRadius: 100}}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 13, fontWeight: '600'}}>
                  친구 아이디
                </Text>
              </View>
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
              <Ionic name="heart-outline" style={{fontSize: 26}} />
              <Ionic name="person-circle-outline" style={{fontSize: 26}} />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null} */}
    </SafeAreaView>
  );
};

export default Search;
