import { router } from "expo-router";

import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Create your Account</Text>

      {/* Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#999999"
        style={styles.input}
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999999"
        secureTextEntry
        style={styles.input}
      />

      {/* Confirm Password */}
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#999999"
        secureTextEntry
        style={styles.input}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />

        <Text style={styles.dividerText}>Or sign up with</Text>
      </View>

      {/* Social */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/logo-gg.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/logo-fb.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/logo-x.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Signin */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Already have an account?</Text>

        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    paddingHorizontal: 30,

    justifyContent: "center",
  },

  logo: {
    width: 185,
    height: 185,

    alignSelf: "center",

    marginBottom: 5,
  },

  title: {
    fontSize: 22,

    color: "#111827",

    marginBottom: 25,

    textAlign: "left",

    fontFamily: "Kanit_400Regular",
  },

  input: {
    backgroundColor: "#F3F4F6",

    borderRadius: 12,

    padding: 15,

    marginBottom: 15,

    fontSize: 16,

    fontFamily: "Kanit_400Regular",
  },

  button: {
    backgroundColor: "#000080",

    padding: 16,

    borderRadius: 12,

    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",

    fontSize: 18,

    fontFamily: "Kanit_700Bold",
  },

  dividerWrapper: {
    marginTop: 25,

    alignItems: "center",
  },

  divider: {
    width: "100%",

    height: 1,

    backgroundColor: "#D1D5DB",

    marginBottom: 12,
  },

  dividerText: {
    color: "#6B7280",

    fontFamily: "Kanit_400Regular",
  },

  socialRow: {
    flexDirection: "row",

    justifyContent: "center",

    marginTop: 25,

    marginBottom: 35,
  },

  socialButton: {
    width: 55,
    height: 55,

    backgroundColor: "#FFFFFF",

    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 10,

    elevation: 6,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,

    shadowRadius: 5,
  },

  socialIcon: {
    width: 28,
    height: 28,
  },

  bottomRow: {
    flexDirection: "row",

    justifyContent: "center",
  },

  bottomText: {
    color: "#6B7280",

    fontFamily: "Kanit_400Regular",
  },

  signupText: {
    color: "#000080",

    fontFamily: "Kanit_700Bold",
  },
});
