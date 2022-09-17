import { useState } from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { styles } from './styles'

type Props = {
    name:String;
    onRemove: ()=> void;
}





export function Participant({name, onRemove}: Props){
    const [isChecked, setChecked] = useState(false)
   
    return (

        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <CheckBox style={styles.checkBox}
                
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"               
                checked={isChecked}
                onPress={()=> setChecked(!isChecked)} // inverte os valor da variavel
                
                
                 />
            <TouchableOpacity style={styles.button} onPress={onRemove}  >
                   
            <Image style={styles.imgTrash}
                  source={require('./../../../assets/trash.png')}/>
             
            </TouchableOpacity>



        </View>
    )
}
export function ParticipantErased(){
    return(
        
        <View style={styles.container}>
         <Text style={styles.name}>
            
        </Text>  
            <TouchableOpacity style={styles.button}  >
    <Text style={styles.buttonText}>
       OLHA
    </Text>
  </TouchableOpacity>
        </View>
    )}