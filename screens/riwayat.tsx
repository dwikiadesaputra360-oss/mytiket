import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Riwayat() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const {
    title,
    price,
    nama,
    alamat,
    noHp,
  } = params as {
    title: string;
    price: string;
    nama: string;
    alamat: string;
    noHp: string;
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Riwayat Pemesanan</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Data Pemesan</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>{nama}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={styles.value}>{alamat}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>No HP</Text>
          <Text style={styles.value}>{noHp}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Detail Tiket</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Tiket</Text>
          <Text style={styles.value}>{title}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Harga</Text>
          <Text style={styles.value}>{price}</Text>
        </View>

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>MENUNGGU PEMBAYARAN</Text>
        </View>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/screens/menu")}
      >
        <Text style={styles.backText}>Kembali ke Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ================= STYLE ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  header: {
    padding: 20,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2F5C",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3454D1",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    color: "#666",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2F5C",
    maxWidth: "60%",
    textAlign: "right",
  },

  statusBox: {
    marginTop: 12,
    backgroundColor: "#FFF3CD",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  statusText: {
    color: "#856404",
    fontWeight: "700",
    fontSize: 14,
  },

  backButton: {
    backgroundColor: "#3454D1",
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
  },

  backText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
