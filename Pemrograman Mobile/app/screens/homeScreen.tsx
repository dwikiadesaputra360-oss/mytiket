import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const MAP_URL =
  "https://www.google.com/maps?q=Kolam+Renang+Tirta+Alam+Bogor";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Halo! Selamat datang{"\n"}Di MyTiket
          </Text>

          <View style={styles.avatar}>
            <Ionicons name="ticket-outline" size={26} color="#6A4DF0" />
          </View>
        </View>

        {/* WELCOME / HERO */}


        {/* LOKASI */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lokasi</Text>

          <Text style={styles.sectionText}>
            Jl. Raya Ciapus, Kec. Tamansari, Kabupaten Bogor, Jawa Barat
          </Text>

          <TouchableOpacity
            style={styles.mapBox}
            onPress={() => Linking.openURL(MAP_URL)}
          >
            <Ionicons name="location-outline" size={40} color="#6A4DF0" />
            <Text style={styles.mapText}>Buka di Google Maps</Text>
          </TouchableOpacity>
        </View>

        {/* HARGA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Harga Tiket</Text>
          <Text style={styles.price}>@ Rp 10.000</Text>
          <Text style={styles.sectionText}>
            Dapat <Text style={{ fontWeight: "bold" }}>2 voucher gratis masuk</Text>{" "}
            tiap pembelian 10 tiket
          </Text>
        </View>

        {/* JAM BUKA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jam Buka</Text>

          {[
            ["Minggu", "09:00 - 16:00"],
            ["Senin", "Tutup", true],
            ["Selasa", "09:00 - 16:00"],
            ["Rabu", "09:00 - 16:00"],
            ["Kamis", "09:00 - 16:00"],
            ["Jumat", "09:00 - 16:00"],
            ["Sabtu", "09:00 - 16:00"],
          ].map(([day, time, closed], i) => (
            <View key={i} style={styles.timeRow}>
              <Text style={[styles.dayText, closed && styles.closed]}>
                {day}
              </Text>
              <Text style={[styles.timeText, closed && styles.closed]}>
                {time}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => {
            // Sudah di halaman beranda
          }}
        >
          <Ionicons name="home" size={24} color="#6A4DF0" />
          <Text style={[styles.navText, styles.navTextActive]}>Beranda</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push("/screens/menu")}
        >
          <Ionicons name="ticket-outline" size={24} color="#999" />
          <Text style={styles.navText}>Pesan Tiket</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push("/screens/riwayat")}
        >
          <Ionicons name="time-outline" size={24} color="#999" />
          <Text style={styles.navText}>Riwayat Pemesanan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ===============================
   STYLE (SUDAH DIRAPIKAN)
================================ */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  header: {
    backgroundColor: "#6A4DF0",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  /* ===== HERO / WELCOME ===== */
  content: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,   // jarak dalam atas & bawah
    marginVertical: 30,    // jarak dari header & lokasi
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
    color: "#1F2F5C",
  },

  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
    color: "#444",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6A4DF0",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "600",
  },

  /* ===== SECTION ===== */
  section: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2F5C",
    marginBottom: 8,
  },

  sectionText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 12,
  },

  mapBox: {
    height: 180,
    borderRadius: 12,
    backgroundColor: "#EEF3FB",
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    marginTop: 8,
    color: "#6A4DF0",
    fontWeight: "600",
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2F5C",
    marginBottom: 8,
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },

  dayText: {
    fontSize: 14,
    color: "#222",
  },

  timeText: {
    fontSize: 14,
    color: "#222",
  },

  closed: {
    color: "red",
  },

  /* ===== BOTTOM NAVIGATION ===== */
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },

  navText: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
    textAlign: "center",
  },

  navTextActive: {
    color: "#6A4DF0",
    fontWeight: "600",
  },
});




