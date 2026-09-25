import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Bell,
  CreditCard,
  ArrowUpRight,
  ArrowRight,
  ShoppingCart,
  Coffee,
  ArrowDownLeft,
  Zap,
  LucideIcon
} from 'lucide-react-native';

const movementMetadata: Record<string, { icon: LucideIcon; bgColor: string }> = {
  Supermercado: { icon: ShoppingCart, bgColor: '#f0f4f9' },
  Cafetería: { icon: Coffee, bgColor: '#faf2ee' },
  Nómina: { icon: ArrowDownLeft, bgColor: '#edf5f1' },
  Electricidad: { icon: Zap, bgColor: '#fcf8ee' },
};

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Buenos días 👋</Text>
          <Text style={styles.user}>Laura</Text>
        </View>
        <View style={styles.headerButton}>
          <Bell size={20} color="#0f172a" strokeWidth={2} />
        </View>
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceCardHeader}>
          <Text style={styles.balanceLabel}>Saldo disponible</Text>
          <CreditCard size={20} color="#94a3b8" strokeWidth={1.8} />
        </View>
        <Text style={styles.balance}>4.280,32 €</Text>
        <View style={styles.balanceCardFooter}>
          <Text style={styles.account}>ES00 •••• •••• 7821</Text>
          <ArrowUpRight size={18} color="#94a3b8" strokeWidth={2.2} />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      </View>

      <Movement
        title="Supermercado"
        date="Hoy"
        amount="-42,80 €"
        icon={ShoppingCart}
        bgColor="#f0f4f9"
      />
      <Movement
        title="Cafetería"
        date="Ayer"
        amount="-3,20 €"
        icon={Coffee}
        bgColor="#faf2ee"
      />
      <Movement
        title="Nómina"
        date="20 septiembre"
        amount="+2.340 €"
        icon={ArrowDownLeft}
        bgColor="#edf5f1"
      />
      <Movement
        title="Electricidad"
        date="18 septiembre"
        amount="-74,20 €"
        icon={Zap}
        bgColor="#fcf8ee"
      />
    </ScrollView>
  );
}

type MovementProps = {
  title: string;
  date: string;
  amount: string;
  icon?: LucideIcon;
  bgColor?: string;
};

function Movement({ title, date, amount, icon, bgColor }: MovementProps) {
  const meta = movementMetadata[title];
  const IconComponent = icon || meta?.icon || CreditCard;
  const cardBg = bgColor || meta?.bgColor || '#f0f4f9';
  const isPositive = amount.trim().startsWith('+');

  return (
    <View style={[styles.movement, { backgroundColor: cardBg }]}>
      <View style={styles.movementLeft}>
        <View style={styles.iconContainer}>
          <IconComponent size={22} color="#0f172a" strokeWidth={1.8} />
        </View>
        <View style={styles.movementInfo}>
          <Text style={styles.movementTitle}>{title}</Text>
          <Text style={styles.movementDate}>{date}</Text>
        </View>
      </View>

      <View style={styles.movementRight}>
        <Text style={[styles.amount, isPositive && styles.amountPositive]}>
          {amount}
        </Text>
        <ArrowRight size={16} color="#0f172a" strokeWidth={2.2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  hello: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'GoogleSansFlex_400Regular',
    marginBottom: 2,
  },
  user: {
    fontSize: 34,
    color: '#1b1b1bff',
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: -0.5,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f4f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceCard: {
    backgroundColor: '#0f172a',
    borderRadius: 26,
    padding: 22,
    marginBottom: 26,
  },
  balanceCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'GoogleSansFlex_400Regular',
  },
  balance: {
    color: '#ffffff',
    fontSize: 36,
    fontFamily: 'GoogleSansFlex_600SemiBold',
    letterSpacing: -0.8,
    marginVertical: 12,
  },
  balanceCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  account: {
    color: '#cbd5e1',
    fontSize: 14,
    fontFamily: 'GoogleSansFlex_400Regular',
    letterSpacing: 1.2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#1b1b1bff',
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: -0.4,
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 22,
    marginBottom: 12,
  },
  movementLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontSize: 16,
    color: '#0f172a',
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: -0.3,
  },
  movementDate: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: 'GoogleSansFlex_400Regular',
    marginTop: 2,
  },
  movementRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  amount: {
    fontSize: 16,
    color: '#0f172a',
    fontFamily: 'GoogleSansFlex_600SemiBold',
    letterSpacing: -0.2,
  },
  amountPositive: {
    color: '#16a34a',
  },
});