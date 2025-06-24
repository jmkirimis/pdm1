import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons"; // ou outro pacote de ícones que estiver usando
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/navigationTypes";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Chat",
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                  <Ionicons name="information-circle-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
