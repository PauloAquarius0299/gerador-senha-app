import useStorage from "@/hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PasswordItem } from "./components/passwordItem";

type Password = string; 

export function Passwords(){
    const [listPassword, setListPassword] = useState<Password[]>([]); 
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage()

    async function handleDeletePassword(item: Password){
        const passwords = await removeItem("@pass", item);
        setListPassword(passwords); 
    }

    useEffect(() => {
        async function loadPassword(){
            const passwords = await getItem('@pass');
            setListPassword(passwords); 
        }

        loadPassword();
    }, [focused]);

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList 
                style={{flex: 1, paddingTop: 14}}
                data={listPassword}
                keyExtractor={(item) => String(item)}
                renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    content: {

    }
});
