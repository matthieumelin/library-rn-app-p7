import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import axios from 'axios';

import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';

export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then((res) => {
        setData(res.data);
      })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash'
          options={{ headerShown: false }}
          component={SplashScreen} />
        <Stack.Screen name='Library'
          options={{ headerShown: false }}>
          {props => <LibraryScreen {...props}
            data={data.items} />
          }
        </Stack.Screen>
        <Stack.Screen name='Book'
          options={{ headerShown: false }}
          component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}