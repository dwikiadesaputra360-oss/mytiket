import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  ImageBackground,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

type Ticket = {
  title: string;
  price: string;
};

export default function Menu() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  // FORM STATE
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");

  const openModal = (title: string, price: string) => {
    setSelectedTicket({ title, price });
    setModalVisible(true);
  };

  const handlePesan = () => {
    if (!selectedTicket) return;

    if (!nama || !alamat || !noHp) {
      Alert.alert("Peringatan", "Semua data wajib diisi");
      return;
    }

    setModalVisible(false);

    router.push({
      pathname: "/screens/riwayat",
      params: {
        title: selectedTicket.title,
        price: selectedTicket.price,
        nama,
        alamat,
        noHp,
      },
    });

    // reset form
    setNama("");
    setAlamat("");
    setNoHp("");
  };

  const TicketItem = ({
    image,
    title,
    desc,
    price,
  }: {
    image: string;
    title: string;
    desc: string;
    price: string;
  }) => (
    <View style={styles.ticketWrapper}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.ticketImage}
        imageStyle={styles.ticketImageStyle}
      >
        <Text style={styles.imagePrice}>{price}</Text>
        <Text style={styles.imageTitle}>{title}</Text>
      </ImageBackground>

      <View style={styles.ticketCard}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{desc}</Text>
        <Text style={styles.cardPrice}>{price}</Text>

        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => openModal(title, price)}
        >
          <Text style={styles.orderText}>Pesan Tiket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pesan Tiket</Text>
        </View>

        <TicketItem
          image="https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/05/Kolam-Renang-di-Tangerang-1.webp"
          title="Kolam Renang Utama"
          desc="Kolam renang utama menyediakan berbagai wahana air."
          price="Rp 50.000 / orang"
        />

        <TicketItem
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqew_gQx3l3-vC4FYkfXyZhDs2yJK7va6AHYdsUrmdQPGjj1I01z9S_bV0mUoWkDLoHxwWuNhYsA2Laa1neCSqDvHsz_tHbsyR1U8naMlBwOfhSB8CyaYY-MXFpDTB4I14x8atdhLq3gA/s1600/kolam-olympic+-+PURBALINGGA+DOT+INFO.jpg"
          title="Kolam Olimpik"
          desc="Kolam dengan standar olimpik."
          price="Rp 75.000 / orang"
        />

        <TicketItem
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqew_gQx3l3-vC4FYkfXyZhDs2yJK7va6AHYdsUrmdQPGjj1I01z9S_bV0mUoWkDLoHxwWuNhYsA2Laa1neCSqDvHsz_tHbsyR1U8naMlBwOfhSB8CyaYY-MXFpDTB4I14x8atdhLq3gA/s1600/kolam-olympic+-+PURBALINGGA+DOT+INFO.jpg"
          title="Kolam Anak-anak"
          desc="Kolam anak dilengkapi wahana, cocok untuk usia 8–12 tahun."
          price="Rp 75.000 / orang"
        />
      </ScrollView>

      {/* MODAL FORM */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              Pesan Tiket - {selectedTicket?.title}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nama Lengkap"
              value={nama}
              onChangeText={setNama}
            />

            <TextInput
              style={styles.input}
              placeholder="Alamat"
              value={alamat}
              onChangeText={setAlamat}
            />

            <TextInput
              style={styles.input}
              placeholder="No Handphone"
              keyboardType="phone-pad"
              value={noHp}
              onChangeText={setNoHp}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Batal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor:
                      nama && alamat && noHp ? "#3454D1" : "#aaa",
                  },
                ]}
                disabled={!nama || !alamat || !noHp}
                onPress={handlePesan}
              >
                <Text style={{ color: "#fff" }}>Pesan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

/* ================= STYLE ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7FB" },
  header: { padding: 20, alignItems: "center" },
  headerTitle: { fontSize: 24, fontWeight: "700", color: "#1F2F5C" },

  ticketWrapper: { marginHorizontal: 16, marginBottom: 24 },
  ticketImage: { height: 180, justifyContent: "flex-end", padding: 16 },
  ticketImageStyle: { borderRadius: 18 },

  imagePrice: { color: "#fff", fontSize: 14 },
  imageTitle: { color: "#fff", fontSize: 20, fontWeight: "700" },

  ticketCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginTop: -20,
    elevation: 4,
  },

  cardTitle: { fontSize: 18, fontWeight: "700", color: "#1F2F5C" },
  cardDesc: { fontSize: 14, color: "#555", marginVertical: 6 },
  cardPrice: { fontSize: 16, fontWeight: "700", color: "#3454D1" },

  orderButton: {
    backgroundColor: "#3454D1",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  orderText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
  },

  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 16 },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },

  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  submitBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
