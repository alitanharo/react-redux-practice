import { createContext, useContext } from "react";
import { useReducerAsync } from "use-reducer-async"




const TodoContext = createContext()
 const TodoDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TODO_SUCCESS": return action.payload
        default: return state
    }


}


const asyncActionHandlers = {
    GET_TODO:({ dispatch }) => async (action) => {

            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await res.json()
            dispatch({ type: "GET_TODO_SUCCESS", payload: data })



        }
}


const TodoProvider = ({ children }) => {

    const [todo, dispatch] = useReducerAsync(reducer, asyncActionHandlers, [])

    return (
        <TodoContext.Provider value={todo}>

            <TodoDispatchContext.Provider value={dispatch}>
                {children}

            </TodoDispatchContext.Provider>

        </TodoContext.Provider>
    )
}


export default TodoProvider;
export const useTodo = () => useContext(TodoContext)
export const useDispatchTodo = () => useContext(TodoDispatchContext)