import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUser } from "../_layout";

const Index = () => {
  const { user, setUserData, clearUserData } = useUser();
  const [page, setPage] = useState("");

  useEffect(() => {
    const getUserData = () => {
      try {
        if (user.login == false) {
          setUserData({
            phone: "",
            login: false,
          });
          setPage("Profile");
        } else {
          setPage("Loggedin");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {page == "" ? (
        <ActivityIndicator size="large" color="#01A39F" />
      ) : page == "Profile" ? (
        <>
          <Image
            source={require("../../assets/foodBanner.png")} // Make sure to use `source` instead of `src`
            style={styles.banner}
          />
          <Text style={styles.brandName}>ACCOUNT</Text>
          <Text style={styles.descriptionText}>
            Login / Create account to manage orders.
          </Text>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="Enter Phone number"
              style={styles.searchInputText}
              keyboardType="numeric" // Use numeric keyboard
              maxLength={10} // Limit input to 10 characters
              value={user.phone} // Controlled component
              onChangeText={(num) => {
                setUserData({
                  phone: num,
                  login: false,
                });
              }} // Handle text changes
            />
          </View>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => {
              if (String(user.phone).length == 10) setPage("Otp");
              else alert("Please enter a valid mobile number");
            }}
          >
            <Text style={styles.shopNowButtonText}>Login / SignUp</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "90%",
              marginVertical: 5,
            }}
          >
            <Text style={[styles.descriptionText, { width: "auto" }]}>
              By clicking, I accept{" "}
            </Text>
            <Text
              style={[
                styles.descriptionText,
                { color: "black", width: "auto", fontWeight: "bold" },
              ]}
            >
              Terms & Conditions
            </Text>
            <Text style={[styles.descriptionText, { width: "auto" }]}>
              {" "}
              and{" "}
            </Text>
            <Text
              style={[
                styles.descriptionText,
                { color: "black", width: "auto", fontWeight: "bold" },
              ]}
            >
              Privacy Policy.
            </Text>
          </View>
        </>
      ) : page == "Otp" ? (
        <>
          <Image
            source={require("../../assets/verifyOtp.png")} // Make sure to use `source` instead of `src`
            style={styles.banner}
          />
          <Text style={styles.brandName}>Enter OTP</Text>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="OTP"
              style={styles.searchInputText}
              keyboardType="numeric" // Use numeric keyboard
              maxLength={6} // Limit input to 10 characters
            />
          </View>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => {
              setUserData({
                phone: user.phone,
                login: true,
              });
              setPage("Loggedin");
            }}
          >
            <Text style={styles.shopNowButtonText}>Submit</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "90%",
              marginVertical: 5,
            }}
          >
            <Text style={[styles.descriptionText, { width: "auto" }]}>
              Didn't recieve OTP?{" "}
            </Text>
            <Text
              style={[
                styles.descriptionText,
                { color: "orange", width: "auto", fontWeight: "bold" },
              ]}
            >
              Click Here.
            </Text>
            <Text style={[styles.descriptionText, { marginTop: 100 }]}>
              Try OTP: 123456{" "}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Image
            source={require("../../assets/profilePageIcon.png")} // Make sure to use `source` instead of `src`
            style={styles.banner}
          />
          <Text style={styles.brandName}>Welcome to the Swiggy!</Text>
          <Text
            style={[
              styles.descriptionText,
              { color: "black", width: "auto", fontWeight: "bold", width:"90%" },
            ]}
          >
            Phone No.: {user.phone}
          </Text>

          <TouchableOpacity
            style={[styles.shopNowButton, { marginTop:100 }]}
            onPress={() => {
              clearUserData();
              setPage("Profile");
            }}
          >
            <Text style={styles.shopNowButtonText}>Logout</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f3f3f3",
  },
  banner: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
  },
  searchInput: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    borderRadius: 10,
    backgroundColor: "white",
  },
  searchInputText: {
    fontSize: 17,
    color: "gray",
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black", // Change color as needed
    marginVertical: 10,
    width: "90%",
    justifyContent: "flex-start",
  },
  descriptionText: {
    width: "90%",
    fontSize: 16,
    marginBottom: 10,
    color: "gray",
  },
  shopNowButton: {
    backgroundColor: "orange", // Change color as needed
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
    width: "90%",
  },
  shopNowButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Index;
