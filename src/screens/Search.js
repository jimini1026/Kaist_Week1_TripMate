import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import GalleryImage from '../components/GalleryImage';
import ExpandImage from '../components/ExpandImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import post1 from '../../assets/images/post1.jpeg';
import post2 from '../../assets/images/post2.jpeg';
import post3 from '../../assets/images/post3.jpeg';
import post4 from '../../assets/images/post4.jpeg';
import post5 from '../../assets/images/post5.jpeg';
import post6 from '../../assets/images/post6.jpeg';
import post7 from '../../assets/images/post7.jpeg';
import post8 from '../../assets/images/post8.jpeg';
import post9 from '../../assets/images/post9.jpeg';

const Search = () => {
  const images = [
    post1,
    post2,
    post3,
    post4,
    post5,
    post6,
    post7,
    post8,
    post9,
  ];

  const [image, setImage] = useState(null);

  const RowImage = ({bgColor1, bgColor2, imgSource1, imgSource2}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 15,
        }}>
        <GalleryImage
          bgColor={bgColor1}
          setImage={setImage}
          imgSource={imgSource1}
        />
        {imgSource2 ? (
          <GalleryImage
            bgColor={bgColor2}
            setImage={setImage}
            imgSource={imgSource2}
          />
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
        position: 'relative',
      }}>
      {image ? null : (
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 20,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '60%',
            }}>
            <TouchableOpacity>
              <FontAwesome5
                name="images"
                style={{fontSize: 30, color: 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-multiple"
                style={{fontSize: 30, color: 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="note-multiple"
                style={{fontSize: 30, color: 'black'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView>
        <View style={{paddingBottom: 60}}>
          <RowImage
            bgColor1="#FF607F"
            bgColor2="#00D7FF"
            imgSource1={images[0]}
            imgSource2={images[1]}
          />
          <RowImage
            bgColor1="#40A940"
            bgColor2="#FF5AD9"
            imgSource1={images[2]}
            imgSource2={images[3]}
          />
          <RowImage
            bgColor1="#FFA500"
            bgColor2="#98EBDC"
            imgSource1={images[4]}
            imgSource2={images[5]}
          />
          <RowImage
            bgColor1="#FFC5D0"
            bgColor2="#FFFA82"
            imgSource1={images[6]}
          />
        </View>
      </ScrollView>
      {image ? <ExpandImage image={image} setImage={setImage} /> : null}
    </SafeAreaView>
  );
};

export default Search;
