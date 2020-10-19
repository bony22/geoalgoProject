import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, Alert, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import { Container, Icon, Footer, Left, Right, Button } from 'native-base';
const { width, height } = Dimensions.get("window")


export default class EcomScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VariusItems: [
                { product: require('@asset/flynit.jpg'), productname: 'flynit goddess', brand: "Nike", price: '$120' },
                { product: require('@asset/nivea.jpg'), productname: 'nivea cream', brand: "Nivea", price: '$65' },
                { product: require('@asset/headphone.jpg'), productname: 'headphone', brand: "Boat", price: '$250' },
                { product: require('@asset/men.jpg'), productname: 'Plain Shirt', brand: "Raymonds", price: '$80' },
                { product: require('@asset/women.jpg'), productname: 'Salwar', brand: "Prapti", price: '$75' },
                { product: require('@asset/child.jpg'), productname: 'childname', brand: "Mama n me", price: '50' },


            ]
        };
    }

    list = () => {
        return this.state.VariusItems.map((item, index) => {
            // console.log('object',item)
            return (
                <View key={index}
                style={{ height: 60, width: '100%', marginTop: 15, flexDirection: 'row', }}>

                    {/* <View style={{ height: 150, width: 160 }}> */}

                        <Image
                            source={item.product}
                            style={{
                                height: 40, width: 115, borderRadius: 20, marginLeft: 5
                            }}
                        />

                    {/* </View> */}

                    <Image
                        source={item.product}
                        // style={styles.listView}
                        style={{
                            height: 40, width: 115, borderRadius: 20, marginLeft: 5
                        }}
                    />
                    <Image
                        source={item.product}
                        // style={styles.listView}
                        style={{
                            height: 40, width: 115, borderRadius: 20, marginLeft: 5
                        }}

                    />
                    <Image
                        source={item.product}
                        // style={styles.listView}
                        style={{
                            height: 40, width: 115, borderRadius: 20, marginLeft: 5
                        }}
                    />



                </View>
            );
        });
    };





    render() {
        return (
            <Container style={{ backgroundColor: 'lightblue', flex: 1 }}>
                <View style={{ width: '100%', marginTop: 20, flexDirection:'row'}}>

                <Icon name="search1"
                            type='AntDesign'
                            style={{ fontSize: 18,}}
                        />



                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="black"
                        style={{
                            fontSize: 18, width: '92%', backgroundColor: 'white', justifyContent: 'center',
                            alignSelf: 'center', alignContent: 'center', alignItems: 'center',borderRadius:15
                        }}
                    />






                </View>

                <View style={{
                    width: '92%', marginTop: 20, height: 90, borderWidth: 1, backgroundColor: 'black', justifyContent: 'center',
                    alignItems: 'center', alignSelf: 'center'
                }}>
                    <Text style={{
                        color: 'white', alignSelf: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', marginLeft: 10,
                        fontWeight: 'bold'
                    }}>Featured :</Text>

                    {/* <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',backgroundColor:'green'}}> */}

                    <ScrollView horizontal={true}
                        pagingEnabled
                        showsVerticalScrollIndicator={false}>
                        {this.list()}
                    </ScrollView>


                    {/* </View> */}


                   
                    
                    {/* <View style={{backgroundColor:'lightblue'}}>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
                <View style={{width:'2%'}}></View>

                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>

                    <Image source = {require('../assets/veg1.jpg')} 
                     style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />

                    </View>
                </View>
                <View style={{width:'2%'}}></View>
                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/fever.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/hair.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/depression.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
            </View>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
                <View style={{width:'2%'}}></View>

                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/coronavirus.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/fever.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/hair.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
                <View style={{width:'22%'}}>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <Image source = {require('../assets/depression.png')}  style={{height:65,marginVertical:5,width:65,borderRadius:10,alignSelf:'center',backgroundColor:'#FFFFFF'}} />
                    
                    </View>
                </View>
                <View style={{width:'2%'}}></View>
            </View>
            </View>  */}
 

                </View>

            </Container >
        );
    }
}







const styles = StyleSheet.create({
    listView: {

        width: 115,
        height: 45,
        // alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
        marginBottom: 10,
        // backgroundColor: 'green',
        borderRadius: 22,
        color: 'white',
        // padding: 11

    },

})
