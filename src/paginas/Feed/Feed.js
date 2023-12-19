import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';

function FeedScreen() {

  // Simulação de dados de status dos amigos
  const friendStatusData = [
    { id: 1, color: 'green' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'red' },
    { id: 4, color: 'green' },
    { id: 5, color: 'yellow' },
    { id: 6, color: '#fff' },
    { id: 7, color: 'green' },
    { id: 8, color: 'blue' },
    // Adicione mais conforme necessário
  ];

  return (
    <View style={styles.container}>
        
      {/* Header */}
      <View style={styles.header}>


        {/* Ícone de pesquisa */}
        <Feather name="search" size={24} color="white" />


        {/* Status dos amigos em forma de bolas */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
          contentContainerStyle={styles.friendStatusContainer}
        >
          {friendStatusData.map((friend) => (
            <View
              key={friend.id}
              style={[styles.friendStatusDot, { backgroundColor: friend.color }]}
            />
          ))}
        </ScrollView>
      </View>

      {/* Section */}
      <View style={styles.section}>
        {/* Conteúdo da seção aqui */}
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        {/* Ícones da barra inferior */}
        <TouchableOpacity>
            <Feather name="home" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
            <Feather name="users" size={24} color="white" />
        </TouchableOpacity>

        {/* Botão circular maior com ícones adicionais */}
        <TouchableOpacity style={styles.circle}>
            <Image source={require('../../assets/foto.png')} style={styles.circleImage}/>
        </TouchableOpacity>
        
        {/* Ícones restantes da barra inferior */}
        <TouchableOpacity>
            <Feather name="message-square" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
            <Feather name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Cor de fundo principal
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black', // Cor da barra preta do header
    padding: 10,
    height: '10%', // 10% da tela
  },
  friendStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  friendStatusDot: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green', // Cor das bolas de status dos amigos
    marginHorizontal: 5,
  },
  section: {
    flex: 8, // 80% da tela
    // Estilos adicionais para a seção
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black', // Cor da barra preta inferior
    height: '10%', // 10% da tela
    elevation: 5, // Relevo para o botão principal
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  circleImage: {
    width: 120,  // Ajuste conforme necessário
    height: 120, // Ajuste conforme necessário
    borderRadius: 80,
  },
});

export default FeedScreen;
