import { FlatList, StyleSheet, Text, View } from 'react-native';
import { 
  Keyboard, 
  Mouse, 
  Monitor, 
  Headphones, 
  Laptop, 
  Smartphone, 
  KeyboardMusic,
  ArrowRight
} from 'lucide-react-native';

const products = [
  { id: '1', icon: Keyboard, name: 'Teclado', bgColor: '#f7f2f2' },
  { id: '2', icon: Mouse, name: 'Ratón', bgColor: '#f0f4f9' },
  { id: '3', icon: Monitor, name: 'Monitor', bgColor: '#edf5f1' },
  { id: '4', icon: Headphones, name: 'Auriculares', bgColor: '#faf2ee' },
  { id: '5', icon: Laptop, name: 'Portátil', bgColor: '#fcf8ee' },
  { id: '6', icon: Smartphone, name: 'Móvil', bgColor: '#eef6f8' },
  { id: '7', icon: KeyboardMusic, name: 'Piano', bgColor: '#f4f2f8' }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <View style={[styles.card, { backgroundColor: item.bgColor }]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <ArrowRight size={18} color="#0f172a" strokeWidth={2.2} />
              </View>

              <View style={styles.cardBody}>
                <Icon size={52} color="#0f172a" strokeWidth={1.2} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 34,
    marginBottom: 22,
    color: '#1b1b1bff',
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: -0.5,
  },
  listContent: {
    paddingBottom: 40,
  },
  row: {
    gap: 12,
  },
  card: {
    flex: 1,
    padding: 18,
    borderRadius: 26,
    marginBottom: 12,
    minHeight: 165,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    color: '#0f172a',
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: -0.3,
  },
  cardBody: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
});