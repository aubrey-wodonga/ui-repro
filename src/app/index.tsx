import { Button, Host, Text } from "@expo/ui/jetpack-compose";
import { Link } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Link href="/repro">
      <Host matchContents>
        <Button>
          <Text>Go to Repro</Text>
        </Button>
      </Host>
    </Link>
  </View>
);

export default HomeScreen;
