import BaseAction from "@/components/Actions/BaseAction";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="(register)/index" />
      </Stack>
    </>
  );
}
