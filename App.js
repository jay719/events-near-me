import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { createStore } from 'redux'
import {View, Text, StyleSheet} from 'react-native'
import { Provider} from 'react-redux' //allows us to access, and handle store/state
import reducers from './reducers'
import  EventsScreen  from './screens/EventsScreen.js'
import WelcomeScreen from './screens/WelcomeScreen.js'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {

  const store = createStore(reducers) // from root reducer
  


  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="HomeScreen" 
          options={({navigation}) => ({ 
            headerRight: props => < Header navigation={navigation} {...props}/> 
            })
          }
          
          component={WelcomeScreen} 
          />
          <Stack.Screen
          name="EventsScreen" 
          component={EventsScreen} 
          
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Header = (props) => {
  return (<TouchableOpacity 
            style={styles.touchable}
            onPress={() => props.navigation.navigate("EventsScreen")}
          >
            <MaterialIcons name="event-available" size={30} color="black" />
          </TouchableOpacity>)
}

const styles = StyleSheet.create({
  touchable: {
    paddingRight: 15
  }
})