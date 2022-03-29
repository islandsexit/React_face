import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


function exist_code(invite_code) {
  return fetch(`http://192.168.48.131/backendofreact?invite_code=${invite_code}&master_password=secretmasterpasswordvig`)
  .then((response) => response.json())
  .then((responseJson) => {
  return responseJson;
  })
  .catch((error) => {
  console.error(error);
  });
  }


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress></Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
