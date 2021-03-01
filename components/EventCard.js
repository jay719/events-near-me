import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet, 
    TouchableOpacity,
    Linking
} from 'react-native'
import { useDispatch, useSelector   } from 'react-redux';

    

export default function EventCard({event, index}) {

    const dispatch = useDispatch()

    const specificEvent = useSelector(state => state.eventLink)
;
    
    // const handleClickedEvent = () => {
        
    //     // const link = event._links.self.href
    //     // dispatch ({type:"SET_LINKS", link: link})
    //     // console.log(specificEvent)
    // }
    
    

    const showAtractions = (event) => {
        console.log(event)
        const attractions = event._embedded.attractions.map(attraction => {
            return <Text key={attraction.name} style={styles.attraction}>🌟{attraction.name}</Text>
        })
        return attractions
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.names}>{index}.{event.name}</Text>
                        <Text style={styles.genre}>📣{event.classifications[0].segment.name}: {event.classifications[0].genre.name}📣 </Text>
                        <Text style={styles.date}>⏳{event.dates.start.localDate}⏳</Text>
                        <Text style={styles.location}>🗺Location: {event._embedded.venues[0].name}🗺</Text>
                        
                    </View>
            
            <View style={styles.infoContainer}>
                {/* <Text style={styles.fact}>{event.info}</Text> */}
                {/* <Text>{event.pleaseNote}</Text> */}

                {/* <Text>
                    {
                        event.ticketLimit ? event.ticketLimit.info : "no tickets bby"
                    }
                </Text> */}
        
                <View style={styles.attraction}>
                    <Text>Performing:</Text>
                    {showAtractions(event)}
                </View>
                <Image style={styles.cardImage} source={{url: event.images[2].url}} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() =>  Linking.openURL(event.url)} >
                <Text style={styles.buttonText}>Visit Event</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        
    },headerContainer: {
        marginVertical: 21,
        paddingHorizontal: 30,
        left: -3,
        // justifyContent: 'center',
        // marginHorizontal:20,
    },
    infoContainer: {
        flex:1,
        flexDirection: "row",
        padding:5,
        // left: 10,
        // backgroundColor:'hsl(299, 100%, 95%)'
        
    },
    card: {
        // borderWidth: 1,
        // borderColor: 'hsl(299, 100%, 91%)',
        backgroundColor: '#fff',
        
        marginBottom: 10,
        shadowColor: "#000",
shadowOffset: {
	width: 6,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    cardImage: {
        
        width:'50%',
        height: 150,
        left: -9,
        
    },
    names: {
        fontSize: 20,
        fontWeight:'500',
        color: 'hsl(303, 56%, 83%)',
        paddingBottom: 3,
        textAlign: 'center',
    },
    genre: {
        fontSize: 15,
        fontWeight:'400',
        color: 'hsl(303, 56%, 83%)',
        paddingBottom: 5,
        paddingLeft: 2,
        textAlign: 'center',
    },
    date: {
        fontSize: 15,
        fontWeight:'500',
        color: 'hsl(303, 56%, 83%)',
        textAlign: 'center',
    },
    fact: {
        paddingBottom:10,
    },

    location: {
        paddingBottom:10,
        fontSize: 15,
        fontWeight:'600',
        color: 'hsl(303, 56%, 83%)',
        // marginBottom:20, 
        textAlign: 'center',
    },
    attraction: {
        fontWeight:'600',
        color: 'hsl(303, 56%, 83%)',
        flexDirection: "column",
        width:"50%",
    },
    button: {
        paddingVertical: 10,
        backgroundColor:'hsl(303, 56%, 83%)',
        // borderRadius: 6,
        
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: "700",
    }


    
})