import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { createStore } from 'redux'
import { Provider, useDispatch } from 'react-redux' //allows us to access, and handle store/state
import reducers from './reducers'
import  EventsContainer  from './components/EventsContainer.js'
import WelcomeScreen from './screens/WelcomeScreen.js'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  const store = createStore(reducers) // from root reducer
  

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EventFinder" component={WelcomeScreen} style={{color:'hsl(303, 56%, 83%)'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

