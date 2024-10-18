import {View, Text, StyleSheet, Pressable} from 'react-native';

export function PasswordItem({data, removePassword}){
    return (
        <View onLangPress={removePassword} style={styles.container}>
        <Text style={styles.text}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: 'white'
    }
})