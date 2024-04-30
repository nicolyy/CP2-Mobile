// Código da MainScreen
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('BananaAzul'); // Alterado para o nome correto da tela
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nickis Finanças</Text>
      <Text style={styles.description}>
        O cálculo de retorno sobre investimento é uma forma simples e direta para saber quanto você ganhou após um certo, entre comprar e vender “algo” que pode ser um bem material ou mesmo um investimento em dinheiro. Isso pode ser feito ao comprar dólar, ouro, imóvel, ações, projetos como de uma startup por exemplo
      </Text>
      <Image source={require('../../../assets/calculadora.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Vamos Calcular?</Text>
      </TouchableOpacity>
      <Text style={styles.signature}>Desenvolvido por [Nincoly Oliveira] RM: [552410]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054f77',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  description: {
    width: 500,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
    margin: 15,
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    width: 500,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  signature: {
    position: 'absolute',
    bottom: 10,
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default MainScreen;
