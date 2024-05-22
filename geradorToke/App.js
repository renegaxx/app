import { View, Text, StyleSheet, Image  } from "react-native";



export default function App() {
  return (
    <View>
      <Text>
        <Image source={require("./assets/logo.png")} style={ESTILO.logo}/>
        Meu app!
      </Text>
    </View>
  )
}

const ESTILO = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  }
})















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


