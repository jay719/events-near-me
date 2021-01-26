import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { createStore } from 'redux'
import { Provider, useDispatch } from 'react-redux'
import reducers from './reducers'
import { StyleSheet, Text, View } from 'react-native';
import  EventsContainer  from './components/EventsContainer.js'


export default function App() {

  const store = createStore(reducers)
  

  return (
    <Provider store={store} >
      <View style={styles.container}>
        <EventsContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
