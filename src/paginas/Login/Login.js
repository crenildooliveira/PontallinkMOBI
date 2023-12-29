import React from "react";
import {View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native"
import * as animatable from "react-native-animatable";

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <animatable.Image
                    delay={600}
                    animation="fadeIn"
                    source={require('../../assets/logo1.png')}
                    style={{width: "100%"}}
                    resizeMode="contain"
                />
            </View>

            <animatable.View animation="fadeIn" delay={600} style={styles.containerForm}>

                
                {/*Email
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email..."
                    style={styles.input}
                />

                {/*Senha
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonEsqueceuSenha}>
                    <Text style={styles.EsqueceuSenhaText}>Esqueceu a senha ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate("Feed")}>
                    <Text style={styles.LoginText}>Login</Text>
                </TouchableOpacity>
                */}
                {/* Linhas de separação visual*/} 
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}></Text>
                    <View style={styles.line} />
                </View>
                {/* Linhas de separação visual */}

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.LoginText}>Logar com Google</Text>
                </TouchableOpacity>

                {/* Linhas de separação visual*/} 
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}></Text>
                    <View style={styles.line} />
                </View>
                {/* Linhas de separação visual */}

                {/*
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.LoginText}>Logar com Microsoft</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate("Cadastro")}>
                    <Text style={styles.registerText}>Não possui conta ? Cadastre-se</Text>
                </TouchableOpacity>
                */}

            </animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#7DA8DE",
        

    },
    containerLogo:{
        marginTop: "30%",
    },
    containerForm:{
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    buttonEsqueceuSenha:{
        alignSelf: 'flex-end'
    },
    buttonLogin:{
        backgroundColor: "#7DA8DE",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    LoginText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister:{
        marginTop: 14,
        alignItems: "center"
    },
    registerText:{
        color: "#a1a1a1"
    },

    
    /* Linhas de separação visual */
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black', // ou a cor desejada
        marginHorizontal: 5,
      },
      orText: {
        marginHorizontal: 10,
        color: 'black', // ou a cor desejada
      },
      /* Linhas de separação visual */
})