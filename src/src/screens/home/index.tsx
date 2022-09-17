
import{  Text, View,TextInput,TouchableOpacity, FlatList,Alert ,Image} from 'react-native';
import { styles } from './styles';
import { Participant, ParticipantErased } from '../../componets/Participant';
import React, {useState}  from 'react';


export default function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');
  let [participantsNameErased, setParticipantsNameErased] = useState<string[]>([]);
  
  

function handleParticipantAdd(){
  if(participantsName == ""){
    return Alert.alert("Erro", "Nenhum item foi adicionado");
  }else{
  if(participants.includes(participantsName)){
    return Alert.alert("Erro", "participante ja na lista");
    
  }
  setParticipants(prevState=>[...prevState,participantsName]);
  setParticipantsName('');
  console.log(participants);
}
}
function handleParticipantRemove(name: string){
 
  function sendToGarbage(){
    setParticipants(prevState => prevState.filter(participant => participant != name))
    setParticipantsNameErased(prevStates=>[...prevStates,`${name}`])
    
    
  }


  Alert.alert('REMOVER', `Deseja remover ${name}?`,[
    {
      text:'Sim',
      onPress:() => sendToGarbage()
      
      
    }, {
      text:'Não',
       style:'cancel'
    }
  ]);
  
  
}
function showGarbage(){ 

  if(participantsNameErased.length === 0){
  return Alert.alert("Lixeira Vazia","Nenhum item para mostrar!")
 
  }

  function vanishThemAll(){
    participantsNameErased = [];
  }
 return Alert.alert('Conteudo da lixeira, Gostaria Deletar tudo? \n', `${participantsNameErased} `,[
  {
    text:'Sim',
    onPress:() => vanishThemAll()
    
    
  }, {
    text:'Não',
     style:'cancel'
  }
]);



}

  return(
  <View style={styles.container}> 
  
  
  <Text style={styles.eventDate}>
  Nome do Evento
  </Text>
  

  <Text style={styles.eventName}>Sexta,3 de Novembro de 2022</Text>


  <TouchableOpacity style={styles.button} onPress={showGarbage} >
  <Image style={styles.garbage}
    
    
     source={require('../home/lixeira.png')}/>
  </TouchableOpacity>
 
<View style=
{styles.form}>
    
  <TextInput
   style={styles.input} 
  placeholder ="Nome do Participante"
  placeholderTextColor="white"
  onChangeText={ setParticipantsName}
  value={participantsName}
  />

  <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
    <Text style={styles.buttonText}>
       +
    </Text>
  </TouchableOpacity>
</View>





<FlatList
data={participants}
keyExtractor={item => item}
renderItem ={({item})=>(
  <Participant
key={item}
 name={item}
  onRemove={() =>handleParticipantRemove(item)}
  />
)}
ListEmptyComponent = { () =>(
<Text
style={styles.listEmptyText}
>
  Nenhum item foi adicionado ainda a lista, Lista vazia

</Text>
  )}
/>
  </View>
  
  )
}