import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Image } from 'react-native-elements';


export default function WelcomeScreen({ navigation }) {

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Image source={require('../../assets/welcome.png')} style={styles.Logo} />
                <Text style={styles.LogoText}>KuarkTek Digital</Text>
            </View>
            <Animatable.View style={styles.Footer} animation="fadeInUpBig">
                <Text style={styles.Title}>Dijital Dünyanın Kalbine Hoşgeldiniz</Text>
                <TouchableOpacity
                    style={styles.StartButton}
                    onPress={() => navigation.navigate("Content")}
                    type="outline"
                >
                    <Text style={styles.ButtonText}> Giriş </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#3f8ccb'
    },
    Header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 350,
        height: 350
    },
    LogoText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        marginTop: 10

    },
    Footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 250,
        borderTopRightRadius: 0,
        paddingVertical: 50,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Title: {
        color: '#3f8ccb',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    StartButton: {
        width: 200,
        marginTop: 50,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 15,
        borderColor: "#3f8ccb",
        borderWidth: 2
    },
    ButtonText: {
        color: "#3f8ccb",
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center"
    }

});

