import * as React from 'react';
import styles from './App.module.css';
import {Text, Header, Sidebar, TodoList, AddTodo, TodoListCompleted} from "../components"
import {logo, UserArrowImage, UserAvatarImage, TasksImage} from "../assets";
import Context from "./context";

function App() {
    let [todos, setTodos] = React.useState([{
        userId: 0,
        id: 0,
        title: '',
        completed: false,
    }]);
    const apiUrl = `https://jsonplaceholder.typicode.com/todos`;
    fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
            setTodos(todos = repos);
        });
    const [todosCompleted, setTodosCompleted] = React.useState([
        {
            userId: 0,
            id:4,
            title:'Add Icon to Dashboard',
            completed:true,
        },
        {
            userId: 0,
            id:5,
            title:'Add Icon to Dashboard',
            completed:true,
        },
        {
            userId: 0,
            id:6,
            title:'Add Icon to Dashboard',
            completed:true,
        }
    ]);

    function editTodo(id:number){

    }

    function addTodo(title:string){
        setTodos(todos.concat([{
            userId: 0,
            id: Date.now(),
            title,
            completed: false
        }]))
    }
    function addTodoCompleted(title:string){
        setTodosCompleted(todosCompleted.concat([{
            userId: 0,
            id: Date.now(),
            title,
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
                    todo.completed = false;
                    addTodoCompleted(todo.title);
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
                    addTodo(todo.title);
                }
                return todo;
            })
        )
        removeTodoCompleted(id);
    }
  return (
      <Context.Provider value={{removeTodoCompleted, removeTodo, toggleTodo, toggleTodoCompleted, editTodo}}>
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
                    <div className={styles.userName}>Leanne Graham</div>
                </Text>
                <img className={styles.userImages} alt={"UserAvatarImage"} src={UserAvatarImage} style={{margin:5}}/>
                <img className={styles.userImages} alt={"UserArrowImage"} src={UserArrowImage} style={{margin:6}}/>
            </div>
        </Header>
        <div className={styles.layout}>
            <div>
                <Sidebar>
                    <div className={styles.sideBarButton}>
                        <img alt= {"TasksImage"} src={TasksImage}/>
                    </div>

                </Sidebar>
            </div>
            <div className={styles.content}>
                <AddTodo onCreate={addTodo}/>
                <div className={styles.totalTodo}>
                    <Text colorT={"#550DC9"}>
                        Total: {todos.length + todosCompleted.length}
                    </Text>
                </div>
                <div className={styles.todoText}>
                    To do({todos.length})
                </div>
                <div>

                    {todos.length ? <TodoList todos={todos}/> : <p>No todos</p>}

                </div>
            </div>
            <div className={styles.comleted}>
                <div className={styles.completedText}>
                    Completed({todosCompleted.length})
                </div>
                <div>

                    {todosCompleted.length ? <TodoListCompleted todos={todosCompleted}/> : <p>No completed todos</p>}

                </div>
            </div>
        </div>
    </div>
          </Context.Provider>
  );
}

export default App;
