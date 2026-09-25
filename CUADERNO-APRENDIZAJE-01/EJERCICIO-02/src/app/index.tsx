import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Tarjeta Oficial de la Rúbrica */}
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>
          Diseño de interfaces con React Native
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>

      {/* 2. Reto: Segunda variante con paleta de colores diferente */}
      <View style={[styles.card, styles.cardVariant]}>
        <Text style={[styles.title, styles.titleVariant]}>Hi! Akkari</Text>
        <Text style={[styles.subtitle, styles.subtitleVariant]}>
          Aprenderás diseños chulos en mi academia
        </Text>

        <View style={[styles.button, styles.buttonVariant]}>
          <Text style={[styles.buttonText, styles.buttonTextVariant]}>
            COMENZAR
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f1f5f9", // Fondo gris claro
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 20,
    gap: 24,
  },

  // --- Tarjeta Base (Blanca con botón azul) ---
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontFamily: "GoogleSansFlex_700Bold",
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "GoogleSansFlex_400Regular",
    color: "#64748b",
    marginTop: 8,
    lineHeight: 22,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#2563eb", // Azul primario
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "GoogleSansFlex_600SemiBold",
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  // --- RETO: Variante de Color Alternativa (Dark Slate + Ámbar) ---
  cardVariant: {
    backgroundColor: "#1e293b", // Fondo oscuro
    borderColor: "#334155",
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  titleVariant: {
    color: "#f8fafc",
  },
  subtitleVariant: {
    color: "#94a3b8",
  },
  buttonVariant: {
    backgroundColor: "#f59e0b", // Botón de acento ámbar dorado
  },
  buttonTextVariant: {
    color: "#0f172a",
    fontWeight: "700",
  },
});
