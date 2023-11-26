import React, {useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList, Alert
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';



export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  
  function handleParticipantAdd() {
    if(participants.includes(participantName)){
     return Alert.alert('Participante Existe', 'Ja existe um participante na lista com este nome')
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
    console.log(participants)
  }

  function handleParticipantRemove(name: string) {
    


    Alert.alert('Remover', `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Nao',
        style: 'cancel'

      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento aqui</Text>

      <Text style={styles.eventDate}>Sexta, 21 de Novembro 2023</Text>
      <View style={ styles.form }>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
        name={item}  
        key={item} 
        onRemove={()=> handleParticipantRemove(item)}
        />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}
