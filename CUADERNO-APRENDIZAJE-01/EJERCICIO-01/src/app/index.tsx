import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Host, Button, BottomSheet } from '@expo/ui';
import { useState } from 'react';
import { Image } from 'expo-image';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const [isPresented, setIsPresented] = useState(false);

  
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Host matchContents>
          <Button label="Abrir Modal" onPress={() => setIsPresented(true)} />
        </Host>

        <BottomSheet isPresented={isPresented} onDismiss={() => setIsPresented(false)}>
          <ThemedView style={styles.modalContent}>
            <ThemedText type="subtitle">Modal</ThemedText>
            <ThemedText>Desliza hacia arriba para expandir y hacia abajo para cerrar</ThemedText>
            <Host matchContents>
              <Button label="Cerrar" variant="outlined" onPress={() => setIsPresented(false)} />
            </Host>
          </ThemedView>
        </BottomSheet>

        <ThemedView style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://thispersondoesnotexist.com/random-person.jpeg',
            }}
            style={styles.avatar}
          />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  modalContent: {
    gap: 12,
    padding: Spacing.four,
  },
  imageContainer: {
    marginTop: Spacing.four,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
