import { Stack, router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserContext = createContext();
const Layout = () => {
  const [user, setUser] = useState({
    phone: "",
    login: false,
  });
  const setUserData = (newUser) => {
    setUser(newUser);
  };
  const clearUserData = () => {
    setUser({ phone: "", login: false });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AsyncStorage.getItem("@user");
        if (!user) {
            router.replace("/home");
        } else {
            // user exists, setUserId from user
            const parsedUser = JSON.parse(user);
            setUser(parsedUser);
            router.replace("/home");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error or log it as needed
      }
    };
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      <Stack screenOptions={{ headerShown: false }}>
      </Stack>
    </UserContext.Provider>
  );
};
export default Layout;

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
