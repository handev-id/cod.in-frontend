import BaseAction from "@/components/Actions/BaseAction";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: ({ options }) => <BaseAction {...options} withoutBorder />,
      }}
    >
      <Tabs.Screen name="index" options={{}} />
    </Tabs>
  );
}
