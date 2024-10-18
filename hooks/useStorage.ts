import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const getItem = async (key: string): Promise<string[]> => {
    try {
        const passwords = await AsyncStorage.getItem(key);
        return JSON.parse(passwords || '[]'); 
    } catch (error) {
        console.log('Error ao buscar', error);
        return [];
    }
  }

  const saveItem = async (key: string, value: string): Promise<void> => {
    try {
        let passwords = await getItem(key);
        passwords.push(value);
        await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
        console.log('Error ao salvar', error);
    }
  }

  const removeItem = async (key: string, item: string): Promise<string[]> => {
    try {
        let passwords = await getItem(key);

        let myPasswords = passwords.filter((password) => {
            return (password !== item);
        });
        await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
        return myPasswords;

    } catch (error) {
        console.log('Error ao remover', error);
        return []
    }
  }

  return { getItem, saveItem, removeItem };
}

export default useStorage;
