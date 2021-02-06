import React,  {useEffect, useState} from 'react'
import {ImageBackground, SafeAreaView, StyleSheet, View, Image, TextInput, Text, TouchableOpacity, Modal} from "react-native" //safe area makes sure content is under tool bar




export default function WelcomeScreen() {

signInURL = "http://localhost:3000/login"

const [modalVisible, setModalVisible] = useState(false);
const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');

const handleUsernameText = (text) => {
    setUsernameValue(text)
}
const handlePasswordText = (text) => {                //usually would be event and event.target.value
    setPasswordValue(text)
}

handleSignIn =  () => {
    console.log(usernameValue, passwordValue)
    setModalVisible(!modalVisible)
    // fetch(signInURL, {
    //     method: "POST",
    //     header:{ 
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         username: usernameValue,
    //         password: passwordValue
    //         }),
    //     })
    //     .then(() => {
    //          })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.background}
                source={require('../assets/beach.png')} 
                >
                    <View style={styles.welcome}>
                        <Text style={styles.welcomeText}> Welcome to Covid Events</Text>
                        <Text style={styles.welcomeHiText}>Mobile</Text>
                    </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Please Sign in Below</Text>
                            <TextInput
                            style={{ borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={handleUsernameText}
                            value={usernameValue}
                            placeholder="Username"
                            />
                             <TextInput
                                style={{ borderColor: 'gray', borderWidth: 1 }}
                                secureTextEntry={true}
                                onChangeText={handlePasswordText}
                                value={passwordValue}
                                placeholder="Password"
                            /> 
                            <TouchableOpacity
                            style={{ ...styles.openButton }}
                            onPress={handleSignIn}
                            >
                                <Text style={styles.textStyle}>Submit Sign in</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                </Modal>
                    
                    
                    
                    <View style={styles.loginButton}>
                        <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(true)}}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerButton}>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    background: {
        flex:2,
        justifyContent:"flex-end",

    },
    welcome:{
        flex: 1,
        top: 310
    },
    welcomeText: {
        width: '100%',
        // bottom: 230,
        // justifyContent: "center",
        // alignItems: "center",
        fontSize: 30,
        fontWeight: "700",
        color: 'hsl(169, 99%, 43%)',
        textShadowColor: "black",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    
    },
    welcomeHiText: {
        width: '100%',
        // bottom: 230,
        // justifyContent: "center",
        // alignItems: "center",
        fontSize: 27,
        fontWeight: "700",
        left: 139,
        color: 'hsl(169, 99%, 43%)',
        textShadowColor: "black",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        
    },
    container: {
        flex: 1,
        backgroundColor:'hsl(303, 56%, 83%)',
        
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
    loginButton: {
        width: '100%',
        height: 60,
        backgroundColor: 'hsl(303, 56%, 91%)',
        justifyContent: "center",
        alignItems: "center",
        
        
    },
    registerButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'hsl(303, 56%, 83%)',
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        color: "white",

    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 23,
        fontWeight: "700",
    }
})