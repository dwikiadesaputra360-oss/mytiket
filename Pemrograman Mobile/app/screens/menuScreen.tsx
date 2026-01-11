import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          Selamat Datang di Website MyTiket.
        </Text>

        <Text style={styles.description}>
          Website yang menyediakan pemesanan tiket kolam renang Laguna Biru.
          {"\n\n"}
          Wisata Air Yang Menyajikan Indahnya Pemandangan Alam dan Segarnya Udara Pegunungan
        </Text>

        {/* BUTTON FIX */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/screens/menu")}
        >
          <Ionicons name="cart-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Beli Tiket Masuk Disini</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

/* ===============================
   STYLES
================================ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3FB",
  },
  header: {
    height: 60,
    backgroundColor: "#355CC9",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#355CC9",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "600",
  },
});







