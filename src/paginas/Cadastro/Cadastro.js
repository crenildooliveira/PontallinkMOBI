import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

// Função para fazer a solicitação de cadastro de usuário
const cadastrarUsuario = async (dadosUsuario) => {
    try {
      const resposta = await axios.post('http://192.168.1.64:3000/cadastro', dadosUsuario);
      console.log('Resposta do servidor:', resposta.data);
      
      // Faça algo com a resposta do servidor, se necessário
    } catch (erro) {
      console.error('Erro ao cadastrar usuário:', erro);
    }
  };


function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCadastrarUsuario = () => {
    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      sexo: sexo,
      data_nasc: dataNascimento,  // Formato: YYYY-MM-DD
    };

    cadastrarUsuario(dadosUsuario);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={(text) => setSexo(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento Formato: ano-mês-dia"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastrarUsuario}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CadastroScreen;
