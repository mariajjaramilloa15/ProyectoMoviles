import React from 'react'
import { Text, StyleSheet, SafeAreaView, Image } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/images/epicgames.png')} style={styles.image} />
        <Text style={{fontSize: 20, marginTop: 10, color: "white"}}>Bienvenido a Epic Games</Text>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: "center",
      justifyContent: "center",
  
    },
    text: {
      height: 130,
      width: 180,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    image: {
      width: 130,
      height: 130,
      alignItems: "center",
      marginTop: 0,
      marginBottom: 0,
    },
  });