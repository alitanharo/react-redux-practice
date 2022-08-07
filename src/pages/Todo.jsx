
import { useEffect } from 'react';
import {  useDispatchTodo, useTodo } from '../context/TodoProvider';


const Todo = () => {
    const todo= useTodo()
    const dispatch= useDispatchTodo()


    useEffect(() => {
        dispatch({type:"GET_TODO"})
      
    }, [])

    return (
        <div>
            {todo?.map(item =>
                <p key={item.id}>{item.title}</p>
            )}
        </div>
    );
}

export default Todo;