import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Pesan({ navigation }: any) {
  const [jumlah, setJumlah] = useState("1");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Pemesanan Tiket</Text>

      <Text>Jumlah Tiket</Text>
      <TextInput
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
        value={jumlah}
        onChangeText={setJumlah}
      />

      <Button
        title="Pesan Sekarang"
        onPress={() => alert("Tiket berhasil dipesan!")}
      />
    </View>
  );
}
