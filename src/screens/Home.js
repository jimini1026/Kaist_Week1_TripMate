import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import MapView from 'react-native-maps';

const Home = () => {
  return (
    <SafeAreaView>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 25, fontWeight: '500'}}>Instagram</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="plus-square-o"
            style={{fontSize: 24, paddingHorizontal: 15}}
          />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView> */}
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
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <Text>제발요</Text>
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
