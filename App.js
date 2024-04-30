import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './src/components/mainScreen/index';
import BananaAzul  from './src/components/calculadoraScreen/index';
import Jaca from './src/components/mainScreen/index';
import AgiotaBonzinho from './src/components/resultadosScreen/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="Jaca" component={Jaca} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={Principal} options={{ headerShown: false }} />
        <Stack.Screen name="BananaAzul" component={BananaAzul} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
