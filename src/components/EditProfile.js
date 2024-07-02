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

const EditProfile = ({ setPress, addProfile }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleAddProfile = () => {
    if (name && phoneNumber) {
      addProfile({ name, phoneNumber, iconName: 'person-circle-outline' });
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
          height: 400,
          borderRadius: 15,
          overflow: 'hidden',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 30,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}>
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black"
          }}
          >연락처 추가
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>이름</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="이름을 입력하세요"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>전화번호</Text>
          <TextInput
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="전화번호를 입력하세요"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={cancelButton.container} onPress={() => setPress(false)}>
            <Text style={cancelButton.text}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={okButton.container} onPress={handleAddProfile}>
            <Text style={okButton.text}>확인</Text>
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
    height: '25%',
    width: '85%',
    paddingTop: 5,
    marginBottom: 20,
    marginLeft: 25,
    paddingLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  textInput: {
    backgroundColor: "white",
    width: '90%',
    height: '45%',
    marginTop: 5,
    borderRadius: 20,
    //padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    marginTop: 10
  }
})

const cancelButton = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
    borderRadius: 15,
    width: '45%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: "black",
  }
})

const okButton = StyleSheet.create({
  container: {
    backgroundColor: "#3CA9E1",
    borderRadius: 15,
    width: '45%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    color: 'black'
  }
})

export default EditProfile;
