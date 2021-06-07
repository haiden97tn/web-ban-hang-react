import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';


function TodoAdd(props) {

    let history = useHistory();
    const [todo, setTodo] = useState("Gia tri mac dinh trong");

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(todo);
        history.push('/');
    } 
    const onHandleChange = (e) => {
        setTodo({
            id: uuidv4(),
            name: e.target.value
        });
    }

    return (
        <div>
            <h2>Add todo</h2>
            <form action="" onSubmit={onHandleSubmit} id="form" >
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={onHandleChange}
                />
                <button type="submit" className="btn btn-primary"  >Add</button>
            </form>
        </div>
    )
}

export default TodoAdd
