import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';

export default function Home(){ 
    const participants = ["Pedro Sodré", "Arthur Tosi", "Theo Mattheo", "Enrico Massariol", "Murilo Salvador", 
        "Silvio", "Matheus Gon", "Paulo Sérgio", "Cesar", "Conrado", "Raphael Dornelas"];

    function handleParticipantAdd(){
        if(participants.includes("Pedro Sodré")){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")
        }
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove(name:string)
    {   
        Alert.alert("Remover", `Deseja mesmo remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!")
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
            Nome do evento
        </Text>
      
        <Text style={styles.eventDate}>
            Sexta, 20 de Dezembro de 2024
        </Text>

        <View style={styles.form}>
            <TextInput 
            style = {styles.input}
            placeholder='Nome do participante'
            placeholderTextColor={'#6b6b6b'}
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