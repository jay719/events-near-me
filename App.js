import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { createStore } from 'redux'
import { Provider, useDispatch } from 'react-redux'
import reducers from './reducers'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'; //safe area makes sure content is under tool bar
import  EventsContainer  from './components/EventsContainer.js'


export default function App() {

  const store = createStore(reducers)
  

  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        <EventsContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'hsl(303, 56%, 83%)',
    
  },
});
