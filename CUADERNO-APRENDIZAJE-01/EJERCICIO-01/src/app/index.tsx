import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.description}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff7ddff"
  },
  title: {
    fontSize:48,
    letterSpacing: -2,
    fontWeight:100
  },
  subtitle: {
    fontSize:24,
    fontFamily:"GoogleSansFlex_400Regular",
    letterSpacing: -1,
    fontWeight: "500",
    marginTop:10
  },
  description: {
    fontSize:18,
    fontFamily:"GoogleSansFlex_600SemiBold",
    color:"#9a7e20ff",
    marginTop:10
  }
});
