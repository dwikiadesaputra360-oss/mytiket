import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { useRouter } from "expo-router";

const { width } = Dimensions.get('window');
const isLargeScreen = width > 768;

export default function FirstPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {/* Background Gambar Airport */}
      <ImageBackground
        source={require('../assets/images/backgroundd.png')} // Ganti dengan nama file gambar yang Anda upload
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Overlay gelap untuk membuat card lebih terlihat */}
        <View style={styles.overlay} />

        {/* Container untuk centering */}
        <View style={styles.container}>
          {/* Card Ungu */}
          <View style={[styles.card, isLargeScreen && styles.cardLarge]}>
            <View style={styles.header}>
              {/* Logo kecil di dalam card */}
              <Image
                source={require('../assets/images/logo.png')}
                style={[styles.headerImg, isLargeScreen && styles.headerImgLarge]}
                resizeMode="contain"
              />
              <Text style={[styles.title, isLargeScreen && styles.titleLarge]}>WELCOME</Text>
            </View>

            {/* Spacer untuk mendorong tombol ke bawah */}
            <View style={styles.spacer} />

            <TouchableOpacity onPress={() => router.push("/screens/login")}>
              <View style={[styles.btn, isLargeScreen && styles.btnLarge]}>
                <Text style={[styles.btnText, isLargeScreen && styles.btnTextLarge]}>Login</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay gelap semi-transparan
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 450,
    backgroundColor: 'rgba(108, 118, 148, 0.85)', // Diubah dari 0.85 ke 0.8 untuk membuat card lebih transparan lagi
    padding: 25,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#3e2573',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  cardLarge: {
    maxWidth: 500,
    padding: 35,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerImg: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  headerImgLarge: {
    width: 220,
    height: 220,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#00f7ff',
    letterSpacing: 2,
  },
  titleLarge: {
    fontSize: 30,
  },
  spacer: {
    height: 60,
  },
  btn: {
    backgroundColor: '#00eaff',
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 20,
  },
  btnLarge: {
    paddingVertical: 16,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    letterSpacing: 1,
  },
  btnTextLarge: {
    fontSize: 20,
  },
});
