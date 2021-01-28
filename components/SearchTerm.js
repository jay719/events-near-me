import React, {useState} from 'react';
import { TextInput } from 'react-native';


export default function SearchTerm() {

 const [searchValue, setSearchTerm] =  useState('') //


    const handleSearchText = (text) => { //usually would be event and event.target.value
        setSearchTerm(text)
    }
    return (
        <TextInput
        
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleSearchText}
        value={searchValue}
    />
    );
    };

