import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
    // key: 'Profile',
});

const { height, width } = Dimensions.get("window")
export default class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

            VariusItems1: [

                { product: require('@asset/apparel.jpg'), productname: 'Apperal', brand: "Raymonds", price: 'Rs. 80', delivery: 'delivered' },
                { product: require('@asset/eyewear.png'), productname: 'EyeWear', brand: "Boat", price: 'Rs. 250', delivery: 'will be delivered soon' },
                { product: require('@asset/pixel.jpg'), productname: 'Watches', brand: "Prapti", price: 'Rs. 75', delivery: 'will be delivered soon' },
                { product: require('@asset/lipstick.jpg'), productname: 'Beauty', brand: "Mama n me", price: '50', delivery: 'delivered' },
                { product: require('@asset/jew.jpg'), productname: ' Jewelry', brand: "Nike", price: 'Rs. 120', delivery: 'delivered' },
                { product: require('@asset/bags.jpg'), productname: 'Bags', brand: "Apple", price: 'Rs. 349', delivery: 'will be delivered soon' },
                { product: require('@asset/flynit.jpg'), productname: 'Footwear', brand: "Nike", price: 'Rs. 120', delivery: 'delivered' },
                { product: require('@asset/facewash.jpg'), productname: 'Cosmetics', brand: "Apple", price: 'Rs. 349', delivery: 'will be delivered soon' },
                { product: require('@asset/electronics.jpg'), productname: 'Electronics', brand: "Nivea", price: 'Rs. 65', delivery: 'will be delivered soon' },

            ]

        };
    }
    list = () => {
        return this.state.VariusItems1.map((element, index) => {
            return (
                <Pressable key={index}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Card style={{
                            borderRadius: 9, elevation: 5, width: width - 40,
                            // backgroundColor:'#fffff0',
                            backgroundColor: 'white', padding: 10
                            // backgroundColor:'seashell'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                // borderRadius: 9, elevation: 5, 
                                width: '100%',
                                // backgroundColor:'#fffff0',
                                backgroundColor: 'white',
                                padding: 10
                                // backgroundColor:'seashell'
                            }}>
                                <View style={{ width: '20%' }}>
                                    <Image source={element.product}
                                        style={{ height: 80, width: 80, alignSelf: 'center', marginLeft: 20 }}
                                    />
                                </View>
                                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ justifyContent: 'center', marginHorizontal: 2, width: '95%', padding: 10 }}
                                    >

                                        {/* <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text> */}
                                        <Text style={{
                                            // color:'#006565',
                                            color: 'black',
                                            fontSize: 16, letterSpacing: 1, marginLeft: 20
                                        }}>{element.productname}</Text>
                                        <Text numberOfLines={1} style={{
                                            // color:'#006565',
                                            color: 'black',
                                            fontSize: 12, letterSpacing: 1, marginLeft: 20
                                        }}>{element.brand}</Text>

                                        <Text numberOfLines={1} style={{
                                            // color:'#006565',
                                            color: 'black',
                                            fontSize: 12, letterSpacing: 1, marginLeft: 20
                                        }}>{element.price}</Text>


                                    </View>

                                    {/* <View style={{justifyContent:'center',width:'35%',alignItems:'center',height:60}}

                         > */}


                                    {/* </View> */}

                                </View>

                            </View>

                            <View style={{
                                height: 1,
                                width: '100%',
                                backgroundColor: '#cccccc',
                                alignSelf: 'stretch',
                                opacity: .9

                            }} />

                            <View style={{ width: width, justifyContent: 'flex-start', flexDirection: 'row' }}>
                                <Text numberOfLines={1} style={{
                                    // color:'#006565',
                                    color: '#1273de',
                                    fontSize: 12, letterSpacing: 1, marginLeft: 10
                                }}>{element.delivery}</Text>
                            </View>
                        </Card>
                    </View>




                </Pressable>
            );
        });
    };

    render() {
        return (
            <View style={{ flex: 1, }}>
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
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>All Orders</Text>
                    </View>


                </LinearGradient>
                <ScrollView>


                    {this.list()}
                    <View style={{ height: 80, width: width }}></View>
                </ScrollView>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewStyle: {
        position: 'absolute',

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
