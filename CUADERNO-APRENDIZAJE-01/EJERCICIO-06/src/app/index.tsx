import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Resumen del negocio</Text>

      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" change="+12%" />
        <Metric title="Clientes" value="348" change="+8%" />
        <Metric title="Pedidos" value="1.024" change="+18%" />
        <Metric title="Conversión" value="7,4%" change="+2%" />
      </View>
    </View>
  );
}

function Metric({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.change}>{change}</Text>
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
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#64748b',
    marginTop: 5,
    marginBottom: 28,
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
  },
  label: {
    color: '#64748b',
  },
  value: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },
  change: {
    color: '#16a34a',
    fontWeight: 'bold',
    marginTop: 8,
  },
});