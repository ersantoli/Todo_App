import { View,Text,TouchableOpacity,Image } from "react-native";
import { styles } from './styles'

type Props = {
    name:String;
    onRemove: ()=> void;
}

export function Participant({name, onRemove}: Props){
    return(
        
        <View style={styles.container}>
            <Text style={styles.name}>
               {name}
            </Text>       
            
<TouchableOpacity style={styles.button} onPress={onRemove}  >
    <Text style={styles.buttonText}>
       -
    </Text>
  </TouchableOpacity>
        </View>
    )
}
export function ParticipantErased({name, onRemove}: Props){
    return(
        
        <View style={styles.container}>
         <Text style={styles.name}>
               {name}
        </Text>  
            <TouchableOpacity style={styles.button} onPress={onRemove}  >
    <Text style={styles.buttonText}>
       r
    </Text>
  </TouchableOpacity>
        </View>
    )}