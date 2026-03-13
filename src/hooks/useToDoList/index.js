import { useAtom } from "jotai";
import atoms from "../../assets/atoms";

const useToDoList = () => {
  const [items, setItems] = useAtom(atoms.items);
  const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);

  const addItem = () => {
    setItems(prev => [
      ...prev,
      {
        name: `item ${prev.length + 1}`,
        description: `Descrição do item ${prev.length + 1}`,
        done: false
      }
    ]);
  };

  const completeItem = ({ item, index }) => {
    if (!item.done) {
      setItems(prev => prev.filter((_, i) => i !== index));

      setCompletedItems(prev => [
        ...prev,
        { ...item, done: true }
      ]);
    } else {
      setCompletedItems(prev =>
        prev.filter((_, i) => i !== index)
      );

      setItems(prev => [
        ...prev,
        { ...item, done: false }
      ]);
    }
  };

  const removeItem = ({ item, index }) => {
    if (!item.done) {
      setItems(prev => prev.filter((_, i) => i !== index));
    } else {
      setCompletedItems(prev =>
        prev.filter((_, i) => i !== index)
      );
    }
  };

  return {
    items,
    completedItems,
    addItem,
    completeItem,
    removeItem
  };
};

export default useToDoList;