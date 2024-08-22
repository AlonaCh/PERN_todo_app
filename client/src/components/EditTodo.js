
import React, { useState } from 'react';


const EditTodo = ({ todo }) => {
   const [showModal, setShowModal] = useState(false);
const [description, setDescription] = useState(todo.description)

//edit description
   const updateDescription = async (e) => {
       e.preventDefault()
       try {
           const body = { description }
           const response = await fetch(`http://localhost:5001/todos/${todo.todo_id}`, {
               method: "PUT",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(body)
           })
           console.log("resp", response)
       } catch (err) {
           console.error(err.message)
       }
   }


   return (
       <>
           {/* Button to open the modal */}
           <button
               type="button"
               className="btn btn-warning"
               data-target={`#id${todo.todo_id}`}
               onClick={() => setShowModal(true)}
           >
               Edit
           </button>


           {showModal && (
               <div className="modal show d-block" tabIndex="-1" role="dialog" id={`id${todo.todo_id}`}>
                   <div className="modal-dialog" role="document">
                       <div className="modal-content">
                           <div className="modal-header">
                               <h5 className="modal-title">Edit Todo</h5>
                               <button
                                   type="button"
                                   className="close"
                                   onClick={() => setShowModal(false)}
                               >
                                   <span>&times;</span>
                               </button>
                           </div>
                           <div className="modal-body">
                               <input
                                   type="text"
                                   className="form-control"
                               value={description}
                               onChange={e => setDescription(e.target.value)}
                               />
                           </div>
                           <div className="modal-footer">
                               <button
                                   type="button"
                                   className="btn btn-warning"
                                   onClick={e => updateDescription(e)}
                               >
                                   Edit
                               </button>
                               <button
                                   type="button"
                                   className="btn btn-danger"
                                   onClick={() => setShowModal(false)}
                               >
                                   Close
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
           )}
       </>
   );
};


export default EditTodo;