
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


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
        .then(console)
        }, [])

        const showEvents = () => events.map(event => {
            return <Text>{event.name}</Text>
        })

return (
        <View style={styles.container}>
            {showEvents()}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
})