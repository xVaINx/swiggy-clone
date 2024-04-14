import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      ></Stack.Screen>
    </Stack>
  );
};
export default Layout;
