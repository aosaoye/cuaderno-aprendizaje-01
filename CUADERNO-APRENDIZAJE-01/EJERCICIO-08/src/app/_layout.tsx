import { Stack } from "expo-router";
import {
  useFonts,
  GoogleSansFlex_700Bold,
  GoogleSansFlex_600SemiBold,
  GoogleSansFlex_500Medium,
  GoogleSansFlex_400Regular,
  GoogleSansFlex_300Light
} from "@expo-google-fonts/dev"
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";



export default function RootLayout() {

   const [fontLoaded, fontError] = useFonts({
    GoogleSansFlex_700Bold,
    GoogleSansFlex_600SemiBold,
    GoogleSansFlex_500Medium,
    GoogleSansFlex_400Regular,
    GoogleSansFlex_300Light
  });


  useEffect(() => {

    if(fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }

  }, [fontLoaded, fontError])

  if(!fontLoaded && !fontError) return null;


  return <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
  </Stack>
}
