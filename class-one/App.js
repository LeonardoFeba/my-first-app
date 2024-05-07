// import ExampleStyles from "./src/class-style/StyledStyle";

// export default function App() {
//   return <ExampleStyles />;
// }

import { StyleSheet, Platform, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "green" : "black",
  },
});

export default function App() {
  return <View style={styles.container}></View>;
}
