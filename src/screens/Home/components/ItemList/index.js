import { Text, View } from "react-native";
function ItemList({ item }) {
  const backgroundColor = item.done
    ? 'rgba(4, 131, 131, 0.7)'
    : 'rgba(90, 196, 196, 0.7)';

  return (
    <View
      style={{
        backgroundColor,
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

export default ItemList;