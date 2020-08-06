import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPokemon from './src/components/list-pokemon';
import DescriptionPokemon from './src/components/description-pokemon';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista de Pokemons">
        <Stack.Screen
          name="Lista"
          component={ListPokemon}
          options={{ title: 'Lista de Pokemons', headerShown: false }}
        />
        <Stack.Screen 
          name="Detalle"
          component={DescriptionPokemon}
          options={{ title: 'Detalle de Pokemon' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;