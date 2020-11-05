import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, ImageBackground, Modal, TouchableOpacity, ScrollView, ToastAndroid, Pressable } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Picker, Container, Fab, ScrollableTab } from 'native-base';
import RangeSlider from 'rn-range-slider';
import SelectMultiple from 'react-native-select-multiple';
import { colors } from '@Component/Color';
import LinearGradient from 'react-native-linear-gradient';
//import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
// import NavigationService from '../../service/Navigation';
// import MyFunction from '../../service/MyFunction';
// import Auth from '../../service/Auth';


const { height, width } = Dimensions.get('window');
const Brands = ['Adidas', 'Nike', 'Woodland', 'Caprese', 'Maybline', 'MAC', 'Lakme', 'Blommingdale', 'Walmart']
const Offers = ['10', '20', '30', '40', '50']

export default class ProductFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rangeLow: 20,
            rangeHigh: 1000,
            selectedBrands: [],
            selectedOffers: [],

        };
    }
    onSelectionsChange = (selectedBrands) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedBrands })
    }
    onSelectionsChange1 = (selectedOffers) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedOffers })
    }
    hideModal() {
        this.setState({ modalVisible_new: false });
    }


    render() {
        return (
            <View style={{
                flex: 1,

            }}>
                {/* <StatusBar barStyle="dark-content" backgroundColor='white' /> */}



                <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white' }}>

                    {/* <View style={{ height: 65, elevation: 10, width: '100%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor:colors.headercolor, }}> */}
                    <LinearGradient
                        // colors={[colors.headercolor21,colors.headercolor22,colors.headercolor23,colors.headercolor24]}
                        colors={[colors.headercolor31, colors.headercolor32,]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}

                        style={{
                            height: 65, elevation: 10, width: '100%', alignItems: 'center',
                            justifyContent: 'flex-start', flexDirection: 'row',
                        }}>

                        <Pressable style={{ marginLeft: 15, width: '40%', justifyContent: "flex-start", flexDirection: 'row' }}
                            onPress={() => this.props.navigation.navigate('ListItem')}
                        >
                            {/* <Icon name='arrow-back' type='Ionicons' style={{
                                
                                fontSize: 25,
                                color: 'white',

                            }} /> */}
                        </Pressable>


                        <Text style={{

                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>Filter</Text>

                    </LinearGradient>



                    {/* </View> */}

                    <ScrollView style={{ width: '100%', flex: 1 }}
                        showsVerticalScrollIndicator={false}>

                        <View style={{ height: 160, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 30, width: '100%', alignItems: 'center', justifyContent: 'flex-start', }}>
                                <Text style={{

                                    fontSize: 20,
                                    color: 'black',
                                    textAlign: 'center'
                                }}>Price</Text>
                            </View>
                            <View style={{ height: 70, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                                <RangeSlider
                                    style={{ width: '80%', height: 70 }}
                                    gravity={'center'}
                                    min={20}
                                    max={1000}
                                    step={20}
                                    selectionColor="#002366"
                                    blankColor="#999999"
                                    textFormat="$:%d"
                                    onValueChanged={(low, high, fromUser) => {
                                        this.setState({ rangeLow: low, rangeHigh: high })
                                        // console.log(this.state.rangeLow, this.state.rangeHigh)
                                    }}

                                />


                            </View>
                        </View>
                        <View style={{
                            marginTop: 10,
                            height: 1,
                            width: '100%',
                            backgroundColor: '#cccccc',
                            alignSelf: 'stretch',
                            opacity: .4

                        }} />
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 30, width: '100%', alignItems: 'center', justifyContent: 'flex-start', }}>
                                <Text style={{

                                    fontSize: 20,
                                    color: 'black',
                                    textAlign: 'center'
                                }}>Brands</Text>
                            </View>
                            {/* <ScrollView style={{width:'100%',}}> */}
                            <SelectMultiple
                                items={Brands}
                                selectedItems={this.state.selectedBrands}
                                onSelectionsChange={this.onSelectionsChange}
                                style={{ flex: 1, width: '100%', }}
                            />
                            {/* </ScrollView> */}
                        </View>
                        <View style={{ height: 260, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 30, width: '100%', alignItems: 'center', justifyContent: 'flex-start', }}>
                                <Text style={{

                                    fontSize: 20,
                                    color: 'black',
                                    textAlign: 'center'
                                }}>Offer %</Text>
                            </View>
                            <ScrollView style={{ width: '100%', }}>
                                <SelectMultiple
                                    items={Offers}
                                    selectedItems={this.state.selectedOffers}
                                    onSelectionsChange={this.onSelectionsChange1}
                                    style={{ height: 200, width: '100%' }}
                                />
                            </ScrollView>
                        </View>

                    </ScrollView>
                    <View style={{
                        height: 65, width: '70%', alignItems: 'center',
                        justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', padding: 15
                    }}>
                        <LinearGradient
                            // colors={[colors.headercolor21,colors.headercolor22,colors.headercolor23,colors.headercolor24]}
                            colors={[colors.headercolor31, colors.headercolor32,]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}

                            style={{
                                height: 40, width: '30%', alignItems: 'center', justifyContent: 'center',
                                borderRadius: 9, elevation: 5
                            }}>
                            <TouchableOpacity>
                                <Text style={{

                                    fontSize: 15,
                                    color: 'white',
                                    textAlign: 'center'
                                }}>Apply</Text>

                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient
                            // colors={[colors.headercolor21,colors.headercolor22,colors.headercolor23,colors.headercolor24]}
                            colors={[colors.headercolor31, colors.headercolor32,]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}

                            style={{
                                height: 40, width: '30%', alignItems: 'center', justifyContent: 'center',
                                borderRadius: 9, elevation: 5
                            }}>
                            <TouchableOpacity>
                                <Text style={{

                                    fontSize: 15,
                                    color: 'white',
                                    textAlign: 'center'
                                }}>Cancel</Text>
                                {this.props.hideModal}
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>



                </View>
            </View>
        );
    }
}
