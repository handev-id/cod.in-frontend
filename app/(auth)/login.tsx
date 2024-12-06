import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logika login bisa ditambahkan di sini
    console.log("Email:", email);
    console.log("Password:", password);
    router.push("..");
  };

  return (
    <LinearGradient
      colors={["#ef4040", "#ef4040", "#eee", "#eee", "#eee"]} // Warna yang berulang
      locations={[0, 0.4, 0.4, 0.75, 1]}
      style={{
        height: "100%",
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.1,
            margin: 20,
            borderRadius: 8,
            marginTop: 100,
          }}
        >
          <Image
            source={require("@/assets/images/logo1.png")}
            style={{ width: 150, height: 150 }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#ef4040",
              marginBottom: 10,
              fontFamily: "Poppins-Bold",
            }}
          >
            Selamat Datang
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#777",
              marginBottom: 30,
              fontFamily: "Poppins-Light",
            }}
          >
            Masuk untuk melanjutkan
          </Text>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              style={{
                width: "100%",
                padding: 15,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 8,
                marginBottom: 10,
                fontSize: 16,
                color: "#333",
                fontFamily: "Poppins-Light",
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{
                width: "100%",
                padding: 15,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 8,
                marginBottom: 10,
                fontSize: 16,
                color: "#333",
                fontFamily: "Poppins-Light",
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              padding: 15,
              backgroundColor: "#ef4040",
              borderRadius: 30,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Poppins-Bold",
              }}
            >
              Masuk
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 20,
              fontSize: 14,
              color: "#777",
              fontFamily: "Poppins-Light",
            }}
          >
            Belum punya akun?{" "}
            <Text
              style={{
                color: "#ef4040",
                fontWeight: "bold",
                fontFamily: "Poppins-Bold",
              }}
              onPress={() => router.push("/(auth)/(register)")} // Halaman register
            >
              Daftar
            </Text>
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
