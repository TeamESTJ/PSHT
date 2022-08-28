import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { WebView } from "react-native-webview";

const PSHT = "https://psht-djmin43.vercel.app/";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ width: "100%", height: "100%" }}>
        <WebView source={{ uri: PSHT }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
