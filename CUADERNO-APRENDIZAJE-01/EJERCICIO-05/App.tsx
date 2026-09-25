import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://picsum.photos/600/400' }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>AUDIO</Text>
          <Text style={styles.offertBadge}>OFERTA</Text>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
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
    backgroundColor: '#f8fafc',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 20,
  },
  category: {
    color: '#2563eb',
    fontFamily: 'GoogleSansFlex_500Medium',
    fontSize: 18,
  },
  title: {
    marginTop: 6,
    fontFamily: 'GoogleSansFlex_500Medium',
    fontSize: 24,
  },
  rating: {
    marginTop: 10,
    fontFamily: 'GoogleSansFlex_500Medium',
    fontSize: 18,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontFamily: 'GoogleSansFlex_700Bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#477cefff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'GoogleSansFlex_700Bold',
  },
  offertBadge: {
    backgroundColor: '#fdceceff',
    color: '#D00000',
    fontFamily: 'GoogleSansFlex_700Bold',
    fontSize: 12,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: 100,
    textAlign: 'center',
    marginTop: 10,
  },
});
