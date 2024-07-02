import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import post10 from '../../assets/images/post10.jpeg';
import post11 from '../../assets/images/post11.jpeg';
import post12 from '../../assets/images/post12.jpeg';
import post13 from '../../assets/images/post13.jpeg';
import post14 from '../../assets/images/post14.jpeg';
import post15 from '../../assets/images/post15.jpeg';
import post16 from '../../assets/images/post16.jpeg';
import post17 from '../../assets/images/post17.jpeg';
import post18 from '../../assets/images/post18.jpeg';
import post19 from '../../assets/images/post19.jpeg';
import post20 from '../../assets/images/post20.jpeg';

const Search = ({route}) => {
  const imageSource = route?.params?.imageSrc;
  const imgIndex = route?.params?.imgIndex;

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
    post10,
    post11,
    post12,
    post13,
    post14,
    post15,
    post16,
    post17,
    post18,
    post19,
    post20,
  ];
  const isLikeData = [
    {id: 1, isLike: false},
    {id: 2, isLike: false},
    {id: 3, isLike: false},
    {id: 4, isLike: false},
    {id: 5, isLike: false},
    {id: 6, isLike: false},
    {id: 7, isLike: false},
    {id: 8, isLike: false},
    {id: 9, isLike: false},
    {id: 10, isLike: false},
    {id: 11, isLike: false},
    {id: 12, isLike: false},
    {id: 13, isLike: false},
    {id: 14, isLike: false},
    {id: 15, isLike: false},
    {id: 16, isLike: false},
    {id: 17, isLike: false},
    {id: 18, isLike: false},
    {id: 19, isLike: false},
    {id: 20, isLike: false},
  ];
  const noteData = [
    {id: 1, note: ''},
    {id: 2, note: ''},
    {id: 3, note: ''},
    {id: 4, note: ''},
    {id: 5, note: ''},
    {id: 6, note: ''},
    {id: 7, note: ''},
    {id: 8, note: ''},
    {id: 9, note: ''},
    {id: 10, note: ''},
    {id: 11, note: ''},
    {id: 12, note: ''},
    {id: 13, note: ''},
    {id: 14, note: ''},
    {id: 15, note: ''},
    {id: 16, note: ''},
    {id: 17, note: ''},
    {id: 18, note: ''},
    {id: 19, note: ''},
    {id: 20, note: ''},
  ];

  const [image, setImage] = useState(imageSource);
  const [imgIndx, setImgIndx] = useState(imgIndex);
  const [isLikeDatas, setIsLikeDatas] = useState(isLikeData);
  const [noteDatas, setNoteDatas] = useState(noteData);
  const [state, setState] = useState('all');

  useEffect(() => {
    setImage(imageSource);
    setImgIndx(imgIndex);
  }, [imageSource, imgIndex, route?.params?.n]);

  const FilteredImages = () => {
    switch (state) {
      case 'all':
        return images.map((img, indx) => (
          <GalleryImage
            key={indx}
            bgColor={'#FF607F'}
            setImage={setImage}
            imgSource={img}
            imgIndx={indx}
            setImgIndx={setImgIndx}
            isLike={isLikeDatas[indx].isLike}
            note={noteDatas[indx].note ? true : false}
          />
        ));
      case 'like':
        return isLikeDatas.map((isLikeData, indx) => {
          if (isLikeData.isLike) {
            return (
              <GalleryImage
                key={indx}
                bgColor={'#FF607F'}
                setImage={setImage}
                imgSource={images[indx]}
                imgIndx={indx}
                setImgIndx={setImgIndx}
                isLike={isLikeDatas[indx].isLike}
                note={noteDatas[indx].note ? true : false}
              />
            );
          }
        });
      case 'note':
        return noteDatas.map((noteData, indx) => {
          if (noteData.note) {
            return (
              <GalleryImage
                key={indx}
                bgColor={'#FF607F'}
                setImage={setImage}
                imgSource={images[indx]}
                imgIndx={indx}
                setImgIndx={setImgIndx}
                isLike={isLikeDatas[indx].isLike}
                note={noteDatas[indx].note ? true : false}
              />
            );
          }
        });
    }
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
            <TouchableOpacity onPress={() => setState('all')}>
              <FontAwesome5
                name="images"
                style={{fontSize: 30, color: 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState('like')}>
              <MaterialCommunityIcons
                name="heart-multiple"
                style={{fontSize: 30, color: 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState('note')}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 15,
              flexWrap: 'wrap',
            }}>
            <FilteredImages />
          </View>
        </View>
      </ScrollView>
      {image ? (
        <ExpandImage
          image={image}
          setImage={setImage}
          isLikeDatas={isLikeDatas}
          setIsLikeDatas={setIsLikeDatas}
          indx={imgIndx}
          noteDatas={noteDatas}
          setNoteDatas={setNoteDatas}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Search;
