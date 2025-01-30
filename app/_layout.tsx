import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "react-native";
export default function RootLayout() {
  return (
<>
 <StatusBar barStyle="light-content" backgroundColor="#3b5998"/>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </>
  );
}
