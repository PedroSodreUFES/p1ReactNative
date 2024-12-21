import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';

export default function Home(){ 
    const [participants, setParticipants] = useState<string[]>([]);
    const[participantName, setParticipantName] = useState("");

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")
        }
        if(participantName === "")
        {
            return Alert.alert("Digite o nome do participante!")
        }
        console.log("Você clicou no botão de Adicionar!");
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName("");
    }

    function handleParticipantRemove(name:string)
    {   
        Alert.alert("Remover", `Deseja mesmo remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: "cancel",
            },
        ])
        console.log(`Você clicou em remover o participante ${name}`);
    }

    
    return(
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Lista de Convidados
        </Text>
      
        <Text style={styles.eventDate}>
            Sábado, 21 de Dezembro de 2024
        </Text>

        <View style={styles.form}>
            <TextInput 
            style = {styles.input}
            placeholder='Nome do participante'
            placeholderTextColor={'#6b6b6b'}
            onChangeText={setParticipantName}
            value={participantName}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data = {participants}
            keyExtractor= {item => item}
            renderItem={({ item }) => (
                <Participant 
                    key={item}
                    name={item}
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />
        
        {/*<ScrollView>
        {
            participants.map(participant => (
                <Participant 
                    key={participant}
                    name={participant} 
                    onRemove={() => handleParticipantRemove(participant)}>
                </Participant>
            ))
        }
        </ScrollView>
        */}
        
    </View>
  )
}