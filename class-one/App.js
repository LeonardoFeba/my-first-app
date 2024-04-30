import { Text, View } from "react-native";

import { styles } from "./class/StyleExtern";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mate</Text>
      <Text style={styles.paragraph}>Com Sabão</Text>
    </View>
  );
}
