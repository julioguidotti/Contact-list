import React from 'react'
import { Link } from 'react-router-dom';
let ViewSixthContact = () => {
    return(
        <React.Fragment>
           <section className="view-contact-intro p-3">
               <div className="container">
                   <div className="row">
                       <div className="col">
                           <p className="h3 text-black fw-bold">View Contact</p>
                           <p>More information about the employee:</p>
                       </div>
                   </div>
               </div>
           </section>
           <section className ="view=contact mt-3">
               <div className="container">
                   <div className="row">
                       <div className="col-md-4">
                       <img src="https://cdn-icons-png.flaticon.com/512/2830/2830514.png" className="contact-img"/>
                       </div>
                       <div className="col-md-8">
                                        <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Mrs. Dennis Schulist</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">1-477-935-8478</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Karley_Dach@jasper.info</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Company Catch Phrase : <span className="fw-bold">Synchronised bottom-line interface</span>
                                            </li>
                                        </ul>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col">
                       <Link to={`/contacts/list`} className="btn btn-warning">Back</Link>
                       </div>
                   </div>
               </div>
           </section>
        </React.Fragment>
    )
}
export default ViewSixthContact