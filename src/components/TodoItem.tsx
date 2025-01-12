import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";
import TodoEdit from "./TodoEdit";

interface TodoItemProps {
    todo  : Todo;
    onDelete : ()=> void
    onToggle : ()=> void
    onEdit : (newText : string)=> void
}

const TodoItem : React.FC<TodoItemProps> = ({
    todo,
     onDelete,
     onEdit,
     onToggle}) =>{
        const [isEditing, setIsEdeiting] = useState(false)

        const handleEdit = (newText : string)=>{
           onEdit(newText);
           setIsEdeiting(false);
        }

        if(isEditing){
            return <TodoEdit todo={todo} onSave={handleEdit} onCancel={()=>setIsEdeiting(false)}/>;
        }
        
    return (
       <View style={styles.container}>
        <TouchableOpacity onPress={onToggle} style={styles.todoText}>
            <Text style={[styles.text, todo?.completed && styles.completedText]}>{todo.text}</Text>
        </TouchableOpacity>
        <View style={styles.btnConatiner}>
            <TouchableOpacity style={styles.editBtn} onPress={()=>setIsEdeiting(true)}>
                <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
                <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
        </View>
       </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBlockColor: '#cccccc'
    },
    todoText:{
        flex: 1
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    completedText:{
        textDecorationLine: 'line-through',
        color: '#888888'
    },
    btnConatiner:{
        flexDirection: 'row'
    },
    editBtn:{
        backgroundColor: '#007aff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5
    },
    deleteBtn:{
        backgroundColor: 'crimson',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
       
    },
    btnText:{
        color: '#fff',
        fontSize: 15
    }
})

export default TodoItem;