import { ElevatedCard, Host, Text } from "@expo/ui/jetpack-compose";
import { paddingAll, width } from "@expo/ui/jetpack-compose/modifiers";
import { View, Text as RNText } from "react-native";

const ReproScreen = () => (
  <View
    style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}
  >
    <RNText>The card below will blink out of view when navigating back</RNText>
    <Host matchContents>
      <ElevatedCard modifiers={[width(300)]}>
        <Text modifiers={[paddingAll(16)]}>This card</Text>
      </ElevatedCard>
    </Host>
  </View>
);

export default ReproScreen;
