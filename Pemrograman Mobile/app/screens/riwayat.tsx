import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  SafeAreaView,
  Alert,
  RefreshControl,
  Modal,
  TextInput
} from "react-native";

import { useRouter, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Order = {
  id: string;
  title: string;
  price: string;
  nama: string;
  alamat: string;
  noHp: string;
  tanggal: string;
  waktu: string;
  status: string;
};

export default function Riwayat() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // State untuk Edit Modal
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [editNama, setEditNama] = useState("");
  const [editAlamat, setEditAlamat] = useState("");
  const [editNoHp, setEditNoHp] = useState("");

  
  // Load riwayat dari AsyncStorage setiap kali halaman difokuskan
  useFocusEffect(
    useCallback(() => {
      loadOrders();
    }, [])
  );

  const loadOrders = async () => {
    try {
      setLoading(true);
      const ordersJson = await AsyncStorage.getItem('orders');
      
      if (ordersJson) {
        const parsedOrders = JSON.parse(ordersJson);
        setOrders(parsedOrders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
      Alert.alert("Error", "Gagal memuat riwayat");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadOrders();
  };
  // FUNGSI EDIT
  const openEditModal = (order: Order) => {
    setEditingOrder(order);
    setEditNama(order.nama);
    setEditAlamat(order.alamat);
    setEditNoHp(order.noHp);
    setEditModalVisible(true);
  };

  const handleSaveEdit = async () => {
    if (!editingOrder) return;

    if (!editNama || !editAlamat || !editNoHp) {
      Alert.alert("Peringatan", "Semua data wajib diisi");
      return;
    }

    try {
      const updatedOrders = orders.map(order => 
        order.id === editingOrder.id 
          ? { ...order, nama: editNama, alamat: editAlamat, noHp: editNoHp }
          : order
      );
      
      await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
      setEditModalVisible(false);
      Alert.alert("Berhasil", "Data berhasil diperbarui");
      
      // Reset form
      setEditNama("");
      setEditAlamat("");
      setEditNoHp("");
      setEditingOrder(null);
    } catch (error) {
      console.error("Error updating order:", error);
      Alert.alert("Error", "Gagal memperbarui data");
    }
  };

  // FUNGSI DELETE SATU PESANAN
  const handleDeleteOne = (order: Order) => {
    Alert.alert(
      "Hapus Pesanan",
      `Yakin ingin menghapus pesanan "${order.title}"?\n\nNama: ${order.nama}`,
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Hapus",
          style: "destructive",
          onPress: async () => {
            try {
              // Filter order yang akan dihapus
              const updatedOrders = orders.filter(o => o.id !== order.id);
              
              // Simpan ke AsyncStorage
              if (updatedOrders.length > 0) {
                await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
              } else {
                await AsyncStorage.removeItem('orders');
              }
              
              // Update state
              setOrders(updatedOrders);
              
              Alert.alert("Berhasil", "Pesanan berhasil dihapus");
            } catch (error) {
              console.error("Error deleting order:", error);
              Alert.alert("Error", "Gagal menghapus pesanan");
            }
          }
        }
      ]
    );
  };

  // FUNGSI HAPUS 
  const handleClearAll = () => {
    Alert.alert(
      "Hapus Semua Riwayat",
      `Anda akan menghapus ${orders.length} pesanan. Tindakan ini tidak dapat dibatalkan!`,
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Hapus Semua",
          style: "destructive",
          onPress: async () => {
            try {
              // Hapus dari AsyncStorage
              await AsyncStorage.removeItem('orders');
              
              // Update state
              setOrders([]);
              
              Alert.alert("Berhasil", "Semua riwayat berhasil dihapus");
            } catch (error) {
              console.error("Error clearing orders:", error);
              Alert.alert("Error", "Gagal menghapus riwayat");
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Memuat riwayat...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Riwayat Pemesanan</Text>
          {orders.length > 0 && (
            <TouchableOpacity 
              onPress={handleClearAll}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.clearAllText}>Hapus Semua</Text>
            </TouchableOpacity>
          )}
        </View>

        {orders.length > 0 ? (
          <>
            <Text style={styles.countText}>Total: {orders.length} pesanan</Text>
            
            {orders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                {/* TANGGAL & ACTION BUTTONS */}
                <View style={styles.dateRow}>
                  <Text style={styles.dateText}>
                    {order.tanggal} • {order.waktu}
                  </Text>
                  <View style={styles.actionButtons}>
                    {/* TOMBOL EDIT */}
                    <TouchableOpacity 
                      onPress={() => openEditModal(order)}
                      activeOpacity={0.6}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      style={styles.iconButton}
                    >
                      <Ionicons name="create-outline" size={22} color="#3454D1" />
                    </TouchableOpacity>
                    
                    {/* TOMBOL DELETE */}
                    <TouchableOpacity 
                      onPress={() => handleDeleteOne(order)}
                      activeOpacity={0.6}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      style={styles.iconButton}
                    >
                      <Ionicons name="trash-outline" size={22} color="#ff4444" />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* DATA PEMESAN */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Data Pemesan</Text>
                  
                  <View style={styles.row}>
                    <Text style={styles.label}>Nama</Text>
                    <Text style={styles.value}>{order.nama}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.label}>Alamat</Text>
                    <Text style={styles.value}>{order.alamat}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.label}>No HP</Text>
                    <Text style={styles.value}>{order.noHp}</Text>
                  </View>
                </View>

                {/* DETAIL TIKET */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Detail Tiket</Text>

                  <View style={styles.row}>
                    <Text style={styles.label}>Tiket</Text>
                    <Text style={styles.value}>{order.title}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.label}>Harga</Text>
                    <Text style={styles.value}>{order.price}</Text>
                  </View>

                  <View style={styles.statusBox}>
                    <Text style={styles.statusText}>{order.status}</Text>
                  </View>
                </View>
              </View>
            ))}
          </>
        ) : (
          // EMPTY STATE
          <View style={styles.emptyState}>
            <Ionicons name="receipt-outline" size={80} color="#ccc" />
            <Text style={styles.emptyTitle}>Belum Ada Riwayat</Text>
            <Text style={styles.emptyDesc}>
              Anda belum memiliki riwayat pemesanan.{"\n"}
              Pesan tiket sekarang!
            </Text>
            
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => router.push("/screens/menu")}
              activeOpacity={0.7}
            >
              <Text style={styles.orderButtonText}>Pesan Tiket</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push("/screens/homeScreen")}
        >
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.navText}>Beranda</Text>
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
          onPress={() => onRefresh()}
        >
          <Ionicons name="time" size={24} color="#3454D1" />
          <Text style={[styles.navText, styles.navTextActive]}>Riwayat Pemesanan</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL EDIT */}
      <Modal transparent visible={editModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Edit Data Pemesan</Text>
              <TouchableOpacity onPress={() => setEditModalVisible(false)}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalSubtitle}>
              {editingOrder?.title}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nama Lengkap"
              value={editNama}
              onChangeText={setEditNama}
            />

            <TextInput
              style={styles.input}
              placeholder="Alamat"
              value={editAlamat}
              onChangeText={setEditAlamat}
              multiline
            />

            <TextInput
              style={styles.input}
              placeholder="No Handphone"
              keyboardType="phone-pad"
              value={editNoHp}
              onChangeText={setEditNoHp}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setEditModalVisible(false)}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelText}>Batal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.saveButton,
                  {
                    backgroundColor:
                      editNama && editAlamat && editNoHp ? "#3454D1" : "#aaa",
                  },
                ]}
                disabled={!editNama || !editAlamat || !editNoHp}
                onPress={handleSaveEdit}
                activeOpacity={0.7}
              >
                <Text style={styles.saveText}>Simpan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

/* ================= STYLE ================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 16,
    color: "#666",
  },

  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2F5C",
  },

  clearAllText: {
    color: "#ff4444",
    fontSize: 14,
    fontWeight: "600",
  },

  countText: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 4,
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  dateText: {
    fontSize: 12,
    color: "#999",
  },

  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },

  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },

  section: {
    marginBottom: 16,
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

  // EMPTY STATE
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2F5C",
    marginTop: 16,
    marginBottom: 8,
  },

  emptyDesc: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },

  orderButton: {
    backgroundColor: "#3454D1",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },

  orderButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  // MODAL EDIT
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2F5C",
  },

  modalSubtitle: {
    fontSize: 14,
    color: "#3454D1",
    marginBottom: 20,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },

  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },

  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },

  cancelText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },

  saveButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
    color: "#3454D1",
    fontWeight: "600",
  },
});








