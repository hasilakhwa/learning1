// Basic Concepts of react native
// import React from 'react';
// // import { View, Text, Button } from 'react-native';
// // import First from "./src/component/first";
// import { View } from 'react-native';
// // import JSX from './src/component/JSX';
// // import OnPress from './src/component/OnPress';
// // import UseStateHook from './src/component/UseStateHook';
// // import Styling from './src/component/Styling';
// // import FlatListScreen from './src/component/FlatListScreen';
// // import InputText from './src/component/InputText';
// // import Props from './src/component/Props';
// // import SectionListScreen from './src/component/SectionListScreen'
// // import LoginForm from './src/component/LoginForm'
// // import ContactListScreen from './src/screens/Contact/ContactListScreen'
// // import Grid from './src/component/Grid'
// // import ClassComponent from './src/component/ClassComponent'
// // import UseEffectHook from './src/component/UseEffectHook'
// // import UseEffectHookUnmountedPhase from './src/component/UseEffectHookUnmountedPhase'
// // import HideShowToggle from './src/component/HideShowToggle'
// // import StyleWithButton from './src/component/StyleWithButton'
// // import Loader from './src/component/Loader'
// // import PressableComponent from './src/component/PressableComponent'
// // import StatusBarExample from './src/component/StatusBarExample'
// // import UseRefHook from './src/component/UseRefHook'
// // import ModalDialogBox from './src/component/ModalDialogBox'
// // import AlertExample from './src/component/AlertExample'
// // import GET_API from './src/component/GET_API'
// // import POST_API from './src/component/POST_API'
// // import PUT_API from './src/component/PUT_API'
// // import PATCH_API from './src/component/PATCH_API'
// // import DELETE_API from './src/component/DELETE_API'
// // import GET_API_LIST from './src/component/GET_API_LIST'
// // import PlatformExapmle from './src/component/PlatformExapmle'
// import Search from './src/component/Search'
// const App = () => {
//   return (
//     <View
//     style={{flex:1}}
//     // style={{
//     //     flex: 1,
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //   }}
//       >
//       {/* <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
//         Hello Hasnain 🚀
//         </Text>
//         <Text style={{ fontSize: 40, color: 'white', backgroundColor: 'pink' }}>I am Mobile developer</Text>
//         <Button title='press Here' />
//         */}
//       {/* <First />  */}
//       {/* <JSX /> */}
//       {/* <OnPress /> */}
//       {/* <UseStateHook /> */}
//       {/* <InputText  /> */}
//       {/* <Styling /> */}
//       {/* <FlatListScreen /> */}
//       {/* <InputText /> */}
//       {/* <Props /> */}
//       {/* <SectionListScreen /> */}
//       {/* <LoginForm /> */}
//       {/* <ContactListScreen /> */}
//       {/* <Grid /> */}
//       {/* <ClassComponent /> */}
//       {/* <UseEffectHook /> */}
//       {/* <UseEffectHookUnmountedPhase /> */}
//       {/* <HideShowToggle /> */}
//       {/* <StyleWithButton /> */}
//       {/* <Loader /> */}
//       {/* <PressableComponent /> */}
//       {/* <StatusBarExample /> */}
//       {/* <UseRefHook /> */}
//       {/* <ModalDialogBox /> */}
//       {/* <AlertExample /> */}
//       {/* <GET_API /> */}
//       {/* <POST_API /> */}
//       {/* <PUT_API/> */}
//       {/* <PATCH_API/> */}
//       {/* <DELETE_API /> */}
//       {/* <GET_API_LIST /> */}
//       {/* <PlatformExapmle /> */}
//       <Search/>
//     </View>
//   );
// };

// export default App;

// starting navigation now
// Stack Navigation

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

// Drawer Navigation
import 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Navigation-screens/Drawer-Navigation/Home';
import Profile from './src/Navigation-screens/Drawer-Navigation/Profile';
import Settings from './src/Navigation-screens/Drawer-Navigation/Settings';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#e6e6e6',
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 18,
            color: '#333',
          },
          headerStyle: {
            backgroundColor: '#6200EE',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;


