import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <RootLayoutNav />;
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
