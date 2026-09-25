import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" />
        <Metric title="Clientes" value="348" />
        <Metric title="Pedidos" value="1.024" />
        <Metric title="Conversión" value="7,4%" />
        <Metric title="Tickets" value="60" />
      </View>
    </View>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontFamily: 'GoogleSansFlex_700Bold',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  label: {
    color: '#64748b',
    fontFamily: 'GoogleSansFlex_400Regular',
    fontSize: 14,
  },
  value: {
    fontSize: 23,
    marginTop: 8,
    fontFamily: 'GoogleSansFlex_700Bold',
  },
});