import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground,Alert } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';

import stripe from 'tipsi-stripe';

// import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window")

stripe.setOptions({
    publishableKey: 'pk_test_51HguXkHS38lgZ594oguG9XGgdbHJLwNpDZ1SjKX3B4qGpL5I5PpTcHGPQ8qjZlDGJBIs1b9cCHBIu7vSaAHPmuNT008i79Vlcy'
    })




export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

            VariusItems: [
               
                { product:  'Product3',price: '120' },
                { product:  'Product4', price: '180' },
                { product: 'Product5' ,price: '120' },
                { product: 'Product6' ,price: '120'},
              
              
               
            ],

            number: '',
            expMonth: null,
            expYear: null,
            cvc: '',



        };
    }

payment = async () =>{

    const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        //  smsAutofillDisabled: true,
        //  requiredBillingAddressFields: 'full',
        // prefilledInformation: {
        //   billingAddress: {
        //     name: 'Enappd Store',
        //     line1: 'Canary Place',
        //     line2: '3',
        //     city: 'Macon',
        //     state: '',
        //     country: 'Estonia',
        //     postalCode: '31217',
        //     email: 'admin@enappd.com',
          
        //   },
        // },

      }).then((token) => {
        // asynchronously called
        console.log(token);
        Alert.alert('Payment Successfull')
    })
    .catch(err =>{
        console.log(err);
        Alert.alert('Payment is not Successfull')
    });
     // console.log(token)
     // Alert.alert('Payment Successfull')
}
    





    list = () => {
        return this.state.VariusItems.map((element, index) => {
            return (
               

                <View style={{height:70,width:'100%',justifyContent:'center',alignItems:'center'}}
                key={index}>
                   

                   

                    <View style={{width:'75%',justifyContent:'space-around',flexDirection:'row',alignItems:'center',marginBottom:15}}>
                        <Text style={{fontWeight:'bold',color:'#0d786e'}}>{element.product}</Text>
                        <Text style={{fontSize:15}}>Rs {element.price}</Text>
                    </View>
                    
                    <View style={{
                    height: 1,
                    width:'100%',
                    backgroundColor: '#cccccc',
                    alignSelf: 'stretch',
                    opacity:.4
                   
                }} />

                 
                    
                    
                    
                </View>

            
            );
        });
    };


  



    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#fff' }}>

               

                <LinearGradient
            // colors={[colors.headercolor21,colors.headercolor22,colors.headercolor23,colors.headercolor24]}
            colors={[colors.headercolor31,colors.headercolor32,]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        
          style={{ height: 65, elevation: 15, width: '100%', alignItems: 'center',
           justifyContent: 'flex-start', flexDirection: 'row', }}>

                        <Pressable style={{marginLeft:15, width: '35%', justifyContent: "flex-start", flexDirection: 'row' }}
                            onPress={() => this.props.navigation.navigate('ListItem')}
                        >
                            <Icon name='arrow-back' type='Ionicons' style={{
                                
                                fontSize: 25,
                                color: 'white',

                            }} />
                        </Pressable>


                        <Text style={{

                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>Summary</Text>

</LinearGradient>

<ScrollView>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#0d786e', fontWeight: 'bold', fontSize: 15 }}>Summary</Text>
                </View> */}

                <View style={{ 
                    borderRadius: 9,
                    elevation: 5,
                    width: width - 40,
                    backgroundColor: 'white',
                    justifyContent:'center',alignSelf:'center',
                    marginTop:10
                   // height: 250}}
        }}>

                    {this.list()}

                    <View style={{justifyContent:'flex-end',height:40,width:'75%',flexDirection:'row',marginLeft:35}}>
                        <Text style={{padding:10,fontSize:15,fontWeight:'bold',color:'#0d786e'}}>Total:  </Text>
                        <Text style={{padding:10}}>Rs. 3000</Text>
                    </View>

                </View>


                {/* <Item stackedLabel style={{ borderBottomColor: '#0d786e', borderBottomWidth: 1.8, width: width - 60,
                             alignSelf: 'center',marginTop:30 }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#0d786e', fontSize: 14,width:'75%',marginLeft:5 }}>Card Holders Name</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ fullName: value })}
                                    value={this.state.fullName}

                                    placeholder='Full Name' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                </Item>

                <Item stackedLabel style={{ borderBottomColor: '#0d786e', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center' }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#0d786e', fontSize: 14 ,width:'45%',marginLeft:5 }}>Card Number</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ phoneNo: value })}
                                    value={this.state.phoneNo}

                                    placeholder='Card Number' placeholderTextColor="#B0B3B0" keyboardType="number-pad"  style={{ fontSize: 14 }} />
                </Item> */}

{/*                 
                <Item stackedLabel style={{ borderBottomColor: '#0d786e', borderBottomWidth: 1.8, width: width - 60,
                             alignSelf: 'center'}}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#0d786e', fontSize: 14 ,marginLeft:5 }}>EXP Date</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ fullName: value })}
                                    value={this.state.fullName}

                                    placeholder='Date' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                </Item>

             <Item stackedLabel style={{ borderBottomColor: '#0d786e', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center' }}>
                    <Label style={{ fontWeight: 'bold', width: 80, color: '#0d786e', fontSize: 14,marginLeft:5  }}>CVC/CVV2</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ phoneNo: value })}
                                    value={this.state.phoneNo}

                                    placeholder='cvc/cvv2' placeholderTextColor="#B0B3B0" keyboardType="number-pad"  style={{ fontSize: 14 }} />
            </Item> */}



            <Pressable 
            onPress={() => this.payment()}
            style={{ marginVertical: 65, flexDirection: 'row', width: '100%', alignSelf: 'center',  justifyContent: 'center', }}>
                            
                        <View  style={{ width: '93%', justifyContent: 'center',alignItems:'center',}}>

                      
                            <LinearGradient
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                                       
                                        colors={[colors.headercolor31, colors.headercolor32, ]}
                             style={{ width: '93%',borderRadius: 7, backgroundColor: '#F3C714', elevation: 5 ,height:65 }}>
                                


                                  
                                    <Text
                                        
                                        style={{ color: '#FFFDF3', fontWeight: 'bold', flexGrow: 1, textAlign: 'center', fontSize: 16 ,
                                        marginTop:20,}}>
                                            PAY NOW</Text>
                              
                            

                            </LinearGradient>
                            </View> 

                    
            </Pressable>             
                





                </ScrollView>
            </Container>



        )
    }
}


const styles = StyleSheet.create({
    viewStyle: {
        position: 'absolute',

    },

    textStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    titleStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    listView: {
        marginTop: 10,
        width: 115,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
        marginBottom: 10,
        backgroundColor: '#5DADE2',
        borderRadius: 22,
        color: 'white', padding: 11

    },
    boxView: {
        width: 100,
        backgroundColor: '#FFFBFA',
        height: 115,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 8,
        // marginVertical:10,
        justifyContent: 'center',

    },
    boxView1: {
        // width:100,
        // backgroundColor:'#FFFBFA',
        // height:150,
        height: 90, width: 120, borderRadius: 25,
        alignItems: 'center',
        // borderRadius:10,
        elevation: 5,
        // marginVertical:10,
        justifyContent: 'center',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#228b22',
        borderRadius: 40,
    },
    floatingButtonStyle: {

        fontSize: 30,
        color: 'white'
        //backgroundColor:'black'
    },
})

