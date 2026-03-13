import { useAtom } from "jotai";
import atoms from "../../assets/atoms";

const useToDoList = () => {
  const [items, setItems] = useAtom(atoms.items);
  const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);

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

  const editItem = ({item, newContent}) => {
    setItems(prevItems => prevItems.map(i => i === item ? {...i, ...newContent} : i));
  }

  return {
    items,
    completedItems,
    addItem,
    completeItem,
    removeItem,
    editItem
  };
};

export default useToDoList;