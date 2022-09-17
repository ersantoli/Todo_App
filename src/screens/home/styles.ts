import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex:1,    
      marginTop:10,
      textAlign:'center',
      backgroundColor:'black',
  
    },
    
    eventName:{
      color:'white',
      fontSize:16,
      fontWeight:'bold',
      marginTop:10,
      textAlign:'center',
      
  
    },
    input:{
        flex:1,
        marginRight:8,
        height: 56,
        backgroundColor:'#1f1e25',
        borderRadius:5,
        color:'#fff',
        padding:6,
        fontSize:16,
        margin:10,
    },
    buttonText: {
        color:'white', 
        fontSize:24,
       
        
       
    },
    button:{
        width:56,
        height:56,
        backgroundColor:'#40E0D0',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',  
        borderWidth: 2,    
        margin:10,
         },
        
 form:{
            width:'100%',
            flexDirection:'row',
            
         }, 
         listEmptyText:{
          color:'red',
          fontSize:14,
          textAlign:'center',
         },
         garbage:{
          width:35,
          height:35,
          
          
           },
           textTo:{
            color:'#0ddf28',
            fontWeight:"800",
            fontSize:40,

           },
           textDo:{
            color:'#d5f242',
            fontWeight:"800",
            fontSize:40,

           },
          banner:{
          
            flexDirection:'row',
            alignItems:"center",            
            justifyContent:"center",
            height:92,    
          },
          belowBanner:{
         
            

          },
          rocket:{
            width:60,
            height:62,
            margin:2,

          },
          status:{
            color:"white",
            flexDirection:'row',
            justifyContent:'space-around'
          },
          a1:{
            color:'aqua',
            
          },
          listStyle:{
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            margin:60,
          }
          
  })