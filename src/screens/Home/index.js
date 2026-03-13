import { useRef, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, Text, View } from "react-native";
import ItemList from "./components/ItemList";
import EmptyList from "./components/EmptyList";
import styles from "./styles";
import useToDoList from "../../hooks/useToDoList";

function Home() {
  const { items, completedItems, addItem, completeItem, removeItem } = useToDoList();
  const [showCompletedItems, setShowCompletedItems] = useState(false);

  const flatListRef = useRef(null);

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!showCompletedItems);
  }

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


      <View style={{ gap: 10, marginHorizontal: 20 }}>

        <Pressable onPress={handleShowCompletedItems} style={styles.buttons}>
          <Text style={styles.buttonsText}>
            {showCompletedItems
              ? "Mostrar tarefas pendentes"
              : "Mostrar tarefas concluídas"}
          </Text>
        </Pressable>

        <Pressable onPress={addItem} style={styles.buttons}>
          <Text style={styles.buttonsText}> Clique para adicionar uma atividade </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

export default Home;