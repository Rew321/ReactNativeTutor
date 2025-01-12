import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";
import { useState } from "react";




interface TodoEditProps {
    todo : Todo,
    onSave : (newText : string)=> void,
    onCancel : ()=> void
}
const TodoEdit : React.FC<TodoEditProps> = ({todo, onSave, onCancel})=> {

    const [text, setText] = useState(todo?.text);

    const handleSave = () => {
        if (text.trim()) {
            onSave(text.trim());
        }
    }

    return ( 
        <View style={styles.conatiner}>
            <TextInput value={text} onChangeText={setText} style={styles.input}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCancel}
                   style={styles.cancelBtn}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    conatiner : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    },
    input : {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10
    },
    buttonContainer : {
        flexDirection: 'row',
    },
    saveBtn : {
        backgroundColor: '#4cd964',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5
    },
    cancelBtn : {
        backgroundColor: '#ff9500',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5
    },
    btnText : {
        color: '#fff',
        fontWeight: 'bold'
    }
});


export default TodoEdit;
