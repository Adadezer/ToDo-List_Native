import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, FlatList, Text, View } from "react-native";
import ItemList from "./components/ItemList";
import EmptyList from "./components/EmptyList";
import InitialMessage from "./components/InitialMessage";
import styles from "./styles";



function Home({navigation}) {

  const [items, setItems] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <InitialMessage navigation={navigation} />       
      <FlatList
        data={items}
        renderItem={ItemList}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={() => (<View style={{height: 20}} />)}
      />

      <Button
        title="Clique para adicionar uma atividade"
        onPress={() => setItems(
        [...items,
          { 
            name: `item ${items.length + 1}`,
            description: `Descrição do item ${items.length + 1}`,
            done: false
          }
        ])}
      />
    </SafeAreaView>
  );
}

export default Home;