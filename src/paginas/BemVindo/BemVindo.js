import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import * as animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native"

export default function BemVindo() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <animatable.Image
                    delay={900}
                    animation="bounceInLeft"
                    source={require('../../assets/logo1.png')}
                    style={{width: "100%"}}
                    resizeMode="contain"
                />

                <animatable.Image
                    delay={1200}
                    animation="fadeInDown"
                    source={require('../../assets/logo2.png')}
                    style={{width: "100%"}}
                    resizeMode="contain"
                />
            </View>

            <animatable.View delay={1400} animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Pontallink, conexões valiosas!</Text>
                <Text style={styles.text}>Faça login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate("Login")}>

                    <Text style={styles.buttonText}>Acessar</Text>

                </TouchableOpacity>
            </animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#7DA8DE'
    },
    containerLogo:{
        flex:2,
        //backgroundColor: 'yellow',
        justifyContent: "center",
        alignItems: "center"
    },
    containerForm:{
        flex:1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: "#a1a1a1"
    },
    button:{
        position: "absolute",
        backgroundColor: "#7DA8DE",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    }
})