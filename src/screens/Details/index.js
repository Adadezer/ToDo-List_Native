import { Button, Text, View } from "react-native";

function Details({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details teste componente separado</Text>
      <Button
        title="Voltar para a página inicial"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default Details;