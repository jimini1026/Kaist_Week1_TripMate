import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Activity from './src/screens/Activity';
import Profile from './src/screens/Profile';
import ProfileInfo from './src/components/ProfileInfo';
import {NavigationContainer} from '@react-navigation/native';
import Status from './src/screens/Status';
import FriendProfile from './src/screens/FriendProfile';
import EditProfile from './src/components/EditProfile';
import Ionic from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [mapData, setMapData] = useState([
    {
      id: 1,
      name: '아주대병원',
      phoneNumber: '1688-6114',
      emailaddr: '',
      addr: '아주대병원',
    },
    {
      id: 2,
      name: '백병원',
      phoneNumber: '1688-2213',
      emailaddr: '',
      addr: '백병원',
    },
  ]);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            color = 'black';
            if (route.name === 'Home') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'image-sharp' : 'image-outline';
              // } else if (route.name === 'Activity') {
              //   iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home">
          {props => (
            <Home {...props} mapData={mapData} setMapData={setMapData} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Search" component={Search} />
        {/* <Tab.Screen name="Activity" component={Activity} /> */}
        <Tab.Screen name="Profile">
          {props => (
            <Profile {...props} mapData={mapData} setMapData={setMapData} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
        {/* <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
