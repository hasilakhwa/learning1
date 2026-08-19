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

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Navigation-screens/Home';
import About from './src/Navigation-screens/About'
import Login from './src/Navigation-screens/Login'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
       </NavigationContainer>
  )
}

export default App