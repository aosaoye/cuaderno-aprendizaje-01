import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Bell,
  CreditCard,
  ArrowRight,
  ShoppingCart,
  Coffee,
  ArrowDownLeft,
  Zap,
  LucideIcon,
  SunDim
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';

const MOVEMENTS = [
  { id: '1', title: 'Supermercado', date: 'Hoy', amount: '-42,80 €', icon: ShoppingCart, bgColor: '#f0f4f9' },
  { id: '2', title: 'Cafetería', date: 'Ayer', amount: '-3,20 €', icon: Coffee, bgColor: '#faf2ee' },
  { id: '3', title: 'Nómina', date: '20 septiembre', amount: '+2.340 €', icon: ArrowDownLeft, bgColor: '#edf5f1' },
  { id: '4', title: 'Electricidad', date: '18 septiembre', amount: '-74,20 €', icon: Zap, bgColor: '#fcf8ee' },
];

function CardMatrixPattern() {
  const cols = [24, 42, 60, 78, 96, 114, 132, 150, 168, 186, 204, 222, 240, 258, 276, 294, 312, 330];
  const rows = [16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192];

  return (
    <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
      {cols.map((x, colIdx) =>
        rows.map((y, rowIdx) => {
          const seed = (colIdx * 11 + rowIdx * 7) % 10;
          if (seed > 3) return null;
          const isCyan = seed % 2 === 0;
          const opacity = 0.12 + seed * 0.06;
          return (
            <Circle
              key={`${colIdx}-${rowIdx}`}
              cx={x}
              cy={y}
              r={1.1}
              fill={isCyan ? '#38bdf8' : '#818cf8'}
              opacity={opacity}
            />
          );
        })
      )}
    </Svg>
  );
}

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Cabecera con saludo del usuario */}
      <View style={styles.header}>
        <View>
          <View style={styles.headerIconContainer}>
            <Text style={styles.hello}>Buenos días</Text>
            <SunDim size={40} color={'gray'} strokeWidth={1.2} />
          </View>
          <Text style={styles.user}>Laura</Text>
        </View>
        <View style={styles.headerButton}>
          <Bell size={35} color="#0f172a" strokeWidth={1.2} />
        </View>
      </View>

      {/* Saldo disponible */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
      </View>

      {/* Tarjeta Virtual estilo Sanal Kart */}
      <View style={styles.cardShadowWrapper}>
        <LinearGradient
          colors={['#1742c7', '#0f2c96', '#060c2c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.creditCard}
        >
          {/* Arco circular oscuro decorativo derecho */}
          <View style={styles.cardDarkArc} />

          {/* Patrón digital de puntos cyber/fintech */}
          <CardMatrixPattern />

          {/* Información frontal de la tarjeta */}
          <View style={styles.cardBody}>
            <View style={styles.cardTopRow}>
              <Text style={styles.cardTypeTitle}>SANAL KART</Text>
            </View>

            <Text style={styles.cardNumber}>1234  ****  ****  5678</Text>

            <Text style={styles.cardHolder}>LAURA MARTÍNEZ</Text>

            <View style={styles.cardBottomRow}>
              <View style={styles.cardSecurityGroup}>
                <Text style={styles.cardSecurityText}>**/**</Text>
                <Text style={styles.cardSecurityText}>CVV ***</Text>
              </View>

              <Text style={styles.visaLogo}>VISA</Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      {/* Sección de movimientos */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      </View>

      {MOVEMENTS.map((item) => (
        <Movement
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
          icon={item.icon}
          bgColor={item.bgColor}
        />
      ))}
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
  const IconComponent = icon || CreditCard;
  const cardBg = bgColor || '#f0f4f9';
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
    marginBottom: 20,
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  hello: {
    fontSize: 18,
    color: '#64748b',
    fontFamily: 'GoogleSansFlex_400Regular',
  },
  user: {
    fontSize: 34,
    color: '#1b1b1bff',
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: -0.5,
  },
  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceContainer: {
    marginBottom: 16,
  },
  balanceLabel: {
    color: '#64748b',
    fontSize: 14,
    fontFamily: 'GoogleSansFlex_400Regular',
    marginBottom: 2,
  },
  balance: {
    color: '#0f172a',
    fontSize: 34,
    fontFamily: 'GoogleSansFlex_600SemiBold',
    letterSpacing: -0.8,
  },
  cardShadowWrapper: {
    marginBottom: 28,
    shadowColor: '#1742c7',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.28,
    shadowRadius: 18,
    elevation: 8,
  },
  creditCard: {
    borderRadius: 24,
    height: 215,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-between',
  },
  cardDarkArc: {
    position: 'absolute',
    top: -50,
    right: -80,
    width: 320,
    height: 330,
    borderRadius: 165,
    backgroundColor: 'rgba(5, 11, 38, 0.72)',
  },
  cardBody: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    zIndex: 1,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTypeTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: 1.5,
  },
  cardNumber: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'GoogleSansFlex_600SemiBold',
    letterSpacing: 2.5,
    marginTop: 8,
  },
  cardHolder: {
    color: 'rgba(255, 255, 255, 0.92)',
    fontSize: 15,
    fontFamily: 'GoogleSansFlex_500Medium',
    letterSpacing: 1.2,
  },
  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardSecurityGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  cardSecurityText: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontFamily: 'GoogleSansFlex_400Regular',
    letterSpacing: 1,
  },
  visaLogo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: 1.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 4,
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