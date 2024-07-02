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

const mockData = [
  {
    id: 1,
    name: '아주대 병원',
    phoneNumber: '010-1234-5678',
    emailaddr: '2004imjimin@pusan.ac.kr',
    addr: '아주대병원',
  },
  {
    id: 1,
    name: '임지민',
    phoneNumber: '010-1234-5678',
    emailaddr: '2004imjimin@pusan.ac.kr',
    addr: '지스트',
  },
  {
    id: 1,
    name: '임지민',
    phoneNumber: '010-1234-5678',
    emailaddr: '2004imjimin@pusan.ac.kr',
    addr: '부산백병원',
  },
];

const Home = ({navigation: {navigate}}) => {
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
        mockData.map(async data => {
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
              backgroundColor: 'pink',
              width: '100%',
              height: 200,
              position: 'absolute',
              bottom: 0,
            }}>
            <Text style={{color: 'black'}}>
              {data.name ? '장소 이름 : ' + data.name : null}
            </Text>
            <Text style={{color: 'black'}}>장소 종류 : {data.type}</Text>
            <Text style={{color: 'black'}}>주소 : {data.display_name}</Text>
          </View>
        ) : null}
        {wannaPin ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#EAEAEA',
              width: '100%',
              height: 200,
            }}>
            <TouchableOpacity onPress={() => setWannaPin(false)}>
              <MaterialIcons
                name="cancel"
                style={{
                  color: 'black',
                  fontSize: 22,
                  marginTop: 10,
                  marginLeft: '90%',
                }}
              />
            </TouchableOpacity>
            <ScrollView
              horizontal
              contentContainerStyle={{
                alignItems: 'center',
              }}>
              {images.map((img, indx) => (
                <TouchableOpacity
                  key={indx}
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
