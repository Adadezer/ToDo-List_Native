import { Text, View } from "react-native";

function EmptyList() {
  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text>Adicione uma atividade para começar</Text>
    </View>
  );
}

export default EmptyList;