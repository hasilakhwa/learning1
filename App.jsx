// Basic Concepts of react native
import React from 'react';
// import { View, Text, Button } from 'react-native';
// import First from "./src/component/first";
import { View } from 'react-native';
// import JSX from './src/component/JSX';
// import OnPress from './src/component/OnPress';
// import UseStateHook from './src/component/UseStateHook';
// import Styling from './src/component/Styling';
// import FlatListScreen from './src/component/FlatListScreen';
// import InputText from './src/component/InputText';
// import Props from './src/component/Props';
// import SectionListScreen from './src/component/SectionListScreen'
// import LoginForm from './src/component/LoginForm'
// import ContactListScreen from './src/screens/Contact/ContactListScreen'
// import Grid from './src/component/Grid'
// import ClassComponent from './src/component/ClassComponent'
// import UseEffectHook from './src/component/UseEffectHook'
// import UseEffectHookUnmountedPhase from './src/component/UseEffectHookUnmountedPhase'
// import HideShowToggle from './src/component/HideShowToggle'
// import StyleWithButton from './src/component/StyleWithButton'
// import Loader from './src/component/Loader'
// import PressableComponent from './src/component/PressableComponent'
// import StatusBarExample from './src/component/StatusBarExample'
// import UseRefHook from './src/component/UseRefHook'
// import ModalDialogBox from './src/component/ModalDialogBox'
// import AlertExample from './src/component/AlertExample'
// import GET_API from './src/component/GET_API'
// import POST_API from './src/component/POST_API'
// import PUT_API from './src/component/PUT_API'
// import PATCH_API from './src/component/PATCH_API'
// import DELETE_API from './src/component/DELETE_API'
// import GET_API_LIST from './src/component/GET_API_LIST'
// import PlatformExapmle from './src/component/PlatformExapmle'
// import Search from './src/component/Search'
// import AsyncStorageExample from './src/component/AsyncStorageExample'
import ImageComponentExample from './src/component/ImageComponentExample'
const App = () => {
  return (
    <View
    style={{flex:1}}
    // style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
      >
      {/* <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
        Hello Hasnain 🚀
        </Text>
        <Text style={{ fontSize: 40, color: 'white', backgroundColor: 'pink' }}>I am Mobile developer</Text>
        <Button title='press Here' />
        */}
      {/* <First />  */}
      {/* <JSX /> */}
      {/* <OnPress /> */}
      {/* <UseStateHook /> */}
      {/* <InputText  /> */}
      {/* <Styling /> */}
      {/* <FlatListScreen /> */}
      {/* <InputText /> */}
      {/* <Props /> */}
      {/* <SectionListScreen /> */}
      {/* <LoginForm /> */}
      {/* <ContactListScreen /> */}
      {/* <Grid /> */}
      {/* <ClassComponent /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHookUnmountedPhase /> */}
      {/* <HideShowToggle /> */}
      {/* <StyleWithButton /> */}
      {/* <Loader /> */}
      {/* <PressableComponent /> */}
      {/* <StatusBarExample /> */}
      {/* <UseRefHook /> */}
      {/* <ModalDialogBox /> */}
      {/* <AlertExample /> */}
      {/* <GET_API /> */}
      {/* <POST_API /> */}
      {/* <PUT_API/> */}
      {/* <PATCH_API/> */}
      {/* <DELETE_API /> */}
      {/* <GET_API_LIST /> */}
      {/* <PlatformExapmle /> */}
      {/* <Search/> */}
      {/* <AsyncStorageExample /> */}
      <ImageComponentExample />
    </View>
  );
};

export default App;

// ########## <starting navigation now> ##########

// *************** <STACK NAVIGATION> ***************

// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/Navigation-screens/Stack-Navigation/Home';
// import About from './src/Navigation-screens/Stack-Navigation/About';
// import Login from './src/Navigation-screens/Stack-Navigation/Login';
// import MyHeader from './src/Navigation-screens/Stack-Navigation/MyHeader';
// import Example from './src/Navigation-screens/Stack-Navigation/Example';
// const Stack = createNativeStackNavigator();
// // const sayHello = () => {
// //   Alert.alert('Hello', 'This is builtin component in navigation')
// // }

// // const headerTitle = () => <Button title="One" color="red" onPress={sayHello} />
// // const headerRight = () => (
// //   <Button title="Two" color="green" onPress={sayHello} />
// // );

// const myExample = ()=> <Example />
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: styles.header,
//           headerTintColor: '#fff',
//           headerTitleStyle: styles.headerTitle,
//           contentStyle: styles.screen,
//         }}
//       >
//         <Stack.Screen
//           name="Header"
//           component={MyHeader}
//           options={{
//             title: '',
//             // headerLeft: () => <Button title="One" color="red" />,
//             // headerRight: () => <Button title="Two" color="green" />,
//             // headerLeft:headerTitle,
//             // headerRight:headerRight
//             headerTitle: myExample
//           }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           // options={
//           //   {
//           //     title:'Login Form Page',
//           //     headerTintColor:'red',
//           //     headerTitleStyle:{
//           //       // color:'blue',
//           //       // fontSize:44
//           //     },
//           //     headerStyle:{
//           //       backgroundColor:'orange'
//           //     }
//           //   }
//           // }
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="About" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#6200EE',
//   },
//   headerTitle: {
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   screen: {
//     backgroundColor: 'lightgreen',
//   },
// });

// export default App;

// **************** <DRAWER NAVIGATION> ***************
// import 'react-native-gesture-handler'
// import { View, Text, StyleSheet } from 'react-native';
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from './src/Navigation-screens/Drawer-Navigation/Home';
// import Profile from './src/Navigation-screens/Drawer-Navigation/Profile';
// import Settings from './src/Navigation-screens/Drawer-Navigation/Settings';

// const Drawer = createDrawerNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: '#e6e6e6',
//             width: 240,
//           },
//           drawerLabelStyle: {
//             fontSize: 18,
//             color: '#333',
//           },
//           headerStyle: {
//             backgroundColor: '#6200EE',
//           },
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center',
//         }}
//       >
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Profile" component={Profile} />
//         <Drawer.Screen name="Settings" component={Settings} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };


// export default App;

// *************** <BOTTOM TAB NAVIGATION> ***************

  // import { View, Text } from 'react-native'
  // import React from 'react'
  // import { NavigationContainer } from '@react-navigation/native'
  // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
  // import HomeScreen from './src/Navigation-screens/BottomTab-Navigation/HomeScreen'
  // import ProfileScreen from './src/Navigation-screens/BottomTab-Navigation/ProfileScreen'
  // import SettingScreen from './src/Navigation-screens/BottomTab-Navigation/SettingScreen'
  // import Icon from 'react-native-vector-icons/Ionicons'
  // const Tab = createBottomTabNavigator()

  // const getTabBarIcon = (routeName, focused, color, size) => {
  //   let iconName;
  //   if(routeName === 'Home'){
  //     iconName = focused? 'home' : 'home-outline';
  //   }
  //   else if(routeName === 'Profile'){
  //     iconName = focused? 'person' : 'person-outline';
  //   }
  //   else if(routeName === 'Setting'){
  //     iconName = focused? 'settings' : 'settings-outline';
  //   }
  //   return <Icon name={iconName} size={size} color={color} />

  // }
  // const App = () => {
  //   return (
  //     <NavigationContainer>
  //       <Tab.Navigator screenOptions={({route}) => ({
  //         tabBarIcon: ({focused, color, size}) => getTabBarIcon(route.name,focused,color,size),
  //         tabBarActiveTintColor:'#007bdd',
  //         tabBarInactiveTintColor:'gray',
  //         tabBarStyle:{
  //           paddingBottom:5,
  //           height:60,
  //         },
  //   })}>
  //         <Tab.Screen name='Home' component={HomeScreen} />
  //         <Tab.Screen name='Profile' component={ProfileScreen} />
  //         <Tab.Screen name='Setting' component={SettingScreen} />
  //       </Tab.Navigator>
  //     </NavigationContainer>
  //   )
  // }

  // export default App

// *************** <TOP TAB NAVIGATION> ***************

// import { View, Text } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
// import ChatsScreen from './src/Navigation-screens/TopTab-Navigation/ChatsScreen'
// import StatusScreen from './src/Navigation-screens/TopTab-Navigation/StatusScreen'
// import CallsScreen from './src/Navigation-screens/TopTab-Navigation/CallsScreen'

// const Tab = createMaterialTopTabNavigator(); 
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{
//         tabBarActiveTintColor:'#007bff',
//         tabBarInactiveTintColor:'gray',
//         tabBarStyle:{backgroundColor:'#fff'},
//         tabBarIndicatorStyle:{backgroundColor:'#007bff', height:3},
//         tabBarLabelStyle: {fontSize:16},
//       }}>
//         <Tab.Screen name='Chats' component={ChatsScreen}   />
//         <Tab.Screen name='Status' component={StatusScreen}  />
//         <Tab.Screen name='Calls' component={CallsScreen}  />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App