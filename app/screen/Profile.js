import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, ToastAndroid, Pressable, ImageBackground,
    StatusBar
} from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Picker, DatePicker, Header, Title, Body, } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';
import { NavigationActions } from 'react-navigation';

// import moment from 'moment';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import ImagePicker from 'react-native-image-crop-picker';
// import Navigation from '../../service/Navigation';
// import Auth from '../../service/Auth';
// import MyFunction from '../../service/MyFunction';
// import {connect} from 'react-redux';
// import {editProfile} from '../../Redux/Action'
// import LoadImage from '../../components/LoadImage/LoadImage';

const backAction = NavigationActions.back({
    // key: 'Profile',
});

const { width, height } = Dimensions.get("window")

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dob: '',
            startDatePickerVisible: false,
            imagechoose: {
                path: '',
                mime: 'image/jpg'
            },
            userdata: {},
            profile: [],
            // id:1,
            name: '',
            email: '',
            address: '',
            pincode: '',
            // gender:'',
            male: false,
            female: false,
            dob: '',
            image_url: '',
            preview: '',



        };
    }


    // async componentDidMount() {

    //     await this.userPhone()
    //     //await this.myprofileFetch1()
    //     await this.fetchprofile1()

    // }


    userPhone = async () => {

        let result = await Auth.getAccount();
        // console.log('userdata',result)

        this.setState({
            userdata: result

        })

    }




    // myprofileFetch1 = async () => {


    //     let data = { id: this.state.userdata.id }
    //     //    console.log('kdshgvfhkds',data)

    //     let result1 = await MyFunction.myprofileFetch(data);
    //     // console.log('result222',result1)

    //     if (result1 && result1.status) {
    //         this.setState({
    //             male: result1.data.gender == 'male',
    //             female: result1.data.gender == 'female',

    //             profile: result1.data,
    //             image_url: result1.image_url

    //         })
    //         // console.log('tttttttt',this.state.profile)
    //     }


    //     else {
    //         ToastAndroid.show(' something wrong ', ToastAndroid.SHORT)
    //     }
    // }
    fetchprofile1 = async () => {



        this.setState({
            male: this.props.profile.gender == 'male',
            female: this.props.profile.gender == 'female',
            //image_url: this.state.url.image

        })

    }



    profileEdit1 = async () => {



        if (this.props.profile.pincode != '' && this.props.profile.pincode.length == 6) {

            // let pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.][a-z]{2,5}/g ;

            // if (pattern.test(this.props.profile.email) !== true) {
            // ToastAndroid.show("invalid Email Id !", ToastAndroid.SHORT);
            // return false;
            // }

            let data1 = {

                id: this.state.userdata.id,
                name: this.props.profile.name,
                email: this.props.profile.email,
                address: this.props.profile.address,
                //images: this.props.profile.image,
                //gender:this.props.profile.gender,
                gender: this.state.male ? 'male' : 'female',
                //gender: 'male',
                pin: this.props.profile.pincode,
                dob: this.props.profile.dob,

            }
            console.log('profile_edit', data1)

            let result3 = await MyFunction.profileEdit(this.state.imagechoose, data1);
            console.log('result_edit', result3)


            if (result3 && result3.status) {

                // this.setState({
                //     male: result3.data.gender == 'male',
                //     female: result3.data.gender == 'female',
                //     // profile: result3.data,
                //     // image_url: result3.image_url

                // })
                this.props.dispatch(editProfile(result3.data))
                ToastAndroid.show(' Your Profile Updated Successfully ', ToastAndroid.SHORT)
                Navigation.navigate('OtherDetails');
            }

            else {
                this.setState({
                    imagechoose: {
                        path: '',
                        mime: 'image/jpg'
                    }

                })
                ToastAndroid.show(' Something Wrong ', ToastAndroid.SHORT)

            }
        } else {
            ToastAndroid.show('Your Pincode must be in 6 digits ', ToastAndroid.SHORT)
        }

    }



    render() {
        return (
            <View style={styles.container}>

                {/* <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD"/> */}


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
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Profile</Text>
                    </View>


                </LinearGradient>

                {/* <View style={styles.Upper}>
                        <Pressable onPress={() => this.props.navigation.navigate('OtherDetails')}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
                                <Icon name="ios-arrow-back" type='Ionicons'
                                    style={{ color: "#1273de", fontSize: 25, }} />
                            </View>
                        </Pressable>
                        <View style={{ width: '60%', marginTop: 18, }}>
                            <Text style={{ color: '#006B15', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>My Profile</Text>
                        </View>

                    </View> */}







                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <View style={{ alignSelf: "center" }}> */}
                    {/* <View > */}
                    {/* <Image source={require('../../assests/profile-pic.jpg')} style={styles.image} resizeMode="cover"></Image> */}


                    {/* <View style={styles.profileImage}>
                          

                            <ImageBackground source={require('../assets/profile-pic.jpg')} style={[styles.image]} resizeMode="cover">

                            
                               </ImageBackground>

                        </View> */}


                    {/* <Image source={{ uri: this.state.preview }}  */}
                    {/* // // <Image source={{ uri: this.state.image_urll  }}  */}
                    {/* // style={styles.image} resizeMode="cover" /> */}


                    {/* {this.state.profile.image != ''?(

                                <View style={styles.profileImage}><Text>{this.state.preview}</Text></View>

                            ):(
                                <Image source={{ uri: this.state.image_urll + this.state.profile.image }} 
                                style={styles.image} resizeMode="cover" />


                            )
                            
                        } */}





                    {/* </View> */}




                    {/* <TouchableOpacity onPress={() => this.imageHandler()}>
                            <View style={[styles.add, { marginLeft: 100, bottom: 30 }]}>
                                <Icon name="ios-add-sharp"
                                    style={{ color: "#DFD8C8", fontSize: 40, marginTop: 3, marginLeft: 2 }} />
                            </View>
                        </TouchableOpacity>

                    </View> */}


                    <View style={styles.viewCard}>
                        {/* <View style={{width:50,height:50}}>
                </View> */}
                        <Card style={{ borderRadius: 10 }}>
                            {/* <Icon  />
                             */}

                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, marginTop: 10, width: width - 60, alignSelf: 'center' }}>
                                <Label style={{ fontWeight: 'bold', width: 100, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Full Name</Label>



                                {/* <Input
                                    onChangeText={(value) => 
                                        
                                        this.setState({ email: email })
                                    }
                                    value={this.state.profile.email}

                                    placeholder='firstname' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} /> */}

                                <Input
                                    onChangeText={(value) => this.setState({ phoneNo: value })}
                                    value={this.state.phoneNo}

                                    placeholder='name' placeholderTextColor="#B0B3B0" keyboardType="number-pad" maxLength={10}
                                    style={{ fontSize: 14 }} />


                            </Item>

                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center' }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Phone No</Label>
                                <View style={{ width: '100%' }}>
                                    {/* <Text style={{ color: '#767675', marginTop: 10, marginLeft: 6}}></Text> */}
                                </View>
                                <Input
                                    // onChangeText={(value) => this.setState({ firstName: value })}
                                    // value={this.state.firstName}

                                    placeholder='Phone No' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item>

                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center', }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Email</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ firstName: value })}
                                    value={this.state.firstName}

                                    placeholder='name@email.com' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />

                            </Item>
                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center', }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Address</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ firstName: value })}
                                    value={this.state.firstName}

                                    placeholder='address' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item>

                            <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center', marginBottom: 40 }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Pincode</Label>

                                <Input
                                    onChangeText={(value) => this.setState({ firstName: value })}
                                    value={this.state.firstName}

                                    placeholder='pincode' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item>


                            {/* <View style={{ marginLeft: 10, height: 20, marginTop: 20 }}>
                                <Label style={{ fontWeight: 'bold', width: 120, color: '#1273de',
                                 fontSize: 14, marginLeft: 16, marginBottom: 50 }}>Gender</Label>

                            </View> */}

                            {/* <View style={{ marginBottom: 20, marginLeft: 30, flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                <View style={{ width: '30%', }}>
                                    <Button
                                        onPress={() => this.setState({ male: true, female: false })}

                                        style={{
                                            justifyContent: 'center', alignItems: 'center',
                                            borderRadius: 7, backgroundColor: this.state.male ? '#F3C714' : '#FFFFFE', elevation: 5,
                                        }}>
                                        <Text style={{ color: '#1273de', fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>Male</Text>

                                    </Button>
                                </View>

                                <View style={{ width: '5%' }}></View>

                                <View style={{ width: '30%' }}>
                                    <Button
                                        onPress={() => this.setState({ female: true, male: false })}

                                        style={{
                                            justifyContent: 'center', alignItems: 'center',
                                            borderRadius: 7, backgroundColor: this.state.female ? '#F3C714' : '#FFFFFE', elevation: 5
                                        }}>
                                        <Text style={{ color: '#1273de', fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>Female</Text>
                                    </Button>
                                </View>
                            </View> */}






                            {/* <Item stackedLabel style={{ marginBottom: 20, borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <Label style={{ fontWeight: 'bold', width: 120, color: '#1273de', fontSize: 14, marginLeft: 6 }}>Date of Birth</Label> */}


                            {/* <View style={styles.container1}>
                                    <Text style={{ color: 'grey' }}
                                        onPress={() => this.setState({ startDatePickerVisible: true })}
                                    >{
                                            this.state.dob == '' ? 'dd/mm/yyyy' : this.state.dob
                                     }</Text> 
                                 <Icon name="clock" type="Entypo"   
                        style={{fontSize:18,color:'grey'}}
                    /> 
                                 </View>
                                 
                                <DateTimePickerModal
                                    isVisible={this.state.startDatePickerVisible}
                                    mode="date"
                                    onConfirm={this.handleConfirm}
                                    onCancel={() => this.setState({ startDatePickerVisible: false })}
                                />    */}





                            {/* </Item> */}



                            {/* <Item stackedLabel style={{ borderBottomColor: '#1273de', borderBottomWidth: 1.8, width: width - 60, alignSelf: 'center', marginBottom: 40 }}>
                                <Label style={{ fontWeight: 'bold', width: 80, color: '#1273de', fontSize: 14 }}>Email</Label>
                                <Input
                                    onChangeText={(value) => this.setState({ email: value })}
                                    value={this.state.email}

                                    placeholder='name@email.com' placeholderTextColor="#B0B3B0" style={{ fontSize: 14 }} />
                            </Item> */}

                        </Card>
                        <View style={{ marginVertical: 20, flexDirection: 'row', width: '100%', alignSelf: 'center', bottom: -10, justifyContent: 'center' }}>
                            {/* <View style={{ width: '45%', justifyContent: 'center' }}>

                                <Button
                                    onPress={() => this.props.navigation.navigate('Home')}


                                    style={{ justifyContent: 'center', alignSelf: 'center', borderRadius: 7, backgroundColor: '#1273de', elevation: 5 }}>
                                    <Text
                                        //onPress={() => this.props.navigation.navigate('ShowDetails')}
                                        style={{ color: '#FFFDF3', fontWeight: 'bold', flexGrow: 1, textAlign: 'center', fontSize: 16 }}>Cancel</Text>
                                </Button>
                            </View> */}



                            <TouchableOpacity
                                //  onPress={() => this.addtoCart()}

                                style={{ justifyContent: 'center', alignItems: 'center', width: '60%', }}>

                                <LinearGradient


                                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                                    colors={[colors.headercolor31, colors.headercolor32,]}
                                    style={{
                                        justifyContent: 'center', width: '55%', alignSelf: 'center', alignItems: 'center', height: 50,
                                        borderRadius: 7, backgroundColor: '#C36BB9',
                                    }} >

                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>Cancel</Text>

                                </LinearGradient>
                            </TouchableOpacity>


                            {/* <View style={{ width: '5%' }}></View> */}




                            {/* <View style={{ width: '45%' }}>

                            

                                <Button

                                    style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', borderRadius: 7, backgroundColor: '#1273de', elevation: 5 }}

                                   

                                  //  onPress={() => this.profileEdit1()}
                                >
                                  

                                  
                                    <Text
                                        
                                        style={{
                                            color: '#FFFDF3', fontWeight: 'bold', flexGrow: 1, textAlign: 'center',
                                            fontSize: 17
                                        }}>Save</Text>
                              

                                </Button>
                                
                            </View>  */}

                            <TouchableOpacity
                                //  onPress={() => this.addtoCart()}

                                style={{ justifyContent: 'center', alignItems: 'center', width: '60%', }}>

                                <LinearGradient


                                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}

                                    colors={[colors.headercolor31, colors.headercolor32,]}
                                    style={{
                                        justifyContent: 'center', width: '55%', alignSelf: 'center', alignItems: 'center', height: 50,
                                        borderRadius: 7, backgroundColor: '#C36BB9',
                                    }} >

                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>Save</Text>

                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </View>






                </ScrollView>
            </View>
        );
    }
}

// const mapStateToProps=(state)=>{
//     // console.log("state.ProfileRedux.profile",state.ProfileRedux.profile)
//       return{

//           profile:state.ProfileRedux.profile,
//           image_url:state.ProfileRedux.image_url,


//       }
//   }

//   export default connect(mapStateToProps)(MyProfile);





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D5DBE0"

    },

    image: {
        flex: 1,
        // height: undefined,
        // width: undefined
        width: 160,
        height: 160,
        borderRadius: 100,
        //overflow: "hidden",
        // marginTop: 15,

    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        marginHorizontal: 16
    },

    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 15,
    },


    add: {
        backgroundColor: "#41444B",
        // position: "absolute",
        // bottom: 0,
        // right: 0,
        width: 45,
        height: 45,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
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

    viewCard: {
        marginTop: 18,
        marginVertical: 15,
        justifyContent: 'center',
        width: width - 15,
        alignSelf: 'center',


    },

    container1: {
        flexDirection: 'row',
        height: 30,
        width: '50%',
        // borderWidth:1,
        borderColor: '#D5D5D5',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        marginTop: 5
    }


});