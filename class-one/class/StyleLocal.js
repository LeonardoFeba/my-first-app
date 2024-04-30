import { StyleSheet, Text, View } from "react-native";

export default function AppInner() {
  return (
    <View style={styles.container}>
      <Text>Mate</Text>
      <Text>Com Limão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  paragraph: {
    paddingTop: 20,
    fontSize: 30,
    color: "yellow",
  },
});
