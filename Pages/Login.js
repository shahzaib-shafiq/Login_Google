import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

export default function Login() {
    WebBrowser.maybeCompleteAuthSession();
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '381135992820-tmnttqbes8m1rmnatkdcodhctuqj3urg.apps.googleusercontent.com',
        expoClientId:'381135992820-k28slg42gnqred7q6kjb8ca1827vac81.apps.googleusercontent.com'
       
      });
    return (

        <View>
            <Image source={require('./../assets/login.png')}></Image>

            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to SSNA</Text>
                <Text style={{
                    textAlign: 'center',
                    marginTop: 80, fontSize: 20
                }}>Login/Signup</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => promptAsync()}>
                    <Ionicons name="logo-google" size={24}
                        color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: Colors.white }}>Sign In with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => promptAsync({
                    name: 'Shahzaib Shafiq',
                    picture: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-customer-call-service-portrait-6760890-5600697.png?f=webp',
                    email: 'shafiqshahzaib@gmail.com',
                    id: 1
                })}>
                    <Text>Skip</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -24,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})
