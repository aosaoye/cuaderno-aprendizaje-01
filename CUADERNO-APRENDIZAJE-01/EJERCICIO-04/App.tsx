import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Introduce tus datos para continuar</Text>

      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </Pressable>

      <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontFamily: 'GoogleSansFlex_700Bold',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    color: '#64748b',
    fontFamily: 'GoogleSansFlex_400Regular',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 100,
    marginBottom: 14,
    fontFamily: 'GoogleSansFlex_400Regular',
    fontSize: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'GoogleSansFlex_700Bold',
  },
  register: {
    textAlign: 'center',
    marginTop: 20,
    color: '#2563eb',
    fontFamily: 'GoogleSansFlex_400Regular',
    fontSize: 16,
  },
});
