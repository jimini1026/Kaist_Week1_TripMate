import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Marker} from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import post1 from '../../assets/images/post1.jpeg';
import post2 from '../../assets/images/post2.jpeg';
import post3 from '../../assets/images/post3.jpeg';
import post4 from '../../assets/images/post4.jpeg';
import post5 from '../../assets/images/post5.jpeg';
import post6 from '../../assets/images/post6.jpeg';
import post7 from '../../assets/images/post7.jpeg';
import post8 from '../../assets/images/post8.jpeg';
import post9 from '../../assets/images/post9.jpeg';

const Home = ({navigation: {navigate}}) => {
  let n = 0;
  const [wannaPin, setWannaPin] = useState(false);

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
  ];
  const [location, setLocation] = useState(locations);
  const [gps, setGps] = useState({touchLongitude: 0, touchLatitude: 0});

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          height: '100%',
        }}>
        <MapView
          style={styles.map}
          showsMyLocationButton={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 45.65,
            longitude: -78.9,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={e => {
            if (!wannaPin) {
              setWannaPin(prev => !prev);
              let copiedGps = {...gps};
              copiedGps.touchLatitude = e.nativeEvent.coordinate.latitude;
              copiedGps.touchLongitude = e.nativeEvent.coordinate.longitude;
              setGps(copiedGps);
            }
            // alert(e.nativeEvent.coordinate.latitude);
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
        </MapView>
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
