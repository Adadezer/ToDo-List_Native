import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

function ItemList({ item }) {
  const backgroundColor = item.done
    ? 'rgba(0,180,0,0.8)'
    : 'rgba(255,0,0,0.7)';

  return (
    <View
      style={{
        backgroundColor,
        padding: 20,
        marginVertical: 8,
      }}
    >
      <Text>{item.name}</Text>
    </View>
  );
}

function EmptyList() {
  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text>Adicione uma atividade para começar</Text>
    </View>
  );
}

function Home({navigation}) {

  const [items, setItems] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
          backgroundColor: 'rgba(0, 225, 255, 0.3)',
          padding: 20,
          alignItems: 'center',
          gap: 5,
          borderRadius: 10

        }}
      >

      <Text style={{color: 'rgb(6, 185, 170)', fontWeight: 'bold', fontSize: 15}}>Olá, minha princesa</Text>
      
      <Button
        title="Clique para ver o recado"
        onPress={() => navigation.navigate('Detalhes')}
      />
      </View>
        
      <FlatList data={items} renderItem={ItemList} ListEmptyComponent={EmptyList} />

      <View style={{marginBottom: 20}}>
        <Button
          title="Clique para adicionar uma atividade"
          onPress={() => setItems([...items, { name: `item ${items.length + 1}`, done: false }])}
          />
      </View>

    </View>
  );
}

export default Home;