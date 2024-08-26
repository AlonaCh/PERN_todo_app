import React, { useEffect, useRef, useState } from 'react';


const EditTodo = ({ todo }) => {
   const [showModal, setShowModal] = useState(false);
   const [description, setDescription] = useState(todo.description)
   const modalRef = useRef(null) // reference to the modal content




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
           window.location = "/"
       } catch (err) {
           console.error(err.message)
       }
   }


   // Function to close the modal when clicking outside of it
   const handleClickOutside = (e) => {
       if (modalRef.current && !modalRef.current.contains(e.target)) {
           setShowModal(false);
       }
   };


   // Set up event listener when modal is open
   useEffect(() => {
       if (showModal) {
           document.addEventListener("mousedown", handleClickOutside);
       } else {
           document.removeEventListener("mousedown", handleClickOutside);
       }
       return () => {
           document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
       };
   }, [showModal]);


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


           {/* id = id10(whatever number we specified) */}
           {showModal && (
               <div className="modal show d-block" tabIndex="-1" role="dialog" id={`id${todo.todo_id}`}


               >
                   <div className="modal-dialog" role="document">
                       <div className="modal-content" ref={modalRef}>
                           <div className="modal-header">
                               <h5 className="modal-title">Edit Todo</h5>
                               <button
                                   type="button"
                                   className="close"
                                   onClick={() => {
                                       setDescription(todo.description);
                                       setShowModal(false);
                                   }}
                               >
                                   <span>&times;</span>
                               </button>
                           </div>
                           {/* Modal body */}
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
                                   onClick={() => {
                                       setShowModal(false);
                                       setDescription(todo.description)
                                   }}


                               >
                                   Close
                               </button>
                           </div>
                       </div>
                   </div>
               </div >
           )}
       </>
   );
};


export default EditTodo;
