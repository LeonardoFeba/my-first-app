import { Text, View } from "react-native";

export default function AppInline() {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#03A688",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "green",
        }}
      >
        Mate
      </Text>
      <Text>Com Limão</Text>
    </View>
  );
}
