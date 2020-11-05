import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, ToastAndroid, Pressable, StatusBar } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Picker, DatePicker } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';
import { NavigationActions } from 'react-navigation';



const { height, width } = Dimensions.get('window');

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();

const backAction = NavigationActions.back({
    // key: 'Profile',
});


export default class BuyNowAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // selected4: undefined,
            // userId: '',
            fullName: '',
            email: '',
            phoneNo: '',
            pincode: '',
            address: '',
            city: '',
            state: '',
            landmark: '',
            account: {}

        };

        // this.setDob = this.setDob.bind(this);
    }
    //   onValueChange4(value) {
    //     this.setState({
    //       selected4: value
    //     });
    //   }



    // async componentDidMount() {

    //     await this.userIdd()
    //   //  await this.cartFetch1


    // }


    userIdd = async () => {
        let result = await Auth.getAccount();
        //console.log('userId',result)

        this.setState({
            userdata: result

        })

    }


    // cartFetch1 = async() =>{

    //     let data={
    //         user_id:this.state.userdata.id
    //     }

    //     // let result1=await MyFunction.cartFetch(data);
    //     // console.log('cartfetchhhhhhh',result1)


    //     // if( result1 && result1.status){
    //     //     this.setState({
    //     //         cartData:result1.data,

    //     //     })
    //     //     let data1={
    //     //         data:result1.data,
    //     //         image_url:result1.image_url,
    //     //         //

    //     //         //datadel:result1.data,
    //     //     }

    //     this.props.dispatch(fetchCart(cartItems[[]])) 
    //     //ToastAndroid.show(' Tests in your Cart added successfully',ToastAndroid.SHORT);

    //     // }
    //     // else{

    //     //     ToastAndroid.show('Hii! your cart is empty ',ToastAndroid.SHORT)
    //     // }
    // }





    // placeOrder = async () => {

    //     if (this.state.fullName!= '' && this.state.email!='' && this.state.pincode!= ''&& this.state.address!= '' )
    //     {
    //         if(this.state.pincode.length ==6 && this.state.phoneNo.length ==10){



    //     let data = {
    //         user_id: this.state.userdata.id, 

    //         name: this.state.fullName,
    //         phone:this.state.phoneNo,  
    //         email: this.state.email,
    //         city:this.state.city,
    //         state:this.state.state,
    //         landmark:this.state.landmark,
    //         pin:this.state.pincode,
    //         address:this.state.address,

    //     }

    //     let result = await MyFunction.placeOrder(data)
    //    //  console.log('result',result)

    //      if  (result && result.status ) {
    //         this.setState({
    //             account: result.data,
    //         });
    //         ToastAndroid.show('Order Placed Successfully', ToastAndroid.SHORT);

    //            this.props.dispatch(fetchCart({data:[],image_url:this.props.image_url})) 
    //  Navigation.navigate('Payment');


    //         this.setState({

    //             fullName: '', pincode: '', phoneNo: '', email: '', address:'', city:'', state:'',landmark:'',

    //         });

    //      }

    //     else {

    //         ToastAndroid.show('Something wrong! Try Again ', ToastAndroid.SHORT)
    //     }
    // }else{

    //     ToastAndroid.show('Enter 10 digits Phone number and  6 digits Pincode ', ToastAndroid.SHORT)
    // }

    //  }

    //     else{

    //         ToastAndroid.show('Please enter fullname,email,pincode,address ', ToastAndroid.SHORT)
    //     }

    // }

    placeOrder = async () => {

        this.props.navigation.navigate('Payment')

    }






    render() {
        return (
            <View style={styles.mainview}>
                <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />



                <LinearGradient

                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                    colors={[colors.headercolor31, colors.headercolor32,]}
                    style={
                        styles.Upper

                        //     justifyContent: 'space-between', flexDirection: 'row', height: 60, 
                        //   alignItems:'center', width:'100%',elevation:15
                    }>


                    <Pressable
                        onPress={() => this.props.navigation.dispatch(backAction)}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
                            <Icon name="ios-arrow-back" type='Ionicons'
                                style={{ color: "#fff", fontSize: 28, }} />
                        </View>
                    </Pressable>
                    <View style={{ width: '60%', marginTop: 18, }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Sign Up</Text>
                    </View>


                </LinearGradient>


                <ScrollView>
                    <View style={styles.viewCard}>

                        <Card style={{ borderRadius: 10 }}>


                            <Item stackedLabel style={{
                                borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60,
                                alignSelf: 'center', marginTop: 30
                            }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Full Name</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ fullName: value })}
                                    value={this.state.fullName}

                                    placeholder='name' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item>


                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center' }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Phone No</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ state: value })}
                                    value={this.state.state}

                                    placeholder='Phone No' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item>



                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center' }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Password</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ state: value })}
                                    value={this.state.state}

                                    placeholder='password' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item>


                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center' }}>
                                <Label style={{ fontWeight: 'bold', width: '100%', color: '#1273de', fontSize: 14, marginLeft: 6 }}>Re-enter Password</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ pincode: value })}
                                    value={this.state.pincode}

                                    placeholder='password' placeholderTextColor="#B0B3B0"
                                    style={{ fontSize: 14 }} />
                            </Item>

                            {/* <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <Label style={{ fontWeight: 'bold', width: 120, color: '#1273de', fontSize: 14 ,marginLeft:6}}>Product Price</Label>
                                

                                <Text style={{ color: '#767675', marginTop: 10, left: -105 }}>{this.props.}</Text>

                                <Input
                                    onChangeText={(value) => this.setState({ pincode: value })}
                                    value={this.state.pincode}

                                    placeholder='Price' placeholderTextColor="#B0B3B0" keyboardType="number-pad"  style={{ fontSize: 14 }} />

                                

                            </Item> */}

                            <View style={{ marginVertical: 10, marginLeft: 20 }}>

                            </View>

                        </Card>
                        <View style={{ marginVertical: 30, flexDirection: 'row', width: '100%', alignSelf: 'center', bottom: -10, justifyContent: 'center' }}>
                            {/* <View style={{ width: '80%', justifyContent: 'center' }}>
                                <Button onPress={() => this.placeOrder()}


                                    style={{ justifyContent: 'center', alignSelf: 'center', borderRadius: 7, backgroundColor: '#1273de', elevation: 5 }}>
                                    <Text
                                        
                                        style={{ color: '#FFFDF3', fontWeight: 'bold', flexGrow: 1, textAlign: 'center', fontSize: 16 }}>
                                            Place Order</Text>
                                </Button> 

                               
                            </View>*/}

                            <TouchableOpacity
                                //  onPress={() => this.addtoCart()}

                                style={{ justifyContent: 'center', width: '80%', }}
                            >

                                <LinearGradient


                                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                                    colors={[colors.headercolor31, colors.headercolor32,]}
                                    style={{
                                        justifyContent: 'center', width: '98%', alignSelf: 'center', alignItems: 'center', height: 50,
                                        borderRadius: 7, backgroundColor: '#C36BB9',
                                    }}
                                >

                                    <Text style={{ color: '#FFFDF3', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Save</Text>

                                </LinearGradient>
                            </TouchableOpacity>



                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


// const mapStateToProps=(state)=>({
//     //  console.log("state.TestCartItem.cartItems",state.TestCartItem.cartItems)
//     //   return{

//       cartItems:state.TestCartItem.cartItems,
//       image_url:state.TestCartItem.image_url,

//   })

//   export default connect(mapStateToProps)(BuyNowAddress);




const styles = StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: '#D5DBE0'

    },
    viewCard: {
        marginTop: 60,
        marginVertical: 15,
        justifyContent: 'center',
        width: width - 15,
        alignSelf: 'center',

    },
    container: {
        flexDirection: 'row',
        height: 30,
        width: '50%',
        // borderWidth:1,
        borderColor: '#D5D5D5',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        marginTop: 5
    },
    Upper: {
        backgroundColor: '#FDFDFD',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        elevation: 8
        // marginHorizontal: 15,
        // marginTop: 15,

        // marginVertical:5
    },


})
