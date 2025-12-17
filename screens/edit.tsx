import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function Edit() {
  const [nama, setNama] = useState('');
  const [noHp, setNoHp] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Edit Profil</Text>

      <Text>Nama</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        value={nama}
        onChangeText={setNama}
      />

      <Text>No HP</Text>
      <TextInput
        keyboardType="phone-pad"
        style={{ borderWidth: 1, padding: 8, marginBottom: 20 }}
        value={noHp}
        onChangeText={setNoHp}
      />

      <Button title="Simpan Perubahan" onPress={() => alert("Profil diperbarui!")} />
    </View>
  );
}
