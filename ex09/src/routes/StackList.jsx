import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App(HomeScreen) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Receita" component={ReceitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { FlatList, Text, Image, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem: 'https://i.pinimg.com/236x/80/b5/44/80b544b4f56e66fde329b8cf8279e3b3.jpg',
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    imagem: 'https://i.pinimg.com/236x/ae/fe/5d/aefe5d91ac74b5f9d95c38f1a97cfc38.jpg',
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    tempoPreparo: "50 minutos",
    porcoes: 12,
    imagem: 'https://i.pinimg.com/236x/ef/d3/0b/efd30bd087d55dc9b51cc77507893531.jpg',
  }
];

const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={receitas}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
          <Card>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
              <Text>{item.nome}</Text>
              <Text>{item.tempoPreparo}</Text>
              <Text>{item.porcoes} porções</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;