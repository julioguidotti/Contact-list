import React from 'react'
import { Link } from 'react-router-dom';
let ViewEiethContact = () => {
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
                       <img src="https://cdn-icons-png.flaticon.com/512/912/912265.png" className="contact-img"/>
                       </div>
                       <div className="col-md-8">
                                        <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Nicholas Runolfsdottir V</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">586.493.6943</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Sherwood@rosamond.me</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Company Catch Phrase : <span className="fw-bold">Implemented secondary concept</span>
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
export default ViewEiethContact