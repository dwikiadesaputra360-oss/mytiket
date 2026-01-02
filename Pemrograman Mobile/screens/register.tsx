import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/backgroundd.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.card}>
        {/* User Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <View style={styles.iconHead} />
            <View style={styles.iconBody} />
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>REGISTER</Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#88f0f8"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#88f0f8"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          placeholder="Password"
          placeholderTextColor="#88f0f8"
          secureTextEntry
          style={styles.input}
        />

        {/* Register Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/screens/login")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(108, 118, 148, 0.85)", // Semi transparan agar background terlihat samar
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: 320,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#3e2573",
    
  },
  iconContainer: {
    marginBottom: 20,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6CFEFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#1B2444",
  },
  iconHead: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#1B2444",
    position: "absolute",
    top: 15,
  },
  iconBody: {
    width: 28,
    height: 20,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: "#1B2444",
    position: "absolute",
    bottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6CFEFF",
    marginBottom: 30,
    letterSpacing: 3,
  },
  input: {
    width: "100%",
    backgroundColor: "#1B2444",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: "#88f0f8",
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#6CFEFF",
  },
  button: {
    width: "100%",
    backgroundColor: "#6CFEFF",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#1B2444",
    fontSize: 18,
    fontWeight: "bold",
  },
});
