
import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  navbar:{
    flexDirection:'row',  
    paddingTop:15,
    height:54,
    backgroundColor:'#1EAAF1',
  },
  navBarButton:{
    color:'#FFFFFFFF',
    textAlign:'center',
    width:64
  },
  navBarHeader:{
   flex:1,
   color:'#ffffff',
   fontWeight:'bold',
   textAlign:'center',
 },
 content:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor: '#374046',
 },
 text:{
   color:'#EEEEEE'
 },
 tabBar:{
   height:50,
   flexDirection:'row',
   justifyContent:'space-around',
   alignItems:'center',
 },

 tabBarButton:{
   width:30,
   height:30,
 },

 button1:{ backgroundColor: '#8BC051'},
 button2:{ backgroundColor: '#CCD948'},
 button3:{ backgroundColor: '#FDE84D'},
 button4:{ backgroundColor: '#FCBF2E'},
 button5:{ backgroundColor: '#FC9626'},

 contentButton:{
   width:200,
   marginTop:30,
   flexDirection:'row',
   justifyContent:'space-around',
 },

 webView:{
   flex:1,
 },

});

export default styles
