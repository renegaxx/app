import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

export default function Perfil() {
    const [user, setUser] = useState({ email: '', usuario: '', nome: '', telefone: '' });
    const [telefone, setTelefone] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const isGuest = route.params?.isGuest || false;
    const [savedLists, setSavedLists] = useState([]);
    




    // fonte
    const [fontsLoaded, fontError] = useFonts({
        'Raleway': require('../assets/fonts/Raleway-Regular.ttf'),
        'Raleway-Black': require('../assets/fonts/Raleway-Black.ttf'),
        'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
        'Raleway-ExtraBold': require('../assets/fonts/Raleway-ExtraBold.ttf'),
        'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
        'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
        'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
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
        const getUser = async () => {
          const userData = await AsyncStorage.getItem('user');
          if (userData) {
            const { email, usuario, nome, telefone } = JSON.parse(userData);
            setUser({ email, usuario, nome, telefone });
          }
        };
        getUser();
      }, []);


    return (
        <ScrollView>
            {/* Configurar a cor da barra de status */}
            <StatusBar backgroundColor="#305BCC" barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.imageUser}></View>
                {isGuest ? (
                    <Text style={styles.info1}>Você está logado como convidado.</Text>
                ) : (
                    <>
                        <View style={styles.infoPega}>
                            <Text style={styles.info1}>{user.nome}</Text>
                            <Text style={styles.info2}>{user.email}</Text>
                        </View>
                    </>
                )}
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.sair}>Sair</Text>
                </TouchableOpacity>
                <View style={styles.conteudo}>
                    <View style={styles.azul}>
                        <View style={styles.containerInfo}>
                            <Ionicons
                                name={"person-circle-outline"}
                                size={20}
                                style={styles.iconToggle}
                            />
                            <Text style={styles.text1}>
                                Nome :
                                
                                        
                                    
                            </Text><Text style={styles.text2}>{user.nome}</Text>

                        </View>
                        <View style={styles.containerInfo}>
                            <Ionicons
                                name={"person-circle-outline"}
                                size={20}
                                style={styles.iconToggle}
                            />
                            <Text style={styles.text1}>
                                Nome :
                                

                                
                                

                            </Text><Text style={styles.text2}>{user.telefone}</Text>

                        </View>
                    </View>
                    <View style={styles.linha}></View>
                    <View style={styles.containerCont2}>
                        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('listasCriadas')}>
                            <View style={styles.cont2}>
                                <Ionicons
                                    name={"list"}
                                    size={25}
                                    style={styles.iconToggle2}
                                />
                                <Text style={styles.textCont2}>Listas Criadas</Text>
                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={25}
                                    style={styles.iconToggle3}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cont2}>
                            <Ionicons
                                name={"bag-handle-outline"}
                                size={25}
                                style={styles.iconToggle2}
                            />
                            <Text style={styles.textCont2}>Promoções</Text>
                            <Ionicons
                                name="chevron-forward-outline"
                                size={25}
                                style={styles.iconToggle3}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonVoltar}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#FF6347',
        marginTop: 40
    },
    sair: {
        backgroundColor: '#6F8DDB',
        width: 70,
        textAlign: 'center',
        height: 30,
        paddingTop: 5,
        borderRadius: 20,
        fontFamily: 'Raleway-Bold',
        marginTop: 10
    },
    iconToggle3: {
        color: '#000',
        marginLeft: 'auto', // Empurra para a direita
        paddingRight: 10
    },
    containerInfo: {
        width: 150,
        paddingLeft: 10,
        margin: 20,


        backgroundColor: '#305BCC',
        borderRadius: 30,
        height: 100,
        marginTop: 20,
        justifyContent: 'center'
    },
    text2: {
        fontSize: 30
    },
    azul: {
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    iconToggle: {
        color: 'white'
    },
    iconToggle2: {
        color: '#305BCC',
        paddingLeft: 10
    },
    linha: {
        width: 1,
        height: 30,
        margin: 5,
        backgroundColor: '#fff'
    },
    text1: {
        width: 90,
        fontSize: 12,
        color: 'white'
    },
    containerCont2: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20

    },
    cont2: {
        width: 310,
        height: 45,
        borderRadius: 14,
        backgroundColor: '#9DB5F3',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    textCont2: {
        paddingLeft: 10,
        flex: 1 // Ocupa o espaço disponível
    },
    infoPega: {
        paddingTop: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    info1: {
        fontSize: 18,
        fontFamily: 'Raleway',
        color: '#fff',
        fontWeight: '700'
    },
    info2: {
        fontSize: 15,
        marginBottom: 8,
        fontFamily: 'Raleway',
        color: '#D5D5D5',
    },
    conteudo: {
        paddingTop: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: 600,
        width: '102%',
    },
    buttonVoltar: {
        backgroundColor: '#FF6347',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        width: 160,
        marginTop: 60,
        height: 50,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'Raleway',
    },
});
