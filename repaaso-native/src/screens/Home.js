import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { AuthContext } from "../context/AuthContext"; 

export default function Home({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  
  const irShowUsers = () => {
    navigation.navigate('ShowUser');
  };

  console.log(user)

  

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2C1810" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.welcomeCard}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>
                {user ? user.charAt(0).toUpperCase() : '👤'}
              </Text>
            </View>
            <Text style={styles.welcomeTitle}>
              ¡Hola{user ? `, ${user}` : ''}! 👋
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Bienvenido de nuevo
            </Text>
          </View>
        </View>

        {/* Description Card */}
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>
            📱 Aplicación de Navegación
          </Text>
          <Text style={styles.descriptionText}>
            Esta aplicación nos servirá para comprender cómo utilizar la navegación y un tab menu en React Native de manera eficiente.
          </Text>
        </View>

        {/* Actions Section */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Acciones Disponibles</Text>
          
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={irShowUsers}
            activeOpacity={0.8}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonIcon}>👥</Text>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonTitle}>Ver Usuarios</Text>
                <Text style={styles.buttonSubtitle}>Explorar lista completa</Text>
              </View>
              <Text style={styles.buttonArrow}>→</Text>
            </View>
          </TouchableOpacity>

         
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desarrollado con React Native ⚡
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerSection: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  welcomeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  descriptionCard: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 22,
  },
  actionsSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#4ECDC4',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#4ECDC4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  buttonIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 2,
  },
  buttonSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  secondaryButtonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 2,
  },
  secondaryButtonSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  buttonArrow: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  secondaryButtonArrow: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingBottom: 50,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.4)',
  },
});