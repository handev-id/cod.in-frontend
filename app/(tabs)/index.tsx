import { View } from "react-native";

import { useGetData } from "@/hooks/useStorage";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    useGetData("token").then((data) => {
      if (!data) {
        router.replace("/(auth)/login");
      }
    });
  }, []);

  return <View>helo</View>;
}
