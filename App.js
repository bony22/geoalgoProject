
import { Text, View,Icon ,Dimensions} from 'react-native'

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {DraweItems, createDrawerNavigator} from 'react-navigation-drawer'

import EcomScreen1 from './app/screen/EcomScreen1'
import ListItem from './app/screen/ListItem'
 import SingleItem from './app/screen/SingleItem'
 import Payment from './app/screen/Payment'
 import ProductFilter from './app/screen/ProductFilter';
import CustomDrawer from './app/screen/CustomDrawer';

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
const AppDrawer = createAppContainer(
  createDrawerNavigator(
    {
     
      Home:EcomScreen1,    
      // Profile: {screen: Profile},
      // LogIn:{screen: LogInScreen},
      
     

    
    },
    {
      contentComponent:CustomDrawer,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 80,
      
     
    }
    
  
  )
)

const ScreenStack = createStackNavigator(
  {
    
    // Home:EcomScreen1,
    ListItem:ListItem,
    Drawer: AppDrawer,
    Filter:ProductFilter,
    Payment:Payment
    
    

  },
  {
    initialRouteName: 'Drawer',
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


