import { useRef, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, FlatList, Text, View } from "react-native";
import ItemList from "./components/ItemList";
import EmptyList from "./components/EmptyList";
import styles from "./styles";
function Home() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [showCompletedItems, setShowCompletedItems] = useState(false);

  const flatListRef = useRef(null);

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!showCompletedItems);
  }

  const addItem = () => {
    setItems([
      ...items,
      {
        name: `item ${items.length + 1}`,
        description: `Descrição do item ${items.length + 1}`,
        done: false
      }
    ])
  }

  const completeItem = ({ item, index }) => {
    // se estiver na lista normal
    if (!item.done) {
      // remove da lista normal
      setItems(prevItems => prevItems.filter((_, i) => i !== index));

      // adiciona nos concluídos
      setCompletedItems(prevCompleted => [
        ...prevCompleted,
        { ...item, done: true }
      ]);

    } else {

      // remove da lista de concluídos
      setCompletedItems(prevCompleted =>
        prevCompleted.filter((_, i) => i !== index)
      );

      // adiciona de volta na lista normal
      setItems(prevItems => [
        ...prevItems,
        { ...item, done: false }
      ]);
    }
  };

   const removeItem = ({ item, index }) => {
    // se estiver na lista normal
    if (!item.done) {
      // remove da lista normal
      setItems(prevItems => prevItems.filter((_, i) => i !== index));
    }

    // remove da lista de concluídos
      setCompletedItems(prevCompleted =>
        prevCompleted.filter((_, i) => i !== index)
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      {showCompletedItems ? (
        <Text style={{ color: 'rgb(0, 99, 99)', fontSize: 20, marginBottom: 20, textAlign: 'center', fontStyle: 'italic' }}>
          Tarefas Concluídas: {completedItems.length}
        </Text>
      ) : (
        <Text style={{color: 'rgb(0, 99, 99)', fontSize: 20, marginBottom: 20, textAlign: 'center', fontStyle: 'italic'}}>
          Tarefas Pendentes: {items.length}
        </Text>    
      )}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={showCompletedItems ? completedItems : items}
        renderItem={({ item, index }) => <ItemList index={index} removeItemPress={removeItem} completeItemPress={completeItem} item={item} />}
        ref={flatListRef}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={() => (<View style={{height: 21}} />)}
        ListFooterComponent={() => (<View style={{height: 21}} />)}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />


      <View style={{gap: 10}}> 
        <Button
          title={showCompletedItems ? "Mostrar tarefas pendentes" : "Mostrar tarefas concluídas"}
          onPress={handleShowCompletedItems}
        />

        <Button
          title="Clique para adicionar uma atividade"
          onPress={addItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;