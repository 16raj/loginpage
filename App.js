import React from 'react'
import { Dimensions, Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Icon} from 'react-native-gradient-icon';
const {height,width}  = Dimensions.get("screen")
export default function App(props) {
    const [screen,setScreen] = React.useState(true)
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white',marginHorizontal:40,paddingTop:StatusBar.currentHeight}}>
            <View style={{marginTop:20 }}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View>
                        <Icon  style={{alignSelf:'center'}}
                            size={50}
                            colors={[
                                {color:"#c785ff",offset:"1",opacity:"0.5"},
                                {color:"#9138e2",offset:"0",opacity:"1"},
                            ]}
                            start={{x:1,y:1}}
                            name="briefcase" type="font-awesome" />
                    </View>
                    <View>
                        <Text style={{fontSize:40,fontWeight:'bold',marginLeft:30,color:"#9337e4"}}>Gawee</Text>
                    </View>
                </View>
                
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={()=>{setScreen(true)}} style={{borderBottomWidth:screen?2:0,borderColor:"#9337e4", flex:1}}>
                        <Text style={{fontSize:width/27,paddingVertical:10,textAlign:'center',color:"#9337e4"}}>JOB SEEKER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setScreen(false)}} style={{borderBottomWidth:!screen?2:0,borderColor:"#9337e4", flex:1}}>
                        <Text style={{fontSize:width/27,paddingVertical:10,textAlign:'center',color:"#749ffe"}}>COMPANY</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{flex:1,marginTop:40}}>
                <Text style={{fontSize:width/17,color:"#000"}}>Sign in to your registerd account</Text>
                
                <View style={{marginTop:40}}>
                    <TextInput style={{
                        backgroundColor:"#ededed",
                        paddingVertical:20,
                        borderRadius:20,
                        paddingHorizontal:20,fontSize:width/26,
                        color:"#000"
                        }}
                        placeholderTextColor="#a0a0a0"
                        placeholder="User Name"
                    />
                </View>

                <View style={{marginTop:40}}>
                    <TextInput style={{
                        backgroundColor:"#ededed",
                        paddingVertical:20,
                        borderRadius:20,
                        paddingHorizontal:20,fontSize:width/26,
                        color:"#000"
                        }}
                        placeholderTextColor="#a0a0a0"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                 <View style={{marginTop:40}}>
                    <TouchableOpacity style={{backgroundColor:"#9337e4",paddingVertical:15,borderRadius:20,paddingHorizontal:20,color:"#000"}}>
                         <Text style={{textAlign:'center',color:'white',fontSize:width/20}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>        

                <Text style={{fontSize:width/25,marginTop:20,color:"#000"}}>Forgot your Password?<Text style={{color:"#9337e4"}}> Reset here</Text></Text>

                <View style={{marginTop:20,flexDirection:"row",justifyContent:'space-between'}}>
                    <View  style={{alignSelf:'flex-end'}}>
                        <Text style={{fontSize:width/25,fontWeight:"200",color:"#000"}}>Or sign in with</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('./google.png')} style={{width:40,height:40}} />
                        <Image  source={require('./facebook.png')} style={{width:40,height:40,marginLeft:20}} />
                    </View>
                </View>

                <View style={{marginTop:40}}>
                    <TouchableOpacity style={{paddingVertical:20,borderWidth:1,borderColor:"#9337e4",borderRadius:20,paddingHorizontal:20,color:"#000"}}>
                         <Text style={{textAlign:'center',color:'#9337e4',fontSize:width/20}}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        </SafeAreaView>
    )
}