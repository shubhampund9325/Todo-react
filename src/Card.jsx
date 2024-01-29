import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Card() {

    let style = {
        height: "500px",
        width: "500px",
        borderRadius: "20%",
        borderBottom: "2px solid red",
        borderTop: "2px solid green",
        backgroundColor: "black"

    }
    let btn1 = {
        border: "2px solid  green ",


    }
    let btn2 = {
        border: "2px solid  red "
    }
    let div2 = {
        height: "250px",
        width: "490px",
        border: "2px  ",
        borderRadius: "10%",
        rightMargin: "0px",

        color: "white"

    }

    let [todos, setTodos] = useState([{ Task: "Today's task", id: uuidv4() }]);
    let [newtodo, setnewtodo] = useState([""]);
    let AddNewTask = () => {
        setTodos([...todos, { Task: newtodo, id: uuidv4() }]);
        setnewtodo(" ");
    };
    let updateTodo = (event) => {
        setnewtodo(event.target.value);
    }
    let style3 = {
        height: "36px",
        width: "110px",
        alignItem: "center",
        borderRadius: "10%",
        borderBottom: "2px solid red",



    }

    return (
        <div style={style}>
            <h1>To do List</h1>
            <input style={style3} placeholder="New Task" type="text" value={newtodo} onChange={updateTodo} />
            <button style={btn1} onClick={AddNewTask}>Add Task</button>

            <div style={div2}>

                <h3>
                    <ul>
                        {todos.map((todo) => {
                            return <li key={todo.id}> {todo.Task} </li>
                        })}
                    </ul>

                </h3>
            </div>


        </div >
    )
}