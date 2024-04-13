import { useEffect } from "react";
import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/configs/reactQuery";
import { ThemeProvider, useTheme } from "styled-components";
import { ITheme, theme } from "@/common/theme";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    light: require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    regular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    medium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    semiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    bold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RootLayoutNav />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const RootLayoutNav = () => {
  const { colors } = useTheme() as ITheme;

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="home" options={{ title: "Users" }} />
      <Stack.Screen name="details/[user]" options={{ title: "" }} />
    </Stack>
  );
};
