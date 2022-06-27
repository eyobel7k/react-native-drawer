import { View, Text, StyleSheet } from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#041e2a",
    height: "100%",
  },
  txt:{
    color:'white',
    fontSize:30,
  }
});