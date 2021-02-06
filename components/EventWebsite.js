// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import React from 'react'
// import { useSelector } from 'react-redux';

//     const specificEvent = useSelector(state => state.eventLink)

//     const apiKey = "QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF"

//     const eventURL = `https://app.ticketmaster.com/$"/discovery/v2/events/G5vzZ4g6yzQHe?locale=en-us"?apikey=${apiKey}`

//     useEffect(() => {
//         fetch(eventURL, {
//             headers: {
//             "apikey": `${apiKey}`
//             }
//         })
//         .then(response => response.json())
//         .then((response) => {     //type changes what is ran in index.js
//             console.log(response)
//         }) // events = payload/action dispatch= hook
        
//     }, []) //Runs ONCE after initial rendering


// export default function EventWebsite() {
//     return (
//         <SafeAreaView>

//         </SafeAreaView>

//     )
// }
// \
