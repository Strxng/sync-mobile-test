import React from "react";

import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/configs/reactQuery";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayoutNav />
    </QueryClientProvider>
  );
}

const RootLayoutNav = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        contentStyle: { backgroundColor: "red" },
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="details" />
    </Stack>
  );
};
