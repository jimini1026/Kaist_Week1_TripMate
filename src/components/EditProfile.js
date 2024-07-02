import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditProfile = ({ setPress, addProfile }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailaddr, setemailaddr] = useState('');
  const [addr, setaddr] = useState('');
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleAddProfile = () => {
    if (name && phoneNumber) {
      addProfile({ name, phoneNumber, emailaddr, addr });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      }}>
      <StatusBar backgroundColor="#525252" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: 'white',
          width: '80%',
          height: 600,
          borderRadius: 30,
          overflow: 'hidden',
        }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", paddingTop: 30}}>
          연락처 추가</Text>
          <TouchableOpacity onPress={() => setPress(false)}>
          <AntDesign
            name="closecircle"
            style={{color: 'black', fontSize: 18, paddingLeft: 160}}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>이름</Text>
          <TextInput
            style={{...styles.textInput, color:'black'}}
            value={name}
            placeholderTextColor='black'
            onChangeText={setName}
            placeholder="이름을 입력하세요"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>전화번호</Text>
          <TextInput
            style={{...styles.textInput, color: 'black'}}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholderTextColor='black'
            placeholder="전화번호를 입력하세요"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>메일주소</Text>
          <TextInput
            style={{...styles.textInput, color: 'black'}}
            value={emailaddr}
            onChangeText={setemailaddr}
            placeholderTextColor='black'
            placeholder="메일주소를 입력하세요"
          />
        </View>

        <View style={styles.container1}>
          <Text style={styles.text}>주소</Text>
          <TextInput
            style={{...styles.textInput1, color: 'black'}}
            value={addr}
            onChangeText={setaddr}
            placeholderTextColor='black'
            placeholder="주소를 입력하세요"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={button.container} onPress={handleAddProfile}>
            <Text style={button.text}>개인연락처</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button.container}>
            <Text style={button.text}>지도연락처</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    marginHorizontal: 15,
    height: '15%',
    width: '90%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 5
  },
  textInput: {
    backgroundColor: "white",
    width: '95%',
    height: '45%',
    marginTop: 5,
    borderRadius: 20,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    height: '15%',
    justifyContent: 'space-between',
    marginTop: 10
  },
  container1: {
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    marginHorizontal: 15,
    height: '20%',
    width: '90%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  textInput1: {
    backgroundColor: "white",
    width: '95%',
    height: '60%',
    marginTop: 5,
    borderRadius: 35,
    padding: 10,
  },
})

const button = StyleSheet.create({
  container: {
    backgroundColor: "#3CA9E1",
    borderRadius: 20,
    width: '45%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  }
})

export default EditProfile;
