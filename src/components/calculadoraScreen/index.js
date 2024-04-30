import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'; // Importação corrigida

const BananaAzul = ({ navigation }) => {
  const [initialPrice, setInitialPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [dividends, setDividends] = useState('');
  const [returnAmount, setReturnAmount] = useState(null);

  const calculateReturn = () => {
    if (initialPrice && finalPrice && dividends) {
      const returnAmountValue = ((parseFloat(finalPrice) - parseFloat(initialPrice) + parseFloat(dividends)) / parseFloat(initialPrice)) * 100;
      setReturnAmount(returnAmountValue.toFixed(2) + '%');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };
  
  const handleCalculateReturn = () => {
    calculateReturn();
    navigation.navigate('ReturnScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMULARIO DE ENTRADA</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço Inicial (R$)"
        keyboardType="numeric"
        onChangeText={text => setInitialPrice(text)}
        value={initialPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço Final (R$)"
        keyboardType="numeric"
        onChangeText={text => setFinalPrice(text)}
        value={finalPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Dividendos (R$)"
        keyboardType="numeric"
        onChangeText={text => setDividends(text)}
        value={dividends}
      />

      {/* Substituindo Button por TouchableOpacity */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleCalculateReturn}
      >
        <Text style={styles.buttonText}>Calcular Retorno</Text>
      </TouchableOpacity>
      {returnAmount && <Text style={styles.result}>Retorno: {returnAmount}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE6FE3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  input: {
    width: '40%',
    height: '5%',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    width: '40%',
    backgroundColor: '#054f77',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  result: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default BananaAzul;
