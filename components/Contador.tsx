import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Botao } from './Botao';

export default function Contador() {
  const [score, setScore] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <View style={styles.content}>
        <Text style={styles.contador}>{score}</Text>
        <View style={styles.buttonsRow}>
          <Botao
            label="+"
            onPress={() => setScore(score + 1)}
            style={styles.button}
          />
          <Botao
            label="-"
            onPress={() => setScore(score - 1)}
            style={styles.button}
          />
          <Botao
            label="0"
            onPress={() => setScore(0)}
            style={styles.button}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  button: {
    marginHorizontal: 12,
  },
  contador: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});