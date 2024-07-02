import {
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import profileData from '../../assets/ProfileData';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileInfo = ({ pressInfo , setPressInfo, profile }) => {
    const { name, phoneNumber, emailaddr, addr } = profile;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    paddingBottom: 40,
                    paddingLeft: 10}}>
                    <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>
                        연락처 정보</Text>
                    <TouchableOpacity onPress={() => {
                        let copiedItem = [...pressInfo];
                        copiedItem[0] = false;
                        setPressInfo(...copiedItem);
                    }}>
                    <AntDesign
                        name="closecircle"
                        style={{color: 'black',fontSize: 18, paddingLeft: 160}}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <Text style={{color: "black", marginLeft: 5, fontWeight: 'bold'}}>이름</Text>
                    <View style={styles.container2}>
                        <Text style={{color: 'black', paddingTop: 8, paddingLeft: 13}}>{name}</Text>
                    </View>
                </View>
                <View style={styles.container1}>
                    <Text style={{color: "black", marginLeft: 5, fontWeight: 'bold'}}>전화번호</Text>
                    <View style={styles.container2}>
                        <Text style={{color: 'black', paddingTop: 8, paddingLeft: 13}}>{phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{color: "black", marginLeft: 5, fontWeight: 'bold'}}>메일 주소</Text>
                    <View style={styles.container4}>
                        <Text style={{color: 'black', paddingTop: 10, paddingLeft: 13}}>{emailaddr}</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{color: "black", marginLeft: 5, fontWeight: 'bold'}}>주소</Text>
                    <View style={styles.container4}>
                        <Text style={{color: 'black', paddingTop: 10, paddingLeft: 13}}>{addr}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        padding: 20,
        height: 600
    },
    container1: {
        backgroundColor: "#EAEAEA",
        width: '100%',
        paddingLeft: 10,
        paddingTop: 10,
        height: '15%',
        marginBottom: 10
    },
    container2: {
        backgroundColor: "white",
        width: '95%',
        height: '50%',
        borderRadius: 25,
        marginTop: 5
    },
    container3: {
        backgroundColor: "#EAEAEA",
        width: '100%',
        paddingLeft: 10,
        paddingTop: 10,
        height: '25%',
        marginBottom: 10
    },
    container4: {
        backgroundColor: "white",
        width: '95%',
        height: '70%',
        borderRadius: 30,
        marginTop: 5
    }
});

export default ProfileInfo;
