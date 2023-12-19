import React from "react";
import {View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity} from "react-native";

import * as animatable from "react-native-animatable";

export default function Feed() {
    return (
        <View style={styles.container}>
            {/* CIMA AZUL*/}
            <View style={styles.containerHeader}>
                <Text style={styles.text}>Cima</Text>
            </View>

            

            {/* MEIO AMARELO*/}
            <View style={styles.containerSection}>
                <Text style={styles.text}>Meio</Text>
            </View>

            

            {/* BAIXO VERDE*/}
            <View style={styles.containerFooter}>
                <Text style={styles.text}>Baixo</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#7DA8DE",
    },
    containerHeader:{
        flex:1,
        backgroundColor: "#0511F2",
    },


    containerSection:{
        flex:1,
        backgroundColor: "#FFD700",
    },
    
    
    containerFooter:{
        flex:1,
        backgroundColor: "#078C03",
    },
    text:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }

})