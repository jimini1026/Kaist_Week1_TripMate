import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import MapView, {Marker} from 'react-native-maps';

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          height: Dimensions.get('window').height * 0.7,
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
          }}>
          <Marker
            title="testing..."
            description="plz...."
            coordinate={{latitude: 45.65, longitude: -78.9}}
          />
        </MapView>
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
