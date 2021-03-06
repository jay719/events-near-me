
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, StatusBar, Platform} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../components/EventCard.js';
// import {SearchTerm} from './SearchTerm.js';

const apiKey = "QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF"

const apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=denver`

export default function EventsScreen() {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events) //state.events is from root reducers
    const [searchValue, setSearchValue] =  useState('') //


    useEffect(() => {
        fetch(apiURL, {
            headers: {
            "apikey": `${apiKey}`
            }
        })
        .then(response => response.json())
        .then(({_embedded}) => _embedded)      //type changes what is ran in index.js
        .then(({events}) => {
            const newEvents = [];
            events.forEach((event)=> {
                if (!newEvents.find(item => item.name === event.name)){
                    newEvents.push(event)
                }
            })
            dispatch({type: "SET_EVENTS", events: newEvents})
        }) // events = payload/action dispatch= hook
        
    }, []) //Runs ONCE after initial rendering
            
    const showEvents = () => events.map((event, i) => {
        console.log(event)
        return <EventCard 
                // style={styles.card}
                    key={event.id}
                    event={event}
                    index={i+ 1}
                    
                /> //pass event as a prop, key stops the error
    })


    const handleSearchText = (text) => { //usually would be event and event.target.value
        setSearchValue(text)
    }
    
    const handleSearch = () => {
        const newSearchValue = searchValue.toLowerCase();
        const updatedURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${newSearchValue}`;
        console.log(newSearchValue, updatedURL)
        fetch(updatedURL, {
            headers: {
                "apikey": `${apiKey}`
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
            })
        .then(({_embedded}) => _embedded) 
        .catch((error) => {
            console.log(error)
        })
        .then(({events}) => {
            const newSearchEvents = [];
            events.forEach((event) => {
                if (!newSearchEvents.find(item => item.name === event.name)){
                    newSearchEvents.push(event)
                }
                
            })
            dispatch({type: 'SET_EVENTS', events: newSearchEvents})
        })
        
    }


return (
    <>
        
        {/* <SearchTerm /> */}
        <View style={{flexDirection: 'row', paddingBottom:5}}>
            <TextInput
                style={styles.search}
                placeholder="Enter Location"
                onChangeText={handleSearchText}
                value={searchValue}
            />
            <Button 
                style={styles.button}
                onPress={handleSearch}
                title='Search'
            />
        </View>
        <ScrollView style={styles.container}>
            {showEvents()}
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'hsl(303, 56%, 83%)',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        
        
    },
    search: { 
        left:10,
        height: 40, 
        flex: 1,
        borderColor: 'gray', 
        borderWidth: 1, 
        borderTopWidth:0, 
        borderRightWidth:0,
        borderLeftWidth:0
    },
    button: {
        color: "white",
        backgroundColor: 'white',
        top:2
    },
    
})