import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PhoneNumber from '../components/PhoneNumber';
import profileData from '../../assets/ProfileData';
import EditProfile from '../components/EditProfile';

const Profile = () => {
  const [press, setPress] = useState(false);
  const pressPress = () => { setPress(true) };

  const [profiles, setProfiles] = useState(profileData);

  const addProfile = (profile) => {
    setProfiles([...profiles, { ...profile, id: (profiles.length + 1).toString() }]);
    setPress(false); // 새로운 profile 저장 후 editprofile창 닫기 
  }

  const renderProfile = ({ item }) => (
    <PhoneNumber
      iconName="person-circle-outline"
      name={item.name}
      phoneNumber={item.phoneNumber}
    />
  )

  const listHeaderComponent = () => (
    <View style={styles.sectionContainer}>
      <View style = {{width: '100%', alignItems: 'center'}}>
        <Text style = {{paddingRight: '45%', color: 'gray'}}>추가 연락처</Text>
        <View
          style={{
            width: 300,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  )


  const listFooterComponent = () => (
    <View style={{ width: '100%', alignItems: 'center', paddingTop: 10 }}>
      <Text style={{ paddingRight: '45%', color: 'gray' }}>지도 연락처</Text>
      <View
        style={{
          width: 300,
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginVertical: 10,
        }}
      />
      <PhoneNumber
        iconName="map-marker"
        name="병원"
        phoneNumber="010-1234-5678"
        iconKind="map-marker"
      />
      <PhoneNumber
        iconName="map-marker"
        name="편의점"
        phoneNumber="010-1234-5678"
         iconKind="map-marker"
      />
    </View>
  )
          
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
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
      <View style={{ alignItems: 'center', marginBottom: 10, width: '100%' }}>
        <Text style={{ paddingRight: '45%' }}>나의 연락처</Text>
        <PhoneNumber
          iconName="person-circle"
          name="오세연"
          phoneNumber="010-1234-5678"
        />
      </View>
      <FlatList
        data={profiles}
        renderItem={renderProfile}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        contentContainerStyle={{
          backgroundColor: '#EAEAEA',
          borderRadius: 20,
          alignItems: 'center'
        }}
      />
      {press ? (
        <View style={styles.overlay}>
          <EditProfile setPress={setPress} addProfile={addProfile} />
        </View>
      ) : null}
    </View>
  )
}

const styles = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zLndex: 1,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  }
}

export default Profile;
