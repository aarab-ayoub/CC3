import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ListTodo() {
    const { id } = useParams()
    const todoListe = useSelector(state => state.todoList.data)
    const Todo = todoListe.todos.filter(todo => todo.id == id)

    return (
        <div >
            <h1>List des tache</h1>

            <table border={1} >
                <thead>
                    <tr>
                        <td>id</td>
                        <td>todo</td>
                        <td>completed</td>
                        <td>userId</td>
                    </tr>
                </thead>

                <tbody>
                        {Todo.map(todo => <tr key={todo.id}>
                            <td>
                                {todo.todo}
                            </td>
                            
                        </tr>)}
                    </tbody>
            </table>
        </div>
    );
}


export default ListTodo;
