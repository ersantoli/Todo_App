
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';
import { Participant, ParticipantErased } from '../../componets/Participant';
import React, {  useState } from 'react';
import { Button } from 'react-native-elements';




export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');
  let [participantsNameErased, setParticipantsNameErased] = useState<string[]>([]);
  const [Created, setCreated] = useState(0);
  const [Done, setDone] = useState(0);
  

 

  function vanishThemAll() {
    participantsNameErased.length = 0;
  }

  function handleParticipantAdd() {
    if (participantsName == "") {
      return Alert.alert("Erro", "Nenhum item foi adicionado");
    } else {
      if (participants.includes(participantsName)) {
        return Alert.alert("Erro", "Tarefa ja esta na lista");

      }


      function rising() {


        setCreated(Created + 1)
        console.log("Created:" + Created);
      }

      setParticipants(prevState => [...prevState, participantsName]);
      setParticipantsName('');
      console.log(participants);
      rising();


    }

  }
  function handleParticipantRemove(name: string) {

    function Down() {

      setCreated(Created - 1)
      console.log("Created:" + Created);
    }

    function sendToGarbage() {
      setParticipants(prevState => prevState.filter(participant => participant != name))
      setParticipantsNameErased(prevStates => [...prevStates, `${name}`])


    }


    Alert.alert('REMOVER', `Deseja remover: ${name}?`, [
      {
        text: 'Sim',
        onPress: () => sendToGarbage()


      }, {
        text: 'Não',
        style: 'cancel'
      }
    ]);
    Down();

  }
  function showGarbage() {

    if (participantsNameErased.length === 0) {
      return Alert.alert("Lixeira Vazia", "Nenhum item para mostrar!")

    }
    function vanishThemAll() {
      participantsNameErased.length = 0;
    }
    
    return Alert.alert('Conteudo da lixeira, Gostaria Deletar tudo? \n', `${participantsNameErased} `, [
      {
        text: 'Sim',
        onPress: () => vanishThemAll()


      }, {
        text: 'Não',
        style: 'cancel'
      }
    ]);
    //return <ParticipantErased/>
   
   
    
    
    
    
    
       
     
    
  }

  return (

    <View style={styles.container}>





      <View style={styles.banner}>
        <Image
          style={styles.rocket}
          source={require('../../../assets/splash.png')}
        />
        <Text style={styles.textTo}>To</Text>
        <Text style={styles.textDo}>Do</Text>
      </View>

      <View style={styles.belowBanner}>

        <TouchableOpacity style={styles.button} onPress={showGarbage} >
          <Image style={styles.garbage}


            source={require('../home/lixeira.png')} />
        </TouchableOpacity>
      </View>




      <View style=
        {styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Adicionar Tarefa"
          placeholderTextColor="white"
          onChangeText={setParticipantsName}
          value={participantsName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.status}  >
        <Text style={styles.a1}>
          Criadas: {Created}
        </Text>
        <Text style={styles.a1}>
          Concluidas: {Done}
        </Text>
        <Text style={styles.a1}
        
        >
          Apagadas: {`${participantsNameErased.length}`}
          
          
        </Text>
      </View>





      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (

          <View style={styles.listStyle}>
            <Image
            source={require('../../../assets/Clipboard.png')}
            />
          <Text
            style={styles.listEmptyText}
          >
            Nenhum item foi adicionado ainda a lista, Lista vazia

          </Text>
          </View>
         
        )}
      />
    </View>

  )
}