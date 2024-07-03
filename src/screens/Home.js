import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Marker} from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import axios from 'axios';

const Home = ({navigation: {navigate}, mapData, setMapData}) => {
  let n = 0;
  const [wannaPin, setWannaPin] = useState(false);
  const [wannaData, setWannaData] = useState(false);
  const [data, setData] = useState(null);
  const [coordinateData, setCoordinateData] = useState([]);

  const findCoordinate = async address => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address,
        )}&format=json`,
      );
      console.log('response.data: ' + response.data);
      return [
        parseFloat(response.data[0].lat),
        parseFloat(response.data[0].lon),
      ];
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coordinates = await Promise.all(
        mapData.map(async data => {
          const [lat, lon] = await findCoordinate(data.addr);
          return [lat, lon];
        }),
      );
      setCoordinateData(coordinates);
      setAllCoordinatesFetched(true);
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    console.log('coordinateData: ', coordinateData);
  }, [coordinateData]);

  const handleMarkerPress = index => {
    navigate('Search', {imageSrc: images[index], imgIndex: index, n: n++});
  };

  const locations = [
    {id: 1, latitude: null, longitude: null},
    {id: 2, latitude: null, longitude: null},
    {id: 3, latitude: null, longitude: null},
    {id: 4, latitude: null, longitude: null},
    {id: 5, latitude: null, longitude: null},
    {id: 6, latitude: null, longitude: null},
    {id: 7, latitude: null, longitude: null},
    {id: 8, latitude: null, longitude: null},
    {id: 9, latitude: null, longitude: null},
    {id: 10, latitude: null, longitude: null},
    {id: 11, latitude: null, longitude: null},
    {id: 12, latitude: null, longitude: null},
    {id: 13, latitude: null, longitude: null},
    {id: 14, latitude: null, longitude: null},
    {id: 15, latitude: null, longitude: null},
    {id: 16, latitude: null, longitude: null},
    {id: 17, latitude: null, longitude: null},
    {id: 18, latitude: null, longitude: null},
    {id: 19, latitude: null, longitude: null},
    {id: 20, latitude: null, longitude: null},
  ];
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
  const [location, setLocation] = useState(locations);
  const [gps, setGps] = useState({touchLongitude: 0, touchLatitude: 0});
  const [allCoordinatesFetched, setAllCoordinatesFetched] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          height: '100%',
          position: 'relative',
        }}>
        <MapView
          style={styles.map}
          showsMyLocationButton={true}
          onMapReady={() => {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: 36.37171,
            longitude: 127.362,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={e => {
            if (wannaData) {
              fetch(
                'https://nominatim.openstreetmap.org/reverse?format=json&lat=' +
                  e.nativeEvent.coordinate.latitude +
                  '&lon=' +
                  e.nativeEvent.coordinate.longitude,
              )
                .then(response => response.json())
                .then(data => {
                  setData(data);
                })
                .catch(error => alert(error));
            } else if (!wannaPin) {
              setWannaPin(prev => !prev);
              let copiedGps = {...gps};
              copiedGps.touchLatitude = e.nativeEvent.coordinate.latitude;
              copiedGps.touchLongitude = e.nativeEvent.coordinate.longitude;
              setGps(copiedGps);
            }
          }}>
          {location.map((loc, indx) => {
            if (loc.latitude) {
              return (
                <Marker
                  key={indx}
                  coordinate={{
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                  }}
                  onPress={() => handleMarkerPress(indx)}>
                  <View style={{alignItems: 'center'}}>
                    <Entypo name="pin" style={{fontSize: 22, color: 'red'}} />
                    <View>
                      <Image
                        source={images[indx]}
                        style={{width: 70, height: 60}}
                      />
                    </View>
                  </View>
                </Marker>
              );
            }
          })}
          {allCoordinatesFetched &&
            coordinateData.map((data, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: data[0],
                  longitude: data[1],
                }}>
                <FontAwesome6
                  name="phone-volume"
                  style={{fontSize: 25, color: 'black'}}
                />
              </Marker>
            ))}
        </MapView>
        <TouchableOpacity
          pointerEvents="box-none"
          onPress={() => {
            setWannaData(prev => !prev);
            wannaData && setData(null);
          }}
          style={{position: 'absolute', top: 100, right: 15}}>
          <FontAwesome5
            name={wannaData ? 'search-location' : 'search'}
            style={{
              fontSize: 30,
              color: 'black',
            }}
          />
        </TouchableOpacity>
        {wannaData && data ? (
          <View
            style={{
              backgroundColor: '#FEF4ED',
              width: '90%',
              height: 250,
              position: 'absolute',
              bottom: 10,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-around',
                height: '80%',
                paddingHorizontal: 20,
                width: '98%',
              }}>
              <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                <MaterialIcons
                  name="place"
                  style={{
                    fontSize: 22,
                    color: 'black',
                    paddingRight: 3,
                    paddingTop: 4,
                  }}
                />
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {data.name ? data.name : '결과값 없음'}
                </Text>
              </View>
              <View>
                <View style={{paddingHorizontal: 10}}>
                  <Text style={{color: '#262F34', fontSize: 12}}>
                    장소 구분
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'black', fontWeight: '600'}}>
                    {data.type}
                  </Text>
                </View>
              </View>
              <View>
                <View style={{paddingHorizontal: 10}}>
                  <Text style={{color: '#262F34', fontSize: 12}}>주소</Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'black', fontWeight: '600'}}>
                    {data.display_name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : null}
        {wannaPin ? (
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              backgroundColor: '#FEF4ED',
              width: '95%',
              height: 250,
              borderRadius: 25,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}>
                <MaterialCommunityIcons
                  name="image-move"
                  style={{fontSize: 20, color: 'black'}}
                />
                <Text style={{color: 'black', fontWeight: '700', fontSize: 13}}>
                  이미지 선택
                </Text>
              </View>
              <TouchableOpacity onPress={() => setWannaPin(false)}>
                <FontAwesome6
                  name="xmark"
                  style={{
                    color: 'black',
                    fontSize: 22,
                    marginTop: 10,
                    marginLeft: '75%',
                  }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={{
                alignItems: 'center',
              }}>
              {images.map((img, indx) => (
                <TouchableOpacity
                  key={indx}
                  style={{width: 180}}
                  onPress={() => {
                    setWannaPin(false);
                    let copiedItems = [...location];
                    copiedItems[indx].latitude = gps.touchLatitude;
                    copiedItems[indx].longitude = gps.touchLongitude;
                    setLocation(copiedItems);
                  }}>
                  <Image
                    key={indx}
                    source={img}
                    style={{width: 170, height: 120, marginHorizontal: 20}}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
