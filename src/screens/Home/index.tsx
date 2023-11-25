import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
      Nome do Evento aqui</Text>
      <Text style={styles.eventDate}>Sexta, 21 de Novembro 2023</Text>
    </View>
  );
}