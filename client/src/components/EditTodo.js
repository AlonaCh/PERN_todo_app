
import React, { useState } from 'react';


const EditTodo = ({ todo }) => {
   const [showModal, setShowModal] = useState(false);


   return (
       <>
           {/* Button to open the modal */}
           <button
               type="button"
               className="btn btn-warning"
               onClick={() => setShowModal(true)}
           >
               Edit
           </button>


           {showModal && (
               <div className="modal show d-block" tabIndex="-1" role="dialog">
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
                               // value={description}
                               // onChange={e => setDescription(e.target.value)}
                               />
                           </div>
                           <div className="modal-footer">
                               <button
                                   type="button"
                                   className="btn btn-warning"
                                   onClick={() => setShowModal(false)}
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