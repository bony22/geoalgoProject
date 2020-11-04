import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, Alert, ImageBackground, TouchableOpacity, Pressable,ToastAndroid,StatusBar} from 'react-native'
import { Container, Icon, Footer, Left, Right, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';
// import Navigation from '@Service/Navigation'
// import Auth from '@Service/Auth';
// import MyFunction from '@Service/MyFunction'
// // import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-community/google-signin';


const { width, height } = Dimensions.get("window")


export default class SignIn1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:'',
            account:{},
            user_info:{},
            otp:null,
            email:'',
            image:'',
            photoName:''
           
        };
    }
//     async componentDidMount(){
//         StatusBar.setBackgroundColor("black")
//         StatusBar.setBarStyle( 'light-content',true)
        
    
      
//    }
    async signin() {
        // console.log('phoneeeeee',this.state.number)
        if(this.state.number!=''&& this.state.number.length==10){
        // let data={
         
        //   number:this.state.number
        // }
        let info =  await Auth.login(this.state.number);
         console.log('info',info)
         if(info.status=="true"){
            this.setState({
              account: info.data,
              user_info:info.data,
              otp:info.otp
          });
        //    console.log("data send to verify page",this.state.user_info,this.state.otp)
          ToastAndroid.show('OTP send successfully', ToastAndroid.SHORT);
          await Auth.setAccount(this.state.account);
          Navigation.navigate('Verify',{user_data:this.state.user_info,otp:this.state.otp});
         }else{
            ToastAndroid.show('Invalid phone number', ToastAndroid.SHORT)
         }
        }
        else{
          ToastAndroid.show('Please provide a valid mobile number', ToastAndroid.SHORT)
        }
        
      }
      




    //   googlesignIn = async () => {

    //     GoogleSignin.configure({
    //         scopes:[], // what API you want to access on behalf of the user, default is email and profile
    //         webClientId: '895203943146-nelc2jh70a1uluummllf6lcmvftuu7lk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //         offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //         // hostedDomain: '', // specifies a hosted domain restriction
    //         // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //         // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //         // accountName: '', // [Android] specifies an account name on the device that should be used
    //         // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //       });

    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //     //   this.setState({ userInfo });
    //     console.log('user infooo',userInfo)
       
    //     this.setState({
    //         email:userInfo.user.email,
    //         image:userInfo.user.photo,

    //     })
    //     console.log('emailiiii',this.state.email)
    //     console.log('photo',this.state.image)
       
    //     this.gmailverification()
        

       
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (e.g. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //       } else {
    //         // some other error happened
    //       }
    //     }
    //   };

    //   gmailverification = async () => {
    //     let result2=await MyFunction.gmaillogin(this.state.email,this.state.image);
    //     console.log('gmail login nnnnnn',result2)
    //     if(result2 && result2.status=="true"){
    //         this.setState({
    //           account: result2.data,
              
    //       });
    //     }
    //     await Auth.setAccount(this.state.account);
    //     let result3 = await Auth.getAccount();
    //     console.log('user info login nnnnnn',result3)
    //     Navigation.navigate('ChoosePlan')

    //   }




    render() {
        return (
            <Container style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white',}}>

                    {/* <ImageBackground source={require('@asset/flynit.jpg')} style={{ flex: 1 }}
                        blurRadius={2} > */}
                        <View style={{ height: height, width: '100%', backgroundColor: 'white', flex:1}}>


                        <LinearGradient
                      
                        start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                        colors={[colors.headercolor31, colors.headercolor32,]}
                        style={
                            styles.Upper

                        //     justifyContent: 'space-between', flexDirection: 'row', height: 60, 
                        //   alignItems:'center', width:'100%',elevation:15
                        }>



                            <View style={{
                               
                                marginTop: 18,marginHorizontal:5,
                            }}>
                                <Pressable 
                                  onPress={() => this.props.navigation.navigate('Home')}>

                                    <Icon name="arrow-back" type='Ionicons' 
                                    style={{  fontSize: 25,  color: 'white' }} />

                                </Pressable>
                            </View>

                                <View style={{ justifyContent: 'flex-end', flexDirection: 'row',alignItems:'flex-end',alignContent:'flex-end',alignSelf:'flex-end',
                            width:'30%',marginLeft:200,marginBottom:20 }}>
                                    <Text style={{
                                        fontSize: 13, fontWeight: 'bold', color: 'white',marginRight:20
                                       
                                    }}>SIGN UP</Text>

                                    <Pressable 
                                     onPress={() => this.props.navigation.navigate('Home')}>

                                    <Text
                                    
                                     style={{ fontSize: 13, fontWeight: 'bold', color: 'white',
                                       
                                    }}>SKIP</Text>
                                    </Pressable>

                                </View>

                            {/* </View> */}

                            </LinearGradient>

                            {/* <View style={{
                                justifyContent: 'flex-start', justifyContent: 'flex-start', alignSelf: 'flex-start',
                                height: 40, width: width,

                            }}>
                                
                            </View> */}

                            <Text style={{
                                    fontSize: 22, fontWeight: 'bold', color: 'black',marginLeft:20,marginTop:25,
                                    marginBottom:15,marginTop:60

                                }}>Sign in to continue</Text>



                            <View style={{ justifyContent:'center',alignItems:'center',marginHorizontal:20 }}>


                          


                                    <TextInput

                                        style={{
                                            marginBottom:20, color: '#fff',width:'100%',
                                            borderBottomColor: '#f8f8f8', borderBottomWidth: 1,
                                        }}

                                        placeholder='Enter 10 digit Mobile Number'
                                        placeholderTextColor="#000" underlineColorAndroid={'black'}
                                        keyboardType="number-pad"
                                        onChangeText={(value)=>this.setState({number:value})}
                                        value={this.state.number} 
                                    />


                                    <TouchableOpacity
                                   //  onPress={() => this.signin()}
                                        style={styles.listView}>
                                            <LinearGradient


                        start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                        
                        colors={[colors.headercolor31, colors.headercolor32, ]}
                        style={styles.listView}>
                        
                                    <Text style={{ color: 'seashell',  fontSize: 15, fontWeight: 'bold' }}>
                                            Continue</Text>
                                            </LinearGradient>
                                    </TouchableOpacity>

                           

                                <View style={{
                                justifyContent: 'space-between', flexDirection: 'row', height: 25,
                            width:'100%',
                            }}>

                                <View style={styles.hairline} />
                                <Text style={styles.lineLowText1}>or</Text>
                                <View style={styles.hairline} />
                            </View>





{/* 
                                <View style={{
                                    justifyContent: 'center', flexDirection: 'row', height: 70,
                                    width: width, alignSelf: 'center', marginTop: 15,
                                }}> */}

                                    {/* <TouchableOpacity 
                                    // onPress={() => this.props.navigation.navigate('Verify')}
                                        style={styles.fbButton}>
                                        <Left>
                                            <Icon style={{ color: '#fff', fontSize: 22, marginLeft: 20, marginTop: 5 }}
                                                name="facebook" type='Fontisto' /></Left>
                                                
                                        <Text style={{
                                            color: 'seashell', padding: 5, fontSize: 15, fontWeight: 'bold',
                                             textAlign: 'center',
                                            marginRight:60
                                        }}>
                                            Continue with Facebook</Text>
                                    </TouchableOpacity> */}


                                {/* </View>  */}



                                 {/* <View style={{
                                    justifyContent: 'center', flexDirection: 'row', height: 65, width: width,
                                    alignSelf: 'center', marginTop: 15,
                                }}>  */}



                                    <TouchableOpacity 
                                  //  onPress={() => this.googlesignIn()}
                                        // style={styles.googleButton}
                                        >
                                              <LinearGradient


                                            start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}


                                            colors={[colors.headercolor31, colors.headercolor32, ]}
                                            style={styles.googleButton}>
                                        <Left>
                                            <Image
                                                source={require('@asset/google1.png')}
                                                style={{
                                                    height: 20, width: 20, borderRadius: 100, fontSize: 22, 
                                                    marginLeft: 20,
                                                    marginTop: 5
                                                }}
                                            /></Left>

                                        <Text style={{
                                            color: 'white',  fontSize: 15, fontWeight: 'bold', textAlign: 'center',
                                            marginRight: 70
                                        }}>
                                            Continue with Google</Text>
                                            </LinearGradient>

                                    </TouchableOpacity>
                                 {/* </View> */}

                            </View>




                            {/* <View style={{
                                justifyContent: 'center', alignSelf: 'center',
                                height: 20, bottom:15,position:'absolute'
                            }}>

                                <Text style={{
                                    fontSize: 12, fontWeight: 'bold', textAlign: 'center',
                                    color: 'white',
                                }}>By signing up you agree to the Terms & conditions</Text>


                            </View> */}





                        </View>
                    {/* </ ImageBackground> */}
                </View>
            </Container >
        );
    }
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', opacity: .9,
    },
    textInput: {
        //width: '100%',
        //marginBottom: 20,
        // color: '#fff',
        // borderBottomColor: '#f8f8f8',
        // borderBottomWidth: 1,
        //marginLeft: 20,
        // marginRight: 20,
        //borderEndWidth: 3,
        //alignSelf:
        //marginTop: 3
        // backgroundColor:'white'

    },
    Upper: {
        backgroundColor: '#FDFDFD',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        elevation:8,
        width:'100%'
        // marginHorizontal: 15,
        // marginTop: 15,

        // marginVertical:5
    },

    listView: {

        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: 38,
        // marginRight: 36,
        // marginBottom: 10,
       // backgroundColor: 'grey',
        borderRadius: 5,
     

    },
    fbButton: {
        // marginTop: 22,
        width: '100%',
        height: 50,
        // alignItems: "center",
        // justifyContent: "center",
        // marginLeft: 20,
        // marginRight: 20,
        // marginBottom: 10,
        backgroundColor: '#4267B2',
        borderRadius: 5,
        color: 'white', padding: 11,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",

    },
    googleButton: {
        //top: -40,
        width: '100%',
        height: 50,
        // alignItems: "center",
        // justifyContent: "center",
        // marginLeft: 20,
        // marginRight: 20,
        //marginBottom: 10,
        //backgroundColor: '#000000',
      backgroundColor: 'black',
        borderRadius: 5,
        // borderWidth: 2,
        color: 'white', 
        padding: 11, 
        flexDirection: 'row',
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",

    },

    hairline: {
        backgroundColor: '#A2A2A2',
        height: 0.5,
        width: '40%',
        marginTop: 19
    },

    lineLowText1: {
        fontFamily: 'AvenirNext-Bold',
        fontSize: 15,
       // paddingHorizontal: 5,
        //alignSelf: 'center',
        color: '#A2A2A2',
        // marginTop: 7,
        width:'20%',
        textAlign:'center',
        marginTop:7
    },

})
