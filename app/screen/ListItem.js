import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,TextInput,Image,ImageBackground,Modal,TouchableOpacity, ScrollView, ToastAndroid, Pressable } from 'react-native';
import {  Card, Left, CardItem,Item, Input,Icon,Label,Button, Right,Picker,Container ,Fab} from 'native-base';
//import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
// import NavigationService from '../../service/Navigation';
// import MyFunction from '../../service/MyFunction';
// import Auth from '../../service/Auth';


const {height,width} = Dimensions.get('window');


export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // active: false,

        VariusItems1: [
            { product: require('@asset/flynit.jpg'), productname: 'flynit goddess', brand: "The most popular garden vegetable crop, tomatoes come in a wide range of sizes, shapes and colors.Choose determinate varieties for early harvest or cool conditions. Compact varieties are also good choices for containers and planting in flower beds. Tomatoes are an incredibly versatile food. They are often considered as a vegetable, though ideally they are a citrus fruit. They are a rich source of Vitamin C and help in increasing your immunity.", price: '$120' },
            { product: require('@asset/facewash.jpg'), productname: 'homepod', brand: "HomePod is a breakthrough speaker that adapts to its location and delivers high-fidelity audio wherever it's playing.", price: '$349' },
            { product: require('@asset/electronics.jpg'), productname: 'nivea cream', brand: "NIVEA Creme and NIVEA Soft are suitable for every skin type for care of the face, body and hands.", price: '$65' },
            { product: require('@asset/applewatch.jpg'), productname: 'headphone', brand: "Apple Watch Series 6. From ₹40,900. 44mm or 40mm case size. Always-On Retina display. GPS + Cellular 1 7 6 3 5. GPS. Blood Oxygen app 2 1 5 7 4.", price: '$250' },
            { product: require('@asset/flynit.jpg'), productname: 'Plain Shirt', brand: "Shoes Online. Buy shoes online for Men, Women & Kids at best price in India. Shop from the latest collection of shoes available in various brands, colours ...", price: '$80' },
            { product: require('@asset/pixel.jpg'), productname: 'Watch', brand: "Apple Watch Series 6. From ₹40,900. 44mm or 40mm case size. Always-On Retina display. GPS + Cellular 1 7 6 3 5. GPS. Blood Oxygen app 2 1 5 7 4. ", price: '$75' },
            { product: require('@asset/lipstick.jpg'), productname: 'childname', brand: "Mama n me", price: '50' },
            { product: require('@asset/flynit.jpg'), productname: 'flynit goddess', brand: "Nike", price: '$120' },
            { product: require('@asset/facewash.jpg'), productname: 'homepod from', brand: "Apple", price: '$349' },
            { product: require('@asset/electronics.jpg'), productname: 'nivea cream', brand: "Nivea", price: '$65' },
            { product: require('@asset/applewatch.jpg'), productname: 'headphone', brand: "Boat", price: '$250' },
            { product: require('@asset/flynit.jpg'), productname: 'Plain Shirt', brand: "Raymonds", price: '$80' },
            { product: require('@asset/pixel.jpg'), productname: 'Watch', brand: "Prapti", price: '$75' },
            { product: require('@asset/lipstick.jpg'), productname: 'childname', brand: "Mama n me", price: '50' },
            { product: require('@asset/lipstick.jpg'), productname: 'childname', brand: "Mama n me", price: '50' },
        ],
     


    };
  }

  
  


//    {
    //     this.state.catData.map((item,index)=>{
    //       return(
    //         <Picker.Item label={item.category_name} value={item.category_name} key={index} />
    //       )
    //     })
    //   }
  
//    {
//     this.state.docData.map((item,index)=>{
//     return(
//         <Text style={{color:'red'}} key={index}>{item.specialities_name}</Text>
//         )
//     })
//   } 

  

  list1 = () => {
    return this.state.VariusItems1.map((element, index) => {
        return (
             <View key={index}>

            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40,
            // backgroundColor:'#fffff0',
            backgroundColor:'white',
            // backgroundColor:'seashell'
            }}>
                    <View style={{width:'20%',marginVertical:8}}>
                        <Image source = {element.product} 
                         style={{height:50,width:50,alignSelf:'center'}}
                          />
                    </View>
                    <View style={{width:'80%',flexDirection:'row'}}>
                        <View style={{justifyContent:'center',marginHorizontal:2,width:'65%' }}
                         onTouchEnd={()=>{
                             
                            //  this.setState({modalVisible1:true,newData:element})
                             }}>

                            {/* <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text> */}
                            <Text style={{
                                // color:'#006565',
                                color:'black',
                                fontSize:16,letterSpacing:1}}>{element.productname}</Text> 
                            <Text numberOfLines={1} style={{
                                // color:'#006565',
                                color:'black',
                            fontSize:12, letterSpacing:1}}>{element.brand}</Text> 

                        </View>

                        <View style={{justifyContent:'center',width:'40%',alignItems:'center',}}
                         >
                                <Button  onPress={()=>{
                            
                                // this.props.navigation.navigate('DoctorDetails',{'data_new':this.state.newData,'data_new1':this.state.relation})
                            }} 
                                style={{justifyContent:'center',width:'55%',alignSelf:'center',alignItems:'center',height:35,
                                borderRadius:7,
                                // backgroundColor:'#F3C714',
                                // backgroundColor:'#228b22',
                                // backgroundColor:'#0000cd',
                                // backgroundColor:'#00d084',
                                // backgroundColor:'#ff4500',
                                //    backgroundColor: '#e91e63',
                            //  backgroundColor: '#ff5722',
                          backgroundColor: '#4b0082',

                                elevation:5}}>
                                    <Text style={{color:'#FFFFFF'}}>Select</Text>
                                </Button>
                        </View>
                    </View>
                </Card>
                </View>

               
            </View>
        );
    });
};





  render() {
    return (

        <Container style={{flex:1,backgroundColor:'#EFEDED'}}>
      <View style={styles.mainview}>

       
                <View style={{
                       // backgroundColor: '#ff0000',
                    // backgroundColor: '#D77FA3',
                    // backgroundColor: '#0000cd',
                        //   backgroundColor: '#e91e63',
                            //  backgroundColor: '#ff5722',
                            backgroundColor: '#4b0082',
                 
                     height: 65, width: '100%', flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-evenly', elevation: 10
                }}>
                    <Pressable 
                   onPress={() => this.props.navigation.navigate('Home')}
                    style={{ hight: 40, width: '15%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon
                         
                         name="arrow-back"
                            type='Ionicons'
                            style={{ fontSize: 25, color: 'white' }}
                        />
                    </Pressable>

                   

                    <View style={{
                        backgroundColor: '#fff', height: 40, width: '68%',
                        justifyContent: 'space-evenly',  borderRadius: 20, flexDirection: 'row', elevation: 10,
                    }}>

                       

                        <TextInput
                            placeholder="Search"
                            style={{ fontSize: 15, width: '80%', textAlign:'center',marginLeft:8}} />


                            <View style={{
                        height: 40, width: '15%',justifyContent: 'center',
                          borderRadius: 20, flexDirection: 'row', }}>

                             <Icon name="ios-search-outline" type="Ionicons" style={{ alignSelf:'flex-end' ,alignItems:'flex-end',marginBottom:5}} />

                             </View>
                    </View>

                    <TouchableOpacity
                        style={{ hight: 40, width: '15%', justifyContent: 'center', alignItems: 'center' }}
                    // onPress={() => this.props.navigation.navigate('login')}
                    >
                        <Icon name="shoppingcart"

                            type='AntDesign'
                            style={{ fontSize: 25, color: 'white' }}
                        />
                    </TouchableOpacity>

                </View>



          {/* <View style={{marginTop:10,marginLeft:30,marginVertical:5}}>
              <Text style={{color:'#1175AE',fontSize:16,fontWeight:'bold'}}>All Products</Text>
          </View> */}
          <ScrollView>
              
         
              {this.list1()}

           {/* <View style={{justifyContent:'center',alignItems:'center'}}>
            <Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40}}>
                    <View style={{width:'20%',marginVertical:8}}>
                        <Image source = {require('../../assests/cartoon1.png')}  style={{height:50,width:50,alignSelf:'center'}} />
                    </View>
                    <View style={{width:'80%',flexDirection:'row'}}>
                        <View style={{justifyContent:'center',marginHorizontal:2,width:'80%' }}
                         onTouchEnd={()=>this.props.navigation.navigate('DoctorDetails')}>

                            <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text>

                            
                            <Text style={{color:'#1175AE',fontSize:12}}>Physican ....</Text> 

                        </View>

                        <View style={{justifyContent:'center',width:'15%',alignItems:'center'}}
                         onTouchEnd={()=>this.props.navigation.navigate('DoctorDetails')}>
                                <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:30}}/>
                        </View>
                    </View>
                </Card>
               

               
            
                  <Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40}}>
                     <View style={{width:'20%',marginVertical:8}}>
                         <Image source = {require('../../assests/cartoon1.png')}  style={{height:50,width:50,alignSelf:'center'}} />
                     </View>
                     <View style={{width:'80%',flexDirection:'row'}}>
                         <View style={{justifyContent:'center',marginHorizontal:2,width:'80%'}}>
                             <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text>
                             <Text style={{color:'#1175AE',fontSize:12}}>Physican ....</Text> 
                         </View>
                         <View style={{justifyContent:'center',width:'15%',alignItems:'center'}}>
                             <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:30}}/>
                         </View>

                     </View>
                 </Card><Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40}}>
                     <View style={{width:'20%',marginVertical:8}}>
                         <Image source = {require('../../assests/cartoon1.png')}  style={{height:50,width:50,alignSelf:'center'}} />
                     </View>
                     <View style={{width:'80%',flexDirection:'row'}}>
                         <View style={{justifyContent:'center',marginHorizontal:2,width:'80%'}}>
                             <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text>
                             <Text style={{color:'#1175AE',fontSize:12}}>Physican ....</Text> 
                         </View>
                         <View style={{justifyContent:'center',width:'15%',alignItems:'center'}}>
                             <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:30}}/>
                         </View>

                     </View>
                 </Card><Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40}}>
                     <View style={{width:'20%',marginVertical:8}}>
                     <Image source = {require('../../assests/cartoon1.png')}  style={{height:50,width:50,alignSelf:'center'}} />
                     </View>
                     <View style={{width:'80%',flexDirection:'row'}}>
                         <View style={{justifyContent:'center',marginHorizontal:2,width:'80%'}}>
                             <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text>
                             <Text style={{color:'#1175AE',fontSize:12}}>Physican ....</Text> 
                         </View>
                         <View style={{justifyContent:'center',width:'15%',alignItems:'center'}}>
                             <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:30}}/>
                         </View>

                     </View>
                 </Card><Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40}}>
                     <View style={{width:'20%',marginVertical:8}}>
                         <Image source = {require('../../assests/cartoon1.png')}  style={{height:50,width:50,alignSelf:'center'}} />
                    </View>
                     <View style={{width:'80%',flexDirection:'row'}}>
                         <View style={{justifyContent:'center',marginHorizontal:2,width:'80%'}}>
                             <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text>
                             <Text style={{color:'#1175AE',fontSize:12}}>Physican ....</Text> 
                         </View>
                         <View style={{justifyContent:'center',width:'15%',alignItems:'center'}}>
                             <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:30}}/>
                         </View>

                     </View>
                 </Card>
                 <Card style={{flexDirection:'row',borderRadius:9,elevation:5,width:width-40}}>
                     <View style={{width:'20%',marginVertical:8}}>
                         <Image source = {require('../../assests/cartoon1.png')}  style={{height:50,width:50,alignSelf:'center'}} />
                     </View>
                     <View style={{width:'80%',flexDirection:'row'}}>
                         <View style={{justifyContent:'center',marginHorizontal:2,width:'80%'}}>
                             <Text style={{color:'#1175AE',fontSize:16}}>General Physician/Internal ....</Text>
                             <Text style={{color:'#1175AE',fontSize:12}}>Physican ....</Text> 
                         </View>
                         <View style={{justifyContent:'center',width:'15%',alignItems:'center'}}>
                             <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:30}}/>
                         </View>

                     </View>
                 </Card>   

           

                </View>  */}

            </ScrollView>
            

          
        
        
      </View>
      </Container>
    );
  }
}


const styles=StyleSheet.create({

    mainview:{
        flex:1,
        backgroundColor:'#fff'
    },
 
    
})
