import { Tabs, router } from "expo-router";
import {
  FontAwesome,
  FontAwesome6,
  Foundation,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "orange", // Set the color when the tab is selected
        tabBarInactiveTintColor: "gray", // Set the color when the tab is not selected
        tabBarStyle: { height: 65 },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={30} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the font size for the tab title
            padding: 1,
            marginBottom: 2,
          },
          headerShown: false,
          title: "Swiggy",
          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name="food/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bowl-food" size={30} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the font size for the tab title
            padding: 1,
            marginBottom: 2,
          },
          headerShown: false,
          title: "Food",
          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name="instamart/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-grocery-store" size={30} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the font size for the tab title
            padding: 1,
            marginBottom: 2,
          },
          headerShown: false,
          title: "Instamart",
          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name="dineout/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" size={30} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the font size for the tab title
            padding: 1,
            marginBottom: 2,
          },
          headerShown: false,
          title: "Dineout",
          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name="creditCard/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={30} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the font size for the tab title
            padding: 1,
            marginBottom: 2,
          },
          headerShown: false,
          title: "Credit Card",
          headerTitle: "",
        }}
      />
    </Tabs>
  );
};
export default Layout;
