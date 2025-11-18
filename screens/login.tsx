import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';

import { useRouter } from "expo-router";

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isLargeScreen = width > 768;

export default function Example() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Background Airport Image */}
      <ImageBackground
        source={require('../assets/images/backgroundd.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Overlay gelap untuk kontras */}
        <View style={styles.overlay} />

        <View style={styles.container}>
          {/* Card Ungu */}
          <View style={[styles.card, isLargeScreen && styles.cardLarge]}>
            
            {/* Header dengan Logo */}
            <View style={styles.header}>
              <Image
                source={require('../assets/images/logo.png')}
                style={[styles.logoImg, isLargeScreen && styles.logoImgLarge]}
                resizeMode="contain"
              />

              <Text style={[styles.title, isLargeScreen && styles.titleLarge]}>WELCOME</Text>
            </View>

            {/* Form Input */}
            <View style={styles.form}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Your Name"
                  placeholderTextColor="#4DEFF7"  // Cyan terang untuk placeholder
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => setForm({ ...form, email })}
                  style={[styles.inputControl, isLargeScreen && styles.inputControlLarge]}
                  value={form.email}
                />
              </View>

              <View style={styles.input}>
                <TextInput
                  placeholder="........"
                  placeholderTextColor="#4DEFF7"  // Cyan terang untuk placeholder
                  autoCorrect={false}
                  onChangeText={password => setForm({ ...form, password })}
                  style={[styles.inputControl, isLargeScreen && styles.inputControlLarge]}
                  secureTextEntry={true}
                  value={form.password}
                />
              </View>

              {/* Forgot Password */}
              <TouchableOpacity>
                <Text style={[styles.forgotText, isLargeScreen && styles.forgotTextLarge]}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              {/* Button Login */}
              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/screens/menu")
                  }}>
                  <View style={[styles.btn, isLargeScreen && styles.btnLarge]}>
                    <Text style={[styles.btnText, isLargeScreen && styles.btnTextLarge]}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={[styles.dividerText, isLargeScreen && styles.dividerTextLarge]}>OR</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Button Register */}
              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/screens/register")
                  }}>
                  <View style={[styles.btnRegister, isLargeScreen && styles.btnRegisterLarge]}>
                    <Text style={[styles.btnRegisterText, isLargeScreen && styles.btnRegisterTextLarge]}>Register</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay gelap untuk kontras
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  card: {
    backgroundColor: 'rgba(108, 118, 148, 0.85)', // Transparan ungu keabu-abuan mirip gambar
    borderRadius: 30,
    padding: 30,
    paddingVertical: 25,
    width: '100%',
    borderWidth: 3,               // Garis pinggir tebal ungu tua/navy
    borderColor: '#3e2573',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  cardLarge: {
    maxWidth: 500,
    padding: 40,
    paddingVertical: 35,
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logoImg: {
    width: 160,
    height: 160,
    marginBottom: 0,
  },
  logoImgLarge: {
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00f7ff',
    letterSpacing: 2,
    marginTop: -5,
  },
  titleLarge: {
    fontSize: 32,
  },
  form: {
    marginTop: 3,
  },
  input: {
    marginBottom: 10,
  },
  inputControl: {
    height: 55,
    backgroundColor: '#2B2D5F',       // Ungu tua seperti input register
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 16,
    fontWeight: '500',
    color: '#4DEFF7',                 // Teks input warna cyan terang
    borderWidth: 2,
    borderColor: '#4DEFF7',          // Garis pinggir input cyan terang
  },
  inputControlLarge: {
    height: 60,
    fontSize: 18,
  },
  forgotText: {
    fontSize: 14,
    color: '#4a3470',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 2,
  },
  forgotTextLarge: {
    fontSize: 16,
  },
  formAction: {
    marginTop: 0,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 15,
    backgroundColor: '#00eaff',
  },
  btnLarge: {
    paddingVertical: 18,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 1,
  },
  btnTextLarge: {
    fontSize: 22,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#9d8bb8',
  },
  dividerText: {
    marginHorizontal: 15,
    fontSize: 14,
    fontWeight: '600',
    color: '#9d8bb8',
  },
  dividerTextLarge: {
    fontSize: 16,
  },
  btnRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 15,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#00eaff',
  },
  btnRegisterLarge: {
    paddingVertical: 18,
  },
  btnRegisterText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#00eaff',
    letterSpacing: 1,
  },
  btnRegisterTextLarge: {
    fontSize: 22,
  },
});
