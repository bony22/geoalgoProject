import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,ScrollView,Dimensions, Pressable,TouchableOpacity } from 'react-native';
import { Container, Header, Footer, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import {  } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-elements';
import {colors} from '@Component/Color';
import LinearGradient from 'react-native-linear-gradient';

const {width}=Dimensions.get('window').width - 80

export default class CustomDrawer extends Component {
    constructor(props) {
        super(props);
    this.state = {
    //Setting up the Main Top Large Image of the Custom Sidebar
    // img: require('@Assets/profile.png'),
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    id:'',
    phone:'',
    email:'',
    image:'',
    items : [
      {
        ScreenTitle: 'Profile Settings',
        ScreenSubtitle:'Change your personal information',
        navOptionName: 'First Screen',
        screenToNavigate: 'NavScreen1',

      },
      {
       
        ScreenTitle: 'Membership Type',
        ScreenSubtitle:'Manage Your account membership',
        navOptionName: 'Second Screen',
        screenToNavigate: 'ChoosePlan',
      },
      {
        ScreenTitle: 'Wishlist',
        ScreenSubtitle:'All Your Wishlist are here',
        navOptionName: 'Seventh Screen',
        screenToNavigate: 'allDownloads',
      },
      {
        ScreenTitle: 'My Orders',
        ScreenSubtitle:'Manage Your Order',
        navOptionName: 'eighth Screen',
        screenToNavigate: 'allWatchlist',
      },
      {
        ScreenTitle: 'Notifications',
        ScreenSubtitle:'Control when and how you get notified',
        navOptionName: 'Third Screen',
        screenToNavigate: 'NavScreen3',
      },
      {
        ScreenTitle: 'My Rewards',
        ScreenSubtitle:'Change your language preferences',
        navOptionName: 'Fourth Screen',
        screenToNavigate: 'LanguagePreference',
      },
      {
        ScreenTitle: 'My Cart',
        ScreenSubtitle:'Link Your Eros Now & Facebook accounts',
        navOptionName: 'Fifth Screen',
        screenToNavigate: 'NavScreen5',
      },
      {
        ScreenTitle: 'Privacy Settings',
        ScreenSubtitle:'Control who sees what on your profile',
        navOptionName: 'Sixth Screen',
        screenToNavigate: 'NavScreen6',
      },
      {
        ScreenTitle: 'Help Center',
        ScreenSubtitle:'Check how others view you Eros Now',
        navOptionName: 'Seventh Screen',
        screenToNavigate: 'Profile',
      },
     
     
    ]
};
  }

//   async componentDidMount(){
//    await this.getuser()
//   }

//   getuser=async()=>{
//     let result2 = await Auth.getAccount();
//     if(result2 && result2.user_id!=null){
//       if(result2.number!=null){
//         this.setState({
//           id:result2.user_id,
//           phone:result2.number,
          
//         })

//       }
//       else{
//         this.setState({
//           id:result2.user_id,
//          email:result2.email,
//          image:result2.image
//         })

//       }
//     console.log("User Infoooo",result2)
   
   
// }
// console.log('pphone',this.state.phone)
// console.log('emaillll',this.state.email)
// console.log('iddddd',this.state.id)

//    }


//    clearAllData=async()=> {
//     AsyncStorage.getAllKeys()
//         .then(keys => AsyncStorage.multiRemove(keys));
//         this.props.navigation.navigate('SignIn1')
// }



  list = () => {
    return this.state.items.map((item, index) => {
        return (
            <View style={{ width: width }}
                key={index} >
 
 
    <View
      style={{
        // flexDirection: 'row',
        height:60,
        width:'90%',
         alignItems:"flex-start",
         align:'center',
        // paddingTop: 10,
        // paddingBottom: 10,
        // backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
      }}
      key={index}>
        <Pressable
        // onPress={() => this.props.navigation.navigate(item.screenToNavigate)}
        >
     
      <Text style={styles.MenuTitle}
       >
         
        {item.ScreenTitle}
      </Text>
      </Pressable>
     
    </View>

</View>
 );
});
};
  render() {
    return (
      <View style={styles.sideMenuContainer}>

<LinearGradient
           colors={[colors.headercolor31,colors.headercolor32,]}
          // colors={[colors.headercolor31,colors.headercolor32,colors.headercolor33,colors.headercolor34]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{height:140,width:width, flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
          
          }}>


          {/* <View style={{height:140,width:width, flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
          // backgroundColor:'#0000cd',
          // backgroundColor:'#ff0000'
          //  backgroundColor: '#e91e63',
          //  backgroundColor: '#ff5722',
               backgroundColor: '#4b0082',
         
          }}> */}
      
       
       
        <Image
          source={require('@asset/profile.png')}
          style={styles.sideMenuProfileIcon}
          
          
        />
    
      
      
        


       
        <View style={{hight:100,width:120,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
      
        <Text style={{ color: 'white', 
     fontFamily: "normal",
      marginLeft:3,
    fontSize: 19,
     fontWeight: "bold"}}>
        geoalgo@gmail.com
        </Text>
       
        
    </View>
    </LinearGradient>

        {/* <Right>
      
        <Icon name='keyboard-arrow-right' type='MaterialIcons' style={{ fontSize:40,color: 'white',marginLeft:20}} />
        </Right> */}
        {/* </View> */}
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: 'white',
            marginTop: 15,
          }}
        />
        
        <ScrollView style={{marginLeft:15}}>
    {this.list()}
   
    <Pressable style={{hight:80,width:240,borderWidth:1,borderColor: 'black',justifyContent:'center',paddingVertical:3,marginBottom:10}}
    //  onPress={() => this.clearAllData()}
    >
        <Text style={{color: 'black', fontFamily: "normal",
                  fontSize: 15, fontWeight: "bold",textAlign:"center"}}> LOG OUT</Text>
    </Pressable> 
   
    
    
    </ScrollView>
    {/* {this.state.id!=''?
    <Pressable style={{hight:80,width:240,borderWidth:1,borderColor: '#29DFD5',justifyContent:'center',paddingVertical:3}}
     onPress={() => this.props.navigation.navigate('SignIn1')}>
        <Text style={{color: 'cyan', fontFamily: "normal",
                  fontSize: 15, fontWeight: "bold",textAlign:"center"}}> LOG OUT</Text>
    </Pressable> 
    :null} */}
   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
      flex:1,
    width: width,
    // height: '100%',
    backgroundColor: 'white',
    // alignItems: 'center',
    //  paddingLeft: 5,
    
  },
  sideMenuProfileIcon: {
     resizeMode: 'cover',
    width: 120,
    height: 120,
    //  marginBottom: 10,
    borderRadius: 10,

  },
  MenuTitle: {
     color: 'black', 
     fontFamily: "normal",
    //   marginTop:10,
    fontSize: 15,
     fontWeight: "bold"
  },
  MenuSubTitle: {
    color: 'grey', 
    fontFamily: "normal",
    //  marginTop:10,
   fontSize: 11,
    fontWeight: "bold",
    opacity:.6
 },

});
