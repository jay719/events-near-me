import React from 'react'
import { createStore } from 'redux'
import { Provider} from 'react-redux'
import reducers from './reducers'


export default function App() {

    const store = createStore(reducers)
    return (
        <Provider store={store}> 

        </Provider>
    )
}
