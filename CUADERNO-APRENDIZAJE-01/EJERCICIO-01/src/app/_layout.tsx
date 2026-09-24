import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import * as Font from 'expo-font';
import {
  Poppins_500Medium,
  Poppins_400Regular,
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts
} from '@expo-google-fonts/dev';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [fontLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
  });


  useEffect(() => {
    if(fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError])

  if(!fontLoaded && !fontError) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
