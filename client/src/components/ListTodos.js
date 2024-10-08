import { useEffect, useState } from "react"


const ListTodos = () => {
   const [todos, setTodos] = useState([])


   //fetch does a get request by default


   const getTodos = async () => {
       try {
           const response = await fetch("http://localhost:5001/todos")
           const jsonData = await response.json()
           setTodos(jsonData)
       } catch (err) {
           console.error(err.message)
       }
   }


   useEffect(() => {
       getTodos();
   }, []);



// deleteTodo


   const deleteTodo = async (id) => {
       try {
           const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
               method: "DELETE"
           })


           setTodos(todos.filter(todo => todo.todo_id !== id))


       } catch (err) {
           console.error(err.message)
       }
   }


   return (
       <div>
           <h1>List Todos</h1>


           <table className="table mt-5 text-center">
               <thead>
                   <tr>
                       <th>Description</th>
                       <th>Edit</th>
                       <th>Delete</th>


                   </tr>
               </thead>
               <tbody>


                   {todos.map(todo => (
                       <tr key={todo.todo_id}>


                           <td>{todo.description}</td>
                           <td>Edit</td>
                           <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                       </tr>)
                   )}
               </tbody>
           </table>
       </div>
   )
}


export default ListTodos


