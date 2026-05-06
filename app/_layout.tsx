import { Stack } from "expo-router";

import { Text, View } from "react-native";

import { useFonts } from "expo-font";

import { Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  // Loading Screen สำหรับ iOS
  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000080",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 26,
            fontFamily: "Kanit_700Bold",
          }}
        >
          Hopeline
        </Text>
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen name="signin" />

      <Stack.Screen name="signup" />
    </Stack>
  );
}
