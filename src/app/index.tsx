import { Button, Host, Text } from "@expo/ui/jetpack-compose";
import { router } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Host matchContents>
      <Button onClick={() => router.navigate("/repro")}>
        <Text>Go to Repro</Text>
      </Button>
    </Host>
  </View>
);

export default HomeScreen;
