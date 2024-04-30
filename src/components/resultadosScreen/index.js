// Em AgiotaBonzinho.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

const AgiotaBonzinho = ({ route }) => {
  const { investimento, retorno, roi } = route.params;
  const navigation = useNavigation(); // Instancie o hook useNavigation para obter o objeto de navegação

  const dividendos = parseFloat(retorno) - parseFloat(investimento);
  const percentInvestimento = ((parseFloat(retorno) - parseFloat(investimento)) / parseFloat(investimento)) * 100;

  return (
    <ImageBackground source={require('../../../assets/calculadora.png')} style={styles.background}>
      <View style={styles.container}>
        <Text>Dados do investimento</Text>
        <Text>Preço inicial R$ {investimento}</Text>
        <Text>Preço final R$ {retorno}</Text>
        <Text>Dividendos R$ {dividendos}</Text>
        <Text>ROI: {roi}</Text>
        <Text>% De investimento {percentInvestimento}</Text>
        <Button title="Fechar" onPress={() => navigation.goBack()} /> {/* Use a função goBack() do objeto de navegação para fechar a tela */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default AgiotaBonzinho;
