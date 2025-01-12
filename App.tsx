import { StyleSheet, Text, View } from "react-native";
import TodoInput from "./src/components/TodoInput";
import { useState } from "react";
import TodoList from "./src/components/TodoList";
import {Todo} from "./src/types";



function App() {

  const [todoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (text:string)=> {


    setTodoList([...todoList, {
      id: Date.now().toString(),
      text,
      completed: false
    }]);

  };

 
  // Function to delete doto
  const deleteTodo = (id: string)=>{
    setTodoList(todoList.filter(item=> item.id !== id))
  };

  //edit todo items 
  const editTodo = (id: string, newText : string)=> {
    console.log(id, newText, 'form app.tsx');

    setTodoList(todoList.map(item=> item.id === id ? {
      ...item,
      text : newText
    } : item))
  }

  // filter completed on toggle
  const toggleTodo = (id:string)=> {
    setTodoList(todoList.map(item=> item.id === id ? {
      ...item,
      completed : !item.completed
    } : item))
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo}/>
      <TodoList 
        onToggleTodo={toggleTodo} 
        onDeleteTodo={deleteTodo} 
        onEditTodo = {editTodo}
        todoList={todoList} 
      />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  }
})
export default App;