import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>24</Text>
            <Text style={styles.label}>Proyectos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text style={styles.label}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>86</Text>
            <Text style={styles.label}>Contactos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f6e3a7ff',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 22,
    alignItems: 'center',
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    marginTop: 18,
    fontSize: 25,
    fontFamily: "GoogleSansFlex_700Bold",
  },
  job: {
    marginTop: 4,
    color: '#64748b',
    fontFamily: "GoogleSansFlex_400Regular",
  },
  stats: {
    flexDirection: 'row',
    gap: 36,
    marginTop: 24,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 21,
    fontFamily: "GoogleSansFlex_700Bold",
  },
  label: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: "GoogleSansFlex_400Regular",
    marginTop: 2,
  },
});