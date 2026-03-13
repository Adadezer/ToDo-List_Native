import { useRef, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, FlatList, Text, View } from "react-native";
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