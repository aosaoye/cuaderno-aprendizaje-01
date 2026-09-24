import { ImageBackground, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { SymbolView } from 'expo-symbols';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          
          {/* Card de perfil de diseñador */}
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require('@/assets/images/card-bg.jpg')}
              style={styles.cardBg}
              imageStyle={styles.cardBgImage}>
              
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.05)', 'rgba(20, 10, 42, 0.45)', 'rgba(15, 7, 32, 0.94)']}
                locations={[0, 0.45, 0.88]}
                style={styles.cardGradient}>
                
                {/* Avatar con borde blanco e indicador online */}
                <View style={styles.avatarSection}>
                  <View style={styles.avatarWrapper}>
                    <Image
                      source={require('@/assets/images/avatar.jpg')}
                      style={styles.avatar}
                      contentFit="cover"
                    />
                    <View style={styles.onlineBadge} />
                  </View>
                </View>

                {/* Nombre, Rol y Botón de Bookmark */}
                <View style={styles.infoRow}>
                  <View style={styles.nameBlock}>
                    <ThemedText style={styles.nameText}>John Morton</ThemedText>
                    <ThemedText style={styles.roleText}>UI/UX Designer</ThemedText>
                  </View>

                  <Pressable
                    style={({ pressed }) => [
                      styles.bookmarkButton,
                      pressed && styles.buttonPressed,
                    ]}>
                    <SymbolView
                      name={{ ios: 'bookmark', android: 'bookmark_border', web: 'bookmark' }}
                      size={20}
                      tintColor="#ffffff"
                    />
                  </Pressable>
                </View>

                {/* Tags de habilidades */}
                <View style={styles.tagsRow}>
                  <View style={styles.tagPill}>
                    <ThemedText style={styles.tagText}>App Design</ThemedText>
                  </View>
                  <View style={styles.tagPill}>
                    <ThemedText style={styles.tagText}>Web Design</ThemedText>
                  </View>
                  <View style={styles.tagPill}>
                    <ThemedText style={styles.tagText}>Figma</ThemedText>
                  </View>
                  <View style={styles.tagPillSmall}>
                    <ThemedText style={styles.tagText}>+4</ThemedText>
                  </View>
                </View>

                {/* Fila de estadísticas */}
                <View style={styles.statsRow}>
                  {/* Rating */}
                  <View style={styles.statCol}>
                    <View style={styles.statValueContainer}>
                      <SymbolView
                        name={{ ios: 'star.fill', android: 'star', web: 'star' }}
                        size={17}
                        tintColor="#ffffff"
                      />
                      <ThemedText style={styles.statValue}>4.9</ThemedText>
                    </View>
                    <ThemedText style={styles.statLabel}>Rating</ThemedText>
                  </View>

                  {/* Clients */}
                  <View style={styles.statCol}>
                    <View style={styles.statValueContainer}>
                      <SymbolView
                        name={{ ios: 'rosette', android: 'military_tech', web: 'military_tech' }}
                        size={17}
                        tintColor="#ffffff"
                      />
                      <ThemedText style={styles.statValue}>50+</ThemedText>
                    </View>
                    <ThemedText style={styles.statLabel}>Clients</ThemedText>
                  </View>

                  {/* Rate */}
                  <View style={styles.statCol}>
                    <View style={styles.statValueContainer}>
                      <ThemedText style={styles.statValue}>$65/hr</ThemedText>
                    </View>
                    <ThemedText style={styles.statLabel}>Rate</ThemedText>
                  </View>
                </View>

                {/* Botón principal Get In Touch */}
                <Pressable
                  style={({ pressed }) => [
                    styles.ctaButton,
                    pressed && styles.ctaButtonPressed,
                  ]}>
                  <ThemedText style={styles.ctaButtonText}>Get In Touch</ThemedText>
                </Pressable>

              </LinearGradient>
            </ImageBackground>
          </View>

          {Platform.OS === 'web' && <WebBadge />}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: BottomTabInset,
  },
  scrollContent: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.five,
    alignItems: 'center',
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 34,
    overflow: 'hidden',
    backgroundColor: '#150c28',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.4,
    shadowRadius: 28,
    elevation: 14,
  },
  cardBg: {
    width: '100%',
    minHeight: 560,
  },
  cardBgImage: {
    borderRadius: 34,
  },
  cardGradient: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  avatarSection: {
    alignItems: 'flex-start',
    marginTop: 8,
  },
  avatarWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3.5,
    borderColor: '#ffffff',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#22c55e',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  nameBlock: {
    gap: 3,
  },
  nameText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 27,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  roleText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#e2e8f0',
    opacity: 0.85,
  },
  bookmarkButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 22,
    flexWrap: 'wrap',
  },
  tagPill: {
    backgroundColor: 'rgba(18, 11, 35, 0.72)',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  tagPillSmall: {
    backgroundColor: 'rgba(18, 11, 35, 0.72)',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  tagText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 12,
  },
  statCol: {
    alignItems: 'center',
    gap: 5,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statValue: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700',
  },
  statLabel: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    color: '#cbd5e1',
    opacity: 0.8,
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  ctaButtonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.985 }],
  },
  ctaButtonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16.5,
    color: '#110b24',
    fontWeight: '700',
  },
});
