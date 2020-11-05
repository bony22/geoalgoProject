import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert,Pressable,ToastAndroid,
  StatusBar
} from 'react-native';
import {  Card, Left, CardItem,Item, Input,Icon,Label,Right,Tab, Tabs } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@Component/Color';
import { NavigationActions } from 'react-navigation';
// import {connect} from 'react-redux';
// import MyFunction from '../../service/MyFunction';
// import Auth from '../../service/Auth';
// import {deleteEcom,updateEcom} from '../../Redux/Action';
// import LoadImage from '../../components/LoadImage/LoadImage';


const backAction = NavigationActions.back({
  // key: 'Profile',
});

export default class CartItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectAll: false,
		//	cartItemsIsLoading: true,
    EcartItems: [],
      cartData:[],
      image_url:'',
      deletecart:{},
      refresh : false,
      qty:1,
      refresh1:false,
      total:0,
      subtotal:'',
			cartItems:[
				{itemId: "501436323", name: "Power Wheels Dune Racer Extreme", thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", color: "Red", qty: 1, salePrice: "105", checked: 1},
				{itemId: "35031861", name: "Better Homes & Gardens Leighton Twin Over Twin Wood Bunk Bed, Multiple Finishes", thumbnailImage: "https://i5.walmartimages.com/asr/4aedb609-4b61-4593-ad8a-cdc8c88696b1_1.3f505ce3d55db4745cf4c51d559994dc.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Green", salePrice: "199", checked: 0},
				{itemId: "801099131", name: "LEGO Star Wars 2019 Advent Calendar 75245 Holiday Building Kit", thumbnailImage: "https://i5.walmartimages.com/asr/9a8ea1ab-311d-455c-bda8-ce15692a8185_3.208d48e0260f80891d32b351cb116a4b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Blue", salePrice: "27.99", checked: 1},
				{itemId: "42608079", name: "Little Tikes Cape Cottage Playhouse, Tan", thumbnailImage: "https://i5.walmartimages.com/asr/2654cd64-1471-44af-8b0c-1debaf598cb3_1.c30c481d1ac8fdd6aa041c0690d7214c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", color: "Purple", qty: 1, salePrice: "129.99", checked: 0},
                {itemId: "247714372", name: "HP 14\" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm", thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Black", salePrice: "269", checked: 1},
                {itemId: "42608079", name: "Little Tikes Cape Cottage Playhouse, Tan", thumbnailImage: "https://i5.walmartimages.com/asr/2654cd64-1471-44af-8b0c-1debaf598cb3_1.c30c481d1ac8fdd6aa041c0690d7214c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", color: "Purple", qty: 1, salePrice: "129.99", checked: 0},
				{itemId: "247714372", name: "HP 14\" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm", thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Black", salePrice: "269", checked: 1}
            ]	
			
		}
  }

//   async componentDidMount(){ 
//     await this.userIdd()
//     await this.subtotal() 
//     // await this.cartFetch1()

//     const { navigation } = this.props;
//     this.focusListener = navigation.addListener('didFocus', () => {
//         this.subtotal()
//       // console.log('total')
//       // {this.state.total=0}

//     });

   
    
// }








userIdd = async() =>{
    let result=await Auth.getAccount();
    //console.log('userId',result)


    this.setState({
      userdata:result,
     

    })
  
}

subtotal = ()=>{
  let price  = 0;
  // this.setState({
  //   total:0
  // })

  this.props.EcartItems.forEach((element) => {
      price = price + (Number(element.qty)*Number(element.price))
      // this.setState({
      //   total: this.state.total+(Number(element.qty)*Number(element.test_price)),

        //subtotal: this.state.qty*(Number(element.qty)*(element.test_price))
      // })
      // this.props.testprice(total)
      // console.log('total325435613',this.state.total,Number(element.qty)*Number(element.test_price))
    }
  )

  // setTimeout(() => {
   this.setState({
     total : price
   })
    
  // }, 3000);
  
 

}



increaseQty =async(item)=>{
  let data={
    item:item,
    qty:Number(item.qty)+1
  }
  let data2 = {

    id:item.id,
    qty:data.qty,
  }
  

  //console.log("quantity",data)

  let result1=await MyFunction.EcomcartQuantity(data2);
  console.log('increaseQty',result1)
 
  if( result1 && result1.status){  
 
    this.props.dispatch(updateEcom(data)) 
    this.setState({
      refresh1: ! this.state.refresh1
    })
    
  }
       this.subtotal()
 
 
 }


decreaseQty =async(item)=>{
  let data={
    item:item,
    qty:Number(item.qty)-1
  }

  if(data.qty < 1)
  {
    
      data.qty=1
   
  }
  let data2 = {

    id:item.id,
    qty:data.qty,
  }

 // console.log("quantity",data)

 let result1=await MyFunction.EcomcartQuantity(data2);
 console.log('increaseQty',result1)

 if( result1 && result1.status){  

  this.props.dispatch(updateEcom(data)) 
  this.setState({
    refresh1: ! this.state.refresh1
  })
}

  this.subtotal()

  
}




deleteEcomcart = async(data3) =>{
  console.log('data3',data3)
 
  let data={
      user_id:this.state.userdata.id,
      id: data3.id,
  }
 // console.log('deleteeee',data)
  let result1=await MyFunction.deleteEcomcart(data);
// console.log('deleteecomCart',result1)
  

  if( result1 && result1.status){
      // this.setState({

      //   deletecart:result1.data,
       
      // })
   
  this.props.dispatch(deleteEcom(data3.id)) 

  this.setState({refresh : !this.state.refresh})
  //ToastAndroid.show(' Tests in your Cart added successfully',ToastAndroid.SHORT);
  this.subtotal()
  }
  else{

      ToastAndroid.show('Something wrong! Try Again ',ToastAndroid.SHORT)
  }
}




 

  
  list1 = () => {
    return this.state.cartItems.map((item, i) => {
      console.log('ecomcartshowing',item)
        return (

    <View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 1, height: 115,marginTop:4}}>
      {/* <View style={[styles.centerElement, {width: 60}]}>
        <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} >
        
           {/* <Icon name={item.checked == 1 ? "checkmark-circle" : "checkmark-circle"} 
           style={{color:item.checked == 1 ? "#0faf9a" : "#aaaaaa",fontSize:25 }}/> */}

           {/* <Icon name="checkmark-circle"  style={{fontSize:25 ,color:'#006B15'}}/>
        </TouchableOpacity>
      </View> */} 

      <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center',paddingLeft:20}}>
        <TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/}} 
        style={{paddingRight: 10}}>

          {/* <LoadImage
           source={{uri:this.props.image_url+item.image}} 
           style={[styles.centerElement, {height: 80, width: 80, backgroundColor: '#eeeeee',borderRadius:20}]}/> */}

          <Image 
         source={{uri: item.thumbnailImage}}
           style={[styles.centerElement, {height: 80, width: 80, backgroundColor: '#eeeeee',borderRadius:20}]} />
        </TouchableOpacity>

        <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
          <Text numberOfLines={1}  style={{fontSize: 15}}>{item.name}</Text>
          {/* <Text numberOfLines={1} style={{color: '#8f8f8f'}}>ItemId: {item.itemId }</Text> */}
             <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>Rs. {item.salePrice}</Text> 

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#cccccc' }}>
              
              <Icon 
              // onPress={()=> this.decreaseQty(item)}
              name="minussquareo" type="AntDesign" style={{color:'#cccccc',fontSize:22}}/> 
            
            </TouchableOpacity>

            <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7,
             paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
             
            <TouchableOpacity  style={{ borderWidth: 1, borderColor: '#cccccc' }}
           // onPress={()=> this.increaseQty(item)}
           >
            
               <Icon  
               name="plussquareo" type="AntDesign" style={{color:'#cccccc',fontSize:22}}/> 
            </TouchableOpacity>

          </View>
        </View>
        
      </View>

      <View style={[styles.centerElement, {width: 60}]}>
        <TouchableOpacity 
        // onPress={() => this.deleteEcomcart(item)}
          style={[styles.centerElement, {width: 32, height: 32}]} >
        
          <Icon name="delete" type="AntDesign" style={{color:'#1273de',fontSize:25}}/>
        </TouchableOpacity>
      </View>
    </View>
    
    );
  });
}; 
	
	render() {
		
		
		
		return (
			<View style={{flex: 1, backgroundColor: '#D5DBE0'}}>
				
        {/* <StatusBar barStyle="light-content" backgroundColor="#E7E7E7"/> */}

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
                        <View style={{ justifyContent: 'center', alignItems: 'center',  marginTop: 18, marginLeft:15}}>
                            <Icon name="ios-arrow-back" type='Ionicons'
                                style={{ color: "#fff", fontSize: 28, }} />
                        </View>
                    </Pressable>
                        <View style={{ width: '60%', marginTop: 18, }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Shopping Cart</Text>
                        </View>

                    
                  </LinearGradient>
                    {/* <View style={{ width: '100%', borderColor: '#BCBDBC', borderWidth: 1 }}></View> */}
				
				
				{/* {this.state.cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : ( */}
					<ScrollView>	
            
					{this.list1()}
					</ScrollView>
				{/* )} */}
				


				{/* {!cartItemsIsLoading && */}

        {/* {
               
               this.props.EcartItems.length == '' ? <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',height:500}}>
               <Text style={{color:'green',fontSize:15}}> Hii ! Your cart is empty</Text>
             </View> : */}



					<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5,height:100}}>
						<View style={{flexDirection: 'row'}}>
							{/* <View style={[styles.centerElement, {width: 60}]}>
								 <View style={[styles.centerElement, {width: 32, height: 32}]}>
									 
                  <Icon name="ticket-outline" type="MaterialCommunityIcons" style={{fontSize:25,color:'#f0ac12'}}/>
								</View> 
							</View> */}

							{/* <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Voucher</Text>
								<View style={{paddingRight: 20}}>
									<TextInput 
										style={{paddingHorizontal: 10, backgroundColor: '#f0f0f0', height: 25, borderRadius: 4}} 
										placeholder="Enter voucher code" 
										value={''}
										onChangeText={(searchKeyword) => {
											
										} }
									/> 
								</View>
             </View> */}

						</View>

						{/* <View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} >
									 */}
                  {/* <Icon name={selectAll == true ? "checkmark-circle" : "checkmark-circle"} style={{color:selectAll == true ? "#0faf9a" : "#aaaaaa",fontSize:25}}/> */}
                  {/* <Icon name="checkmark-circle"  style={{color: "#006B15" ,fontSize:25}}/>
								</TouchableOpacity>
							</View>
              
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center',}}>
								<Text style={{color:'#006B15'}}>Select All</Text>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									<Text style={{color: '#006B15',fontWeight:'bold'}}>SubTotal: </Text> */}
									{/* <Text>${this.subtotalPrice().toFixed(2)}</Text> */}
                  {/* <Text>$1200</Text> 
								</View>
							</View>
						</View> */}

          
              
            
           
            
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center',marginTop:30}}>

            <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center',}}>
            <View style={{flexDirection: 'row', paddingLeft: 20, alignItems: 'center'}}>
									<Text style={{color: '#1273de',fontWeight:'bold',fontSize:17}}>SubTotal:  </Text>
									{/* <Text>${this.subtotalPrice().toFixed(2)}</Text> */}
                  {/* <Text>{Number(this.state.subtotal)+(Number(this.props.cartItems[0].test_price))*(Number(this.props.cartItems[0].qty))}</Text>  */}
                  <Text>Rs. 3000</Text>

								</View>
            </View>



            
              <TouchableOpacity style={[styles.centerElement, {backgroundColor: '#006B15', width: 100, height: 50, borderRadius: 5}]} 
              onPress={() => this.props.navigation.navigate('BuyNowAddress')}>
                 <LinearGradient


                    start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}


                    colors={[colors.headercolor31, colors.headercolor32, ]}
                    style={[styles.centerElement, {backgroundColor: '#006B15', width: 100, height: 50, borderRadius: 5}]} >
                                    
								<Text style={{color: '#ffffff'}}>Buy Now</Text>
                </LinearGradient>
							</TouchableOpacity>

          
              
						</View>
            
					</View>

            {/* } */}
				{/* } */}

			</View>
		);
	}
}

// const mapStateToProps=(state)=>({
  
//   EcartItems:state.EcomCartItem.EcartItems,
//   image_url:state.EcomCartItem.image_url


// })

// export default connect(mapStateToProps)(EComCart)





const styles = StyleSheet.create({
  centerElement:
   {
     justifyContent: 'center', alignItems: 'center'
    },

    Upper: {
      backgroundColor: '#FDFDFD',
      height: 60,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      elevation:8
     // marginHorizontal: 15,
     // marginTop: 15,

      // marginVertical:5
  },
});