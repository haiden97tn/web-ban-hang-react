import React from 'react'
import TodoAdd from '../../components/TodoAdd'

const AddTodoPage = ({ onAdd }) => {
    return (
        <div>
            <TodoAdd onAdd={onAdd} ></TodoAdd>
        </div>
    )
}

export default AddTodoPage
