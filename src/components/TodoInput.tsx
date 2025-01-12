import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native"
import React, { useState } from "react"

// Arrow function
interface TodoInputProps {
    onAddTodo : (text:string)=> void
}

const TodoInput : React.FC <TodoInputProps> = ({onAddTodo})=> {
    const [text, setText] = useState('');

    const handleAddTodo=()=> {
        if(text.trim()){
            onAddTodo(text.trim())
            setText('')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={setText} style={styles.input} placeholder="Add a new Todo..."></TextInput>
            <TouchableOpacity  onPress={handleAddTodo} style={styles.addtodoBtn}>
                <Text style={styles.addtodoBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10
    },
    addtodoBtn: {
        backgroundColor: '#007aff',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addtodoBtnText:{
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default TodoInput