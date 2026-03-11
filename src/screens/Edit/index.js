import { Text, View } from "react-native";

function Edit({route}) {
  const { item } = route.params;

  return (
    <View>
      <Text>Essa é a tela de edição, ainda em construção!</Text>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

export default Edit;