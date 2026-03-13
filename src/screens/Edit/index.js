import { Pressable, Text, View } from "react-native";
import useToDoList from "../../hooks/useToDoList";
import styles from "../Home/styles";

function Edit({ navigation, route }) {
  const { item } = route.params;

  const { editItem } = useToDoList();

  const handleEdit = () => {
    editItem({item, newContent: {name: item.name, description: `${new Date().toISOString()} - ${item.description}`}});
    navigation.goBack();
  }
  
  return (
    <View style={styles.container }>
      <View style={{ gap: 10, marginHorizontal: 20 }}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>

        <Pressable style={styles.buttons} onPress={handleEdit}>
          <Text style={styles.buttonsText}>Atualizar</Text>
        </Pressable>

        <Pressable style={styles.buttons} title="Cancelar" onPress={navigation.goBack}>
          <Text style={styles.buttonsText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Edit;