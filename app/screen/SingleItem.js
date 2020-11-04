import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Right, Tab, Tabs, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';

const { height, width } = Dimensions.get('window');

export default class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid:this.props.id,
      details:''

    };
  }

  async componentDidMount(){
   
    console.log('object45345345345',this.state.bid)
    await this.singleItem1();
   
}

// listItem1 = async() =>{

//     let resp =await fetch('http://www.adroitinclusive.com:81/data.php')
//     let respJson= await resp.json()

//     this.setState({
//         data:respJson,
//         indicatorLoading:false,
    
      
//     })
//     console.log(respJson)
// }

singleItem1 = async () => {
let data = {
   action:'select',
   bID: this.state.bid

}
  
  const rawResponse = await fetch('http://www.adroitinclusive.com:81/data.php', {
    
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    // body:data
  });
  const content = await rawResponse.json();
  
  console.log(this.state.details);
  console.log('object22255225',content)

  

  var res = content.reduce((a, b) => ({ ...a, ...b }))
  this.setState({
    details:res
  })   
  console.log('hvhkvhvk',res)

};

addtoCart =()=>{

  this.props.hideModal1()
  this.props.navigation.navigate('CartItem')

}




  render() {
    return (
      <View style={styles.mainview}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: 100,  }}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQC0Yry5sRpC6f-RSV6cdSmf9ooukKOYk8CQ&usqp=CAU'}}
              style={{ height: 90, width: 90, alignSelf: 'center', borderRadius: 10 ,}}
            />
          </View>
          <View style={{ width: '5%' }}></View>
          <View style={{ width: '60%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: 80 }}>
            {/* <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}> */}
            <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: 'bold', color:'black'}}>{this.state.details.name}</Text>
            {/* </View> */}



            {/* <View style={{ flexDirection: 'row',  }}>
             
              <View style={{ width: '5%' }}></View>

              <Button


                style={{
                  justifyContent: 'center', alignItems: 'center',
                  borderRadius: 7, backgroundColor: '#4da6ff', elevation: 5, height: 20, padding: 10, marginTop: 20
                }}>
                <Text style={{ color: 'white', flexGrow: 1, textAlign: 'center' }}>S</Text>
              </Button>

              <View style={{ width: '5%' }}></View>

              <Button style={{
                  justifyContent: 'center', alignItems: 'center',
                  borderRadius: 7, backgroundColor: '#C36BB9', elevation: 5, height: 20, padding: 10, marginTop: 20
                }}>
                <Text style={{ color: 'white', flexGrow: 1, textAlign: 'center' }}>M</Text>
              </Button>
              <View style={{ width: '5%' }}></View>

              <Button


                style={{
                  justifyContent: 'center', alignItems: 'center',
                  borderRadius: 7, backgroundColor: '#C36BB9', elevation: 5, height: 20, padding: 10, marginTop: 20
                }}>
                <Text style={{ color: 'white',  flexGrow: 1, textAlign: 'center' }}>L</Text>
              </Button>
              <View style={{ width: '5%' }}></View>

              <Button


                style={{
                  justifyContent: 'center', alignItems: 'center',
                  borderRadius: 7, backgroundColor: '#C36BB9', elevation: 5, height: 20, padding: 10, marginTop: 20
                }}>
                <Text style={{ color: 'white', flexGrow: 1, textAlign: 'center' }}>XL</Text>
              </Button>
              <View style={{ width: '5%' }}></View>


            </View> */}


          </View>
        </View>

        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 20, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: '35%', justifyContent: 'center', alignItems: 'center', marginLeft: 25, marginTop: 8 }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#000000' }}>

              <Icon
                //  onPress={()=> this.decreaseQty(item)}
                name="minussquareo" type="AntDesign" style={{ color: '#000000', fontSize: 22 }} />

            </TouchableOpacity>

            <Text style={{
              borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#000000', paddingHorizontal: 7,
              paddingTop: 3, color: '#000000', fontSize: 13
            }}>1</Text>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#000000' }}
            // onPress={()=> this.increaseQty(item)}
            >

              <Icon
                name="plussquareo" type="AntDesign" style={{ color: '#000000', fontSize: 22 }} />
            </TouchableOpacity>

          </View>
          <TouchableOpacity
           onPress={() => this.addtoCart()}
          
          style={{ justifyContent: 'center', alignItems: 'center', width: '60%', }}>

          <LinearGradient


            start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

            colors={[colors.headercolor31, colors.headercolor32, ]}
            style={{
              justifyContent: 'center', width: '55%', alignSelf: 'center', alignItems: 'center', height: 35,
                borderRadius: 7, backgroundColor: '#C36BB9',}} >

              <Text style={{ color: '#FFFFFF' }}>Add to Cart</Text>

          </LinearGradient>
          </TouchableOpacity>

         

        </View>

        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row',
          marginLeft:50,marginTop:20}}>
        <Text style={{ color: 'black',fontWeight:'bold',fontSize:15}}>Price :</Text>
        <Text style={{ color: 'black' }}> {this.state.details.price}</Text>
        </View>



        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 50, marginLeft: 30}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10, color: 'black' }}>Description:</Text>
        </View>

        <View style={{
          width: '80%', borderWidth: 0.5, borderColor: '#4b0082', height: 120, borderRadius: 15, marginTop: 12, justifyContent: 'center',
          alignSelf: 'center', alignItems: 'center'
        }}>

          <Text
            multiline={true}
            numberOfLines={4}
            style={{ color: 'black', fontSize: 15,padding:10 }}>
           Biba Apparels is an Indian fashion brand for women and girls founded by 
           Meena Bindra in 1988 from her home in New Delhi, India.It has more than 150 brand outlets and 225 multi-brand outlets.
            Biba recorded sales of INR 600 crore in 2014-15.
            </Text>

          {/* <Text
                      multiline={true}
                      numberOfLines={4}
                      style={{ color: 'black', fontSize: 15,padding:10 }}>{this.state.details.type}</Text> */}

        </View>











      </View>
    );
  }
}



const styles = StyleSheet.create({

  mainview: {
    flex: 1,
    backgroundColor: '#fff',
    width: width - 30,
   // borderWidth:0.1,
   borderRadius:10


  },

})