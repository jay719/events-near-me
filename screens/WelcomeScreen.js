import React from 'react'
import {ImageBackground, SafeAreaView, StyleSheet, View, Image} from "react-native" //safe area makes sure content is under tool bar
import { GoogleSign, GoogleSignInButton} from 'react'
export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.background}
                source={require('../assets/beach.png')} 
                >
                    <View style={styles.loginButton}></View>
                    <View style={styles.registerButton}></View>
            </ImageBackground>
        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    background: {
        flex:2,
        justifyContent:"flex-end",

    },
    container: {
        flex: 1,
        backgroundColor:'hsl(303, 56%, 83%)',
        
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'hsl(303, 56%, 91%)'
    },
    registerButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'hsl(303, 56%, 83%)'
    },
})