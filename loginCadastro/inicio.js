import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from 'react-native-animatable';

export default function Inicio() {
    const navigation = useNavigation();

    // fonte
    const [fontsLoaded, fontError] = useFonts({
        'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
        'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
        'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
        'Raleway-ExtraBold': require('./assets/fonts/Raleway-ExtraBold.ttf'),
        'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
        'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
        'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <Animatable.View animation='fadeInUp' style={styles.container} onLayout={onLayoutRootView}>
                    <View style={styles.dentroTenda}>
                        <Image
                            source={require('./assets/logo-tenda.png')}
                            style={styles.image}
                        />
                    </View>
                    <Image
                        source={require('./assets/imagem1.png')}
                        style={styles.image1}
                    />
                    <View style={styles.boxTexto}>
                        <Text style={styles.texto}>
                            Suas <Text style={styles.textoMercado}>compras</Text> feitas de forma rápida e fácil
                        </Text>
                    </View>
                    <View style={styles.boxBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('login')}>
                            <Text style={styles.textobotao}>Começar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxConvidado}>
                        <Text style={styles.texto1}>
                            Entrar como
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('usuario')}><Text style={styles.textoConvida}> Convidado</Text></TouchableOpacity>
                    </View>
                    <StatusBar style="auto" />
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#F5F5F5',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    dentroTenda: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#305BCC',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    image1: {
        width: 330,
        height: 330,
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 40,
        marginBottom: 20
    },
    boxTexto: {
        margin: 40,
        marginTop: 0,
        marginBottom: 10
    },
    texto: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 20,
        fontFamily: 'Raleway-SemiBold',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    textoMercado: {
        color: '#305BCC',
    },
    boxBotao: {
        margin: 40,
        marginTop: 30,
        marginBottom: 30
    },
    botao: {
        backgroundColor: '#305BCC',
        borderRadius: 20,
        alignItems: 'center',
    },
    textobotao: {
        fontFamily: 'Raleway-ExtraBold',
        fontSize: 24,
        color: '#fff',
        padding: 15
    },
    boxConvidado: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    texto1: {
        fontFamily: 'Raleway-SemiBold',
        marginTop: 5,
        fontSize: 20,
        marginBottom: 30,
    },
    textoConvida: {
        color: '#305BCC',
        fontSize: 20,
        fontFamily: 'Raleway-SemiBold',
    }
});
