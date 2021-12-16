import * as React from 'react';
import styles from './App.module.css';
import {Text, Header, Sidebar, TodoList, AddTodo, TodoListCompleted} from "../components"
import {logo, UserArrowImage, UserAvatarImage, TasksImage} from "../duck";
import Context from "./context";


function App() {
    const [todos, setTodos] = React.useState([
        {
            id:1,
            description:'Add Icon to Dashboard ',
            completed:false,
        },
        {
            id:2,
            description:'Create To-Do List ',
            completed:false,
        },
        {
            id:3,
            description:'Add Icon to Das ',
            completed:false,
        }
    ]);
    const [todosCompleted, setTodosCompleted] = React.useState([
        {
            id:4,
            description:'Add Icon to Dashboard',
            completed:true,
        },
        {
            id:5,
            description:'Add Icon to Dashboard',
            completed:true,
        },
        {
            id:6,
            description:'Add Icon to Dashboard',
            completed:true,
        }
    ]);

    function addTodo(description:string){
        setTodos(todos.concat([{
            description,
            id: Date.now(),
            completed: false
        }]))
    }
    function addTodoCompleted(description:string){
        setTodosCompleted(todosCompleted.concat([{
            description,
            id: Date.now(),
            completed: true
        }]))
    }
    function removeTodo(id:number){
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function removeTodoCompleted(id:number){
        setTodosCompleted(
            todosCompleted.filter(todo => todo.id !== id)
        )
    }

    function toggleTodo(id:number){

        setTodos(
            todos.map(todo =>{
                if (todo.id === id){
                    addTodoCompleted(todo.description);
                }
                return todo;
            })
        )
        removeTodo(id);
    }
    function toggleTodoCompleted(id:number){

        setTodosCompleted(
            todosCompleted.map(todo =>{
                if (todo.id === id){

                    addTodo(todo.description);

                }
                return todo;
            })
        )
        removeTodoCompleted(id);
    }
  return (
      <Context.Provider value={{removeTodoCompleted, removeTodo,addTodo, addTodoCompleted, toggleTodo, toggleTodoCompleted}}>
    <div className="App">
        <Header>
            <div className={styles.LogoAndText}>
                <img alt={"logo"} src={logo}/>
                <div>
                    To-Do
                </div>
            </div>
            <div className={styles.title}>
                Tasks
            </div>
            <div className={styles.user}>
                <Text>
                    <div style={{margin:3}}>Leanne Graham</div>
                </Text>
                <img className={styles.userImages} alt={"UserAvatarImage"} src={UserAvatarImage} style={{margin:5}}/>
                <img className={styles.userImages} alt={"UserArrowImage"} src={UserArrowImage} style={{margin:6}}/>
            </div>
        </Header>
        <div className={styles.layout}>
            <div>
                <Sidebar>
                    <div className={styles.sideBarButton}>
                        <img src={TasksImage}/>
                    </div>

                </Sidebar>
            </div>
            <div className={styles.content}>
                <AddTodo onCreate={addTodo}/>
                <div style={{width: "fit-content", fontSize:12, padding:4, marginTop:8, background: "#FEF6FF"}}>
                    <Text colorT={"#550DC9"}>
                        Total: {todos.length}
                    </Text>
                </div>
                <div style={{fontSize: 16, marginTop:16, marginBottom: 8, fontWeight: 600}}>
                    To do
                </div>
                <div>

                    {todos.length ? <TodoList todos={todos}/> : <p>No todos</p>}

                </div>
            </div>
            <div className={styles.comleted}>
                <div style={{fontSize: 16, fontWeight: 600, marginBottom:8}}>
                    Completed({todosCompleted.length})
                </div>
                <div>

                    {todosCompleted.length ? <TodoListCompleted todos={todosCompleted}/> : <p>No completed todos</p>}

                </div>
            </div>
        </div>
      <Text>

      </Text>
    </div>
          </Context.Provider>
  );
}

export default App;
