import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Logout({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Kamu telah logout</Text>

      <Button title="Kembali ke Halaman Awal" onPress={() => navigation.navigate('HalamanAwal')} />
    </View>
  );
}
