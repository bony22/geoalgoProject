import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Right, Tab, Tabs, Button } from 'native-base';

const { height, width } = Dimensions.get('window');

export default class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainview}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: 100,  }}>
            <Image source={ require('@asset/apparel.jpg')}
              style={{ height: 90, width: 98, alignSelf: 'center', borderRadius: 10 }}
            />
          </View>
          <View style={{ width: '68%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: 80 }}>
            {/* <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}> */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>BIBA Apperal</Text>
            {/* </View> */}

            <View style={{ flexDirection: 'row',  }}>
             
              <View style={{ width: '5%' }}></View>

              <Button


                style={{
                  justifyContent: 'center', alignItems: 'center',
                  borderRadius: 7, backgroundColor: '#C36BB9', elevation: 5, height: 20, padding: 10, marginTop: 20
                }}>
                <Text style={{ color: 'white', flexGrow: 1, textAlign: 'center' }}>S</Text>
              </Button>
              <View style={{ width: '5%' }}></View>

              <Button


                style={{
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


            </View>


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
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '60%', }}>

            <Button
              //  onPress={() => this.showConfirm()}

              style={{
                justifyContent: 'center', width: '55%', alignSelf: 'center', alignItems: 'center', height: 35,
                borderRadius: 7,

                backgroundColor: '#C36BB9',

              }}>
              <Text style={{ color: '#FFFFFF' }}>Add to Cart</Text>

            </Button>

          </View>

        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80, marginLeft: 30}}>
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

        </View>











      </View>
    );
  }
}



const styles = StyleSheet.create({

  mainview: {
    flex: 1,
    backgroundColor: 'seashell',
   // width: width - 30,
    borderWidth:0.1,


  },

})