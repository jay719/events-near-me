
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from './EventCard.js'

const apiKey = "QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF"

const apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=denver`

export default function EventsContainer() {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events)

    useEffect(() => {
        fetch(apiURL, {
            headers: {
            "apikey": `${apiKey}`
            }
        })
        .then(response => response.json())
        .then(({_embedded}) => _embedded)
        .then(({events}) => dispatch({type: "SET_EVENTS", events: events})) // events = payload dispatch= hook
        
        }, [])

        const showEvents = () => events.map((event, i) => {
            return <EventCard 
            // style={styles.card}
            key={event.id}
            event={event}
            index={i+ 1}
              /> //pass event as a prop, key stops the error
        })

return (
        <ScrollView style={styles.container}>
            {showEvents()}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        
    },
    
})