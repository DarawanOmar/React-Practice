import { useReducer, createContext } from "react";

export const DataContext = createContext({})

const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD':
            return{
                ...state, // todos:[{id:1 , todo:'WastDish' , complete:false}]
                todos:[...state.todos,action.payload] //action.paylod : {id:2 , todo:'Do Home Work' , complete:false}
            }                                       //state.todo : id:1 , text:'WastDish' , complete:false
        case 'TOGGLE':                       // [{id:1 , text:'WastDish' , complete:false} ,{id:2 , text:'Do Home Work' , complete:false} ]
            return{
                ...state,   //{ todos:[{},{},{}] }
                todos : state.todos.map(todo => todo.id === action.payload ? {...todo,complete:!todo.complete} : todo)
            }
        case 'COMPLETE':
            return{
                ...state, //{ todos:[{},{},{}] }
                todos : state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return {state}
    }
}

const DataProvider = ({children}) => {

    const initState = { todos:[{id:1 , todo:'WastDish' , complete:false}]} // {id:1 , todo:'WastDish' , complete:false}

    const[state,dispatch] = useReducer(reducer,initState)

    const add = (todo) => {
        dispatch({ type:"ADD", payload : todo})
    }
    const toggle = (todoID) => {
        dispatch({ type:"TOGGLE", payload : todoID})
    }
    const complete = (todoID) => {
        dispatch({ type:"COMPLETE", payload : todoID})
    }
  return (
    <DataContext.Provider value={{todos:state.todos , add , toggle , complete  }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider 