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
    let markdone = (id) => {
        setTodos((prevTask) =>
            prevTask.map((todo) => {
                if (todo.id == id) {
                    // Add strikethrough class to mark as done
                    return {
                        ...todo,
                        isdone: true,  // Add a flag to track completion
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let [todos, setTodos] = useState([{ Task: "Today's task", id: uuidv4(), isdone: false }]);
    let [newtodo, setnewtodo] = useState([""]);
    let AddNewTask = () => {
        setTodos([...todos, { Task: newtodo, id: uuidv4(), isdone: false }]);
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
    let deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));

    };


    return (
        <div style={style}>
            <h1>To do List</h1>
            <input style={style3} class="btn" placeholder="Add task" type="text" value={newtodo} onChange={updateTodo} />
            <button style={btn1} class="btn" onClick={AddNewTask}>Add Task</button>

            <div style={div2}>

                <h3>
                    <ul>
                        {todos.map((todo) => {
                            return <li key={todo.id}>
                                <span style={todo.isdone ? { textDecorationLine: "line-through" } : {}}>{todo.Task} </span>
                                &nbsp;  &nbsp;   &nbsp;   &nbsp;

                                <button class="btn" onClick={() => deleteTask(todo.id)} type="">Delete</button>
                                &nbsp;  &nbsp;   &nbsp;   &nbsp;
                                <button onClick={() => markdone(todo.id)}>Mark as Done</button>
                            </li>

                        })}
                    </ul>

                </h3>
            </div>


        </div >
    )
}