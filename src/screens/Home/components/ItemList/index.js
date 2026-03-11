import { Text, View, Pressable, Alert } from "react-native";
import { stylesItemList } from "./styles";
import { Pencil, Trash2, CircleCheckBig } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

function ActionButton({ onPress, icon }) {
  return (
    <Pressable onPress={onPress} style={{ padding: 8 }}>
      {icon === "edit" && <Pencil size={24} color="#004d96" />}
      {icon === "delete" && <Trash2 size={24} color="#004d96" />}
      {icon === "check-circle" && <CircleCheckBig size={24} color="#004d96" />}
    </Pressable>
  );
}
function ItemList({ item, index, completeItemPress, removeItemPress }) {

  const stylesList = stylesItemList(item.done);

  const navigation = useNavigation();

  const handleClickEdit = () => {
    // Alert.alert("O botão Editar foi clicado, funcionou!");
    navigation.navigate("Editar", { item });
  }

  const handleClickDelete = () => {
    removeItemPress({item, index});
  }
  const handleClickComplete = () => {
    completeItemPress({item, index});
  }

  return (
    <View style={stylesList.containerItemList}>
      <View style={stylesList.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description || 'Sem descrição'}</Text>
      </View>

      <View style={stylesList.actionContainer}>
        <ActionButton icon="edit" title={"Editar"} onPress={handleClickEdit} />
        <ActionButton icon="delete" title={"Excluir"} onPress={handleClickDelete} />
        <ActionButton icon="check-circle" title={"Concluir"} onPress={handleClickComplete} />

      </View>
    </View>
  );
}

export default ItemList;