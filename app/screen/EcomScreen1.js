import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';

// import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window")

export default class EcomScreen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            VariusItems: [
                { product: require('@asset/flynit.jpg'), catagory: 'Fruits & veggi' },
                { product: require('@asset/jew.jpg'), productname: ' Jewelry', brand: "Nike", price: '$120' },
                { product: require('@asset/lakme.jpg'), catagory: 'Fruits & veggi' },
                { product: require('@asset/apparel.jpg'), productname: 'Apperal', brand: "Raymonds", price: '$80' },
                { product: require('@asset/flynit.jpg'), catagory: 'Fruits & veggi' },
                { product: require('@asset/shampoo1.jpg'), catagory: 'Bevarages' },
                { product: require('@asset/lakme.jpg'), catagory: 'Fruits & veggi' },
                { product: require('@asset/apparel.jpg'), productname: 'Apperal', brand: "Raymonds", price: '$80' },
                { product: require('@asset/flynit.jpg'), catagory: 'Fruits & veggi' },
                { product: require('@asset/shampoo1.jpg'), catagory: 'Bevarages' },
                { product: require('@asset/lakme.jpg'), catagory: 'Fruits & veggi' },

            ],
            VariusItems1: [

                { product: require('@asset/apparel.jpg'), productname: 'Apperal', brand: "Raymonds", price: '$80' },
                { product: require('@asset/eyewear.png'), productname: 'EyeWear', brand: "Boat", price: '$250' },
                { product: require('@asset/pixel.jpg'), productname: 'Watches', brand: "Prapti", price: '$75' },
                { product: require('@asset/lipstick.jpg'), productname: 'Beauty', brand: "Mama n me", price: '50' },
                { product: require('@asset/jew.jpg'), productname: ' Jewelry', brand: "Nike", price: '$120' },
                { product: require('@asset/bags.jpg'), productname: 'Bags', brand: "Apple", price: '$349' },
                { product: require('@asset/flynit.jpg'), productname: 'Footwear', brand: "Nike", price: '$120' },
                { product: require('@asset/facewash.jpg'), productname: 'Cosmetics', brand: "Apple", price: '$349' },
                { product: require('@asset/electronics.jpg'), productname: 'Electronics', brand: "Nivea", price: '$65' },

            ]

        };
    }


    // async componentDidMount(){


    //     await this.listItem1()


    // }


    listItem1 = async () => {

        let resp = await fetch('http://www.adroitinclusive.com:81/data.php')
        let respJson = await resp.json()
        this.setState({
            data: respJson
        })
        // console.log(respJson)
    }


    // list = () => {
    //     return this.state.VariusItems.map((item, index) => {
    //         return (
    //             <View key={index} style={{
    //                 height: 150, width: '100%',
    //                 marginTop:10, borderWidth:1 ,backgroundColor:'#247DB3',

    //             }}>
    //                 <View style={{width:'30%',}}>

    //                     <Text style={{fontWeight:'bold',fontSize:15,color:'white',marginLeft:10}}>Featured :</Text>

    //                 </View>

    //                <View style={{width:'70%',}}>

    //                <Image
    //                     source={item.product}
    //                     style={{
    //                         height: 100,
    //                         width: 100, borderRadius: 15, marginTop:10,marginLeft:10,
    //                         resizeMode:'cover'

    //                     }}
    //                 />
    //                </View>
    //             </View>
    //         );
    //     });
    // };

    list = () => {
        return this.state.VariusItems.map((element, index) => {
            return (
                <View style={{
                    // marginTop: 10 ,
                    padding: 5,
                }} key={index} >


                    <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center', elevation: 10 }}>

                        <Pressable
                            style={styles.boxView1}
                            onPress={() => this.props.navigation.navigate('ListItem')}
                        >
                            <Image
                                source={element.product}
                                style={{
                                    height: 90, width: 120, borderRadius: 25,
                                }}
                            />
                        </Pressable>
                    </View>

                </View>
            );
        });
    };



    // list1 = () => {
    //     return this.state.VariusItems1.map((element, index) => {
    //        // console.log("this.state.image_url+element.image",this.state.image_url+element.image)
    //         return (
    //              <View key={index} style={{padding:5}} >
    //                  {/* style={[{height:140},{width:width/2},{flexDirection:'row'},{padding:8}]} */}
    //                    <View style={{justifyContent:'center',alignItems:'center', }}>
    //                         {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:10}}> */}
    //                             <Pressable 
    //                              onPress={() => this.props.navigation.navigate('ListItem')}
    //                             style={styles.boxView} >
    //                                 <Image source ={element.product} style={{height:60,width:60,marginVertical:5,
    //                                 borderRadius:30, alignSelf:'center',}} /> 
    //                                  {/* <View style={{width:'2%'}}></View> */}
    //                                  <Text numberOfLines={1} style={{textAlign:'center',
    //                                  color:'black',
    //                                 //  color:'#006565',
    //                                  letterSpacing:1}}>{element.productname}</Text>

    //                             </Pressable>
    //                     {/* marginBottom:5,color:'#006565', */}



    //                     </View>
    //                             {/* <View style={{width:'2%'}}></View> */}
    //                     {/* </ScrollView>     */}
    //             </View>

    //         );
    //     });
    // };

    list1 = () => {
        return this.state.VariusItems1.map((element, index) => {
            // console.log("this.state.image_url+element.image",this.state.image_url+element.image)
            return (
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ListItem')}
                    key={index} >

                    <View style={[{ height: 140 }, { width: ((width) / 3 - 8) },
                    //  index%2!=0? {paddingLeft:8}:{paddingLeft:0},
                    // {padding:3},
                    { marginHorizontal: 4 }, { marginVertical: 4 }, { backgroundColor: 'white' }, { elevation: 5 }, { borderRadius: 20, },
                    { alignItems: 'center' }, { justifyContent: 'center' }
                    ]}
                    //  key={index} 
                    >

                        {/* <Image source ={element.img} */}
                        <Image source={element.product}
                            style={{
                                height: '60%',
                                width: '80%',
                                marginTop: 5,
                                borderRadius: 15,
                                resizeMode: 'cover'

                            }} />

                        <Text numberOfLines={1} style={{
                            textAlign: 'center',
                            color: 'black',
                            //  color:'#006565',
                            letterSpacing: 1, padding: 5
                        }}>{element.productname}</Text>
                    </View>
                </TouchableOpacity>


            );
        });
    };


    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* <View style={{
                    //  backgroundColor: '#0000cd',
                    // backgroundColor: '#D77FA3',
                     // backgroundColor: '#ff0000',
                    //  backgroundColor: '#e91e63',
                    //    backgroundColor: '#ff5722',
                         backgroundColor: '#4b0082',
                   
                    //   backgroundColor: 'black',
                     height: 65, width: '100%', flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-evenly', elevation: 10
                }}> */}
                <LinearGradient
                    //   start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 0.5}}
                    start={{ x: 0.03, y: 0.0 }} end={{ x: 1, y: 1 }}

                    //   colors={['rgba(0,0,0,.1)','rgba(0,0,0,1)']}
                    // colors={['#9054D7', '#AE42DF', '#EA95BA','#F34C9A', '#EC0D76']}
                    // colors={['#6FD23D','#534CDE', '#7E65E2', '#A885F6', '#7DB2F0',]}
                    colors={[colors.headercolor31, colors.headercolor32,]}
                    style={{

                        backgroundColor: '#4b0082',


                        height: 65, width: '100%', flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'space-evenly', elevation: 10
                    }}

                >

                    <View style={{ hight: 40, width: '13%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu"
                                type='Entypo'
                                style={{ fontSize: 25, color: 'white' }}
                            />
                        </TouchableOpacity>
                    </View>



                    <View style={{
                        backgroundColor: '#fff', height: 40, width: '63%',
                        justifyContent: 'space-evenly', borderRadius: 20, flexDirection: 'row', elevation: 10
                    }}>

                        <Icon name="ios-search-outline" type="Ionicons" style={{ marginTop: 8, }} />

                        <TextInput
                            placeholder="Search"
                            style={{ fontSize: 15, width: '80%', }} />
                    </View>

                    <TouchableOpacity
                        style={{ hight: 40, width: '9%', justifyContent: 'flex-start', alignItems: 'flex-start' }}
                        onPress={() => this.props.navigation.navigate('CartItem')}
                    >
                        <Icon name="shoppingcart"

                            type='AntDesign'
                            style={{ fontSize: 25, color: 'white' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <Icon name="user-circle"
                            type='FontAwesome'
                            style={{ fontSize: 25, color: 'white' }}
                        />
                    </TouchableOpacity>


                </LinearGradient>

                {/* </View> */}




                <View style={{
                    justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 5, backgroundColor: '#fff'
                }}>


                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10, color: 'black' }}>Featured:</Text>

                </View>

                {/* <View style={styles.heading}>
                        <View style={{width:'80%',marginVertical:10}}>
                            <Text style={{marginLeft:10,color:'#006565',fontWeight:'bold',width:150}}>Featured :</Text>
                        </View>
                        
                    </View> */}

                {/* <View style={{width:'98%',borderWidth:0.5,borderColor:'#989B98',alignSelf:'center',marginBottom:5}}></View> */}


                <View style={{
                    backgroundColor: '#fff'
                }} >

                    <ScrollView horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {this.list()}
                    </ScrollView>

                </View>



                {/* <Text style={{ fontSize: 22, fontWeight: 'bold', 
                          left:8,padding: 15,textAlign:'center' }} > Shop By Categories</Text> */}

                {/* <View style={{height:60}}>
<ScrollView horizontal={true} >
<TouchableOpacity style={styles.listView}>
       <Text style={{color:'white'}}>
        All Catagory</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.listView}>
       <Text style={{color:'white'}}>
       Popular Items</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.listView}>
       <Text style={{color:'white'}}>
       Best Value</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.listView}>
       <Text style={{color:'white'}}>
       Whats New</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.listView}>
       <Text style={{color:'white'}}>
       Treding</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.listView}>
       <Text style={{color:'white'}}>
       New Item</Text>
     </TouchableOpacity>
     

</ScrollView> 

</View>
                        */}



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, backgroundColor: '#fff' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10, color: 'black' }}>Category:</Text>
                </View>
                <View style={{ height: 10, width: '100%' }}></View>

                {/* <View style={{width:'90%',borderWidth:0.5,borderColor:'#989B98',alignSelf:'center',marginBottom:5}}></View> */}
                {/* 
                        <View style={styles.heading}>
                        <View style={{width:'80%',marginVertical:10}}>
                            <Text style={{marginLeft:10,color:'#006565',fontWeight:'bold',width:150}}>Category :</Text>
                        </View>
                        
                    </View> */}

                {/* <View style={{width:'98%',borderWidth:0.5,borderColor:'#989B98',alignSelf:'center',marginBottom:5}}></View> */}


                {/* <ScrollView
                    horizontal={false} 
                  
                    > */}
                <                       ScrollView horizontal={false} showsHorizontalScrollIndicator={false}
                    style={{ flex: 2 }}
                >


                    <View style={{
                        justifyContent: 'center', alignItems: 'center',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        backgroundColor: '#fff'
                    }}>
                        {/* <ImageBackground source={require('@asset/gradient1.jpg')} style={{  justifyContent:'center',alignItems:'center',flexWrap:'wrap',
                            flexDirection:'row',}}  > */}
                        {/* <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} 
                        //  style={{marginLeft:10}}
                         >  */}


                        {this.list1()}
                        {/* </ScrollView> */}
                        {/* </ImageBackground> */}

                    </View>

                </ScrollView>


                {/* <View style={{ height: 400, backgroundColor: '#fff' }}>
                                <View style={{ top: 3, flexDirection: 'row', justifyContent: 'space-between', }}>

                                    <Image
                                        source={require('@asset/applewatch.jpg')}
                                        style={{
                                            height: 110, width:100, borderRadius: 20, marginTop: 5, marginLeft: 5
                                        }}
                                    />



                                    <TouchableOpacity
                                    // onPress={() => this.props.navigation.navigate('Bevarage')}
                                    >


                                        <Image
                                            source={require('@asset/lakme.jpg')}
                                            style={{
                                                height: 110, width: 100, borderRadius: 20, marginTop: 5, marginRight: 5
                                            }}
                                        />

                                    </TouchableOpacity>

                                </View>





                                <View style={{ top: 3, flexDirection: 'row', justifyContent: 'space-between', }}>

                                    <Image
                                        source={require('@asset/nyx1.jpg')}
                                        style={{
                                            height: 110, width: 168, borderRadius: 20, marginTop: 5, marginLeft: 5
                                        }}
                                    />

                                    <Image
                                        source={require('@asset/nyx2.jpg')}
                                        style={{
                                            height: 110, width: 168, borderRadius: 20, marginTop: 5, marginRight: 5
                                        }}
                                    />



                                </View>




                                <View style={{ top: 3, flexDirection: 'row', justifyContent: 'space-between', }}>

                                    <Image
                                        source={require('@asset/nivea.jpg')}
                                        style={{
                                            height: 110, width: 168, borderRadius: 20, marginTop: 5, marginLeft: 5
                                        }}
                                    />




                                    <Image
                                        source={require('@asset/nyx14.jpg')}
                                        style={{
                                            height: 110, width: 168, borderRadius: 20, marginTop: 5, marginRight: 5
                                        }}
                                    />



                                </View>



                            </View> */}
                {/* <TouchableOpacity
          activeOpacity={0.7}
        //   onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Icon name="playlist-check"
                            type='MaterialCommunityIcons'
                            // style={{ fontSize: 20, color: 'white' }}
                        
           
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity> */}



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

