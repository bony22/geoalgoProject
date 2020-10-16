/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import SplashScreen from 'react-native-splash-screen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import EcomScreen1 from './app/screen/EcomScreen1'
import ListItem from './app/screen/ListItem'

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <View>
//         {/* <Text>hdvfhdsvhg</Text> */}
//         <EcomScreen/>
//       </View>
      
      
//     </>
//   );
// };


const ScreenStack = createStackNavigator(
  {
    
    Home:EcomScreen1,
    ListItem:ListItem,
    

  },
  {
    initialRouteName: 'Home',
     headerMode : 'none'
  }
);

const AppContainer = createAppContainer(ScreenStack);


export default class App extends Component {

  componentDidMount(){

    SplashScreen.hide();
    
    }

  

  render() {
    return (


      <AppContainer />
      // <View>
    
      // <EcomScreen1 />
      // <ListItem/>
      // </View>
      
      // <HomePage/>
    )
  }
}


