import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PhoneNumber from '../components/PhoneNumber';
import { useNavigation } from '@react-navigation/native';
import EditProfile from '../components/EditProfile';

const Profile = () => {
  const [press, setPress] = useState(false);
  const pressPress = () => {setPress(true)};
  return (
    <View style={{backgroundColor: '#F5F5F5'}}>
      <TouchableOpacity
      onPress={pressPress}
        style={{
          flexDirection: 'row',
          paddingTop: '10%',
        }}>
        <Text
          style={{
            paddingLeft: '60%',
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          연락처 추가
        </Text>
        <AntDesign
          name="pluscircle"
          style={{
            color: 'black',
            fontSize: 18,
            paddingTop: 3,
            paddingLeft: 6,
          }}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text style={{paddingRight: '45%'}}>나의 연락처</Text>
        <PhoneNumber
          iconName="person-circle"
          name="오세연"
          phoneNumber="010-1234-5678"
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: '#EAEAEA',
          borderRadius: 20,
          paddingTop: 20,
          paddingBottom: 10,
          height: '73%',
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={{paddingRight: '50%', color: 'gray'}}>
              추가 연락처
            </Text>
            <View
              style={{
                width: '87%',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                marginVertical: 10,
              }}
            />
          </View>
          <PhoneNumber
            iconName="person-circle-outline"
            name="오세연"
            phoneNumber="010-1234-5678"
          />
          <PhoneNumber
            iconName="person-circle-outline"
            name="오세연"
            phoneNumber="010-1234-5678"
          />
          <PhoneNumber
            iconName="person-circle-outline"
            name="오세연"
            phoneNumber="010-1234-5678"
          />
          <View style={{width: '100%', alignItems: 'center', paddingTop: 10}}>
            <Text style={{paddingRight: '50%', color: 'gray'}}>
              지도 연락처
            </Text>
            <View
              style={{
                width: '87%',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                marginVertical: 10,
              }}
            />
          </View>
          <PhoneNumber
            iconName="map-marker"
            name="오세연"
            phoneNumber="010-1234-5678"
            iconKind="map-marker"
          />
          <PhoneNumber
            iconName="map-marker"
            name="오세연"
            phoneNumber="010-1234-5678"
            iconKind="map-marker"
          />
        </View>
      </ScrollView>
      {press ? (
        <View style={styles.overlay}>
          <EditProfile setPress={setPress}/>
          </View>
          ) : null}
    </View>
  );
};

const styles ={
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zLndex: 1,
  }
}

export default Profile;
