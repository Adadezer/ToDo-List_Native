import { Button, Text, View } from "react-native";

function Details({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <View
        style={{
          margin: 10,
          backgroundColor: 'rgba(0, 225, 255, 0.3)',
          padding: 20,
          alignItems: 'center',
          gap: 10,
          borderRadius: 10,
          width: '85%'
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontStyle: 'italic',
            textAlign: 'center',
            color: 'rgb(1, 116, 106)'
          }}
        >
          Você tem sido o melhor dos meus dias, amo suas mensagens, seus áudios,
          seus vídeos, sua companhia, seu carinho... Já estou com saudades de você
        </Text>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Voltar para a página inicial"
            onPress={() => navigation.goBack()}
          />
        </View>

      </View>
    </View>
  );
}

export default Details;