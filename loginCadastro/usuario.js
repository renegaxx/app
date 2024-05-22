import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons';


export default function Usuario() {
    const [user, setUser] = useState({ email: '', usuario: '' });
    const navigation = useNavigation();
    const route = useRoute();
    const isGuest = route.params?.isGuest || false;

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

    useEffect(() => {
        if (!isGuest) {
            const getUser = async () => {
                const userData = await AsyncStorage.getItem('user');
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            };
            getUser();
        }
    }, [isGuest]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageUser}></View>
                {isGuest ? (
                    <Text style={styles.info}>Você está logado como convidado.</Text>
                ) : (
                    <>
                        <View style={styles.infoPega}>
                            <Text style={styles.info}>{user.email}</Text>
                            <Text style={styles.info}>{user.usuario}</Text>
                        </View></>
                )}
                <View style={styles.conteudo}>
                    <View style={styles.containerInfo}>
                        <View style={styles.infoCont}>
                            <Ionicons
                                name={"bag"}
                                size={25}
                                style={styles.iconToggle}
                            />
                            <Text style={styles.text1}>
                                Ultimo Produto
                            </Text>
                        </View>
                        <View style={styles.infoCont}>
                            <Ionicons
                                name={"bag"}
                                size={25}
                                style={styles.iconToggle}
                            />
                            <Text style={styles.text1}>
                                Ultimo Produto
                            </Text>
                        </View>
                        <View style={styles.infoCont}>
                            <Ionicons
                                name={"bag"}
                                size={25}
                                style={styles.iconToggle}
                            />
                            <Text style={styles.text1}>
                                Ultimo Produto
                            </Text>
                        </View>

                    </View>


                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonVoltar}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View></ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#305BCC',
        padding: 16,
    },
    imageUser: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#FF6347',
        marginTop: 40
    },
    containerInfo : {
        flexDirection: 'row',
        width: 300,
    },
    infoPega: {
        paddingTop: 10
    },
    info: {
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'Raleway',
    },
    conteudo: {
        paddingTop: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: 800,
        width: '100%',
    },
    buttonVoltar: {
        backgroundColor: '#FF6347',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        width: 160,
        marginTop: 20,
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'Raleway',
    },
});
