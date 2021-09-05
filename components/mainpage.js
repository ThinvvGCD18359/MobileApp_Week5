import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Mainpage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <Text 
          style={styles.text}
          onPress={() => navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>
        <Text>Or</Text>
        <Text 
          style={styles.text}
          onPress={() => navigation.navigate('Login')}>
          Click here to Login
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
});
