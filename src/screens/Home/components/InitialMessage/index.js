import { Button, Text, View } from "react-native";

function InitialMessage({ navigation }) {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 80,
        backgroundColor: 'rgba(0, 225, 255, 0.3)',
        padding: 20,
        alignItems: 'center',
        gap: 5,
        borderRadius: 10
      }}
    >
      <Text style={{ color: 'rgb(6, 185, 170)', fontWeight: 'bold', fontSize: 15 }}>
        Olá, minha princesa
      </Text>

      <Button
        title="Clique para ver o recado"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

export default InitialMessage;