import React from 'react'
import { Link } from 'react-router-dom';

let ViewThirdContact = () => {
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
                       <img src="https://cdn-icons-png.flaticon.com/512/1108/1108353.png" className="contact-img"/>
                       </div>
                       <div className="col-md-8">
                                        <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Clementine Bauch</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">1-463-123-4447</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Nathan@yesenia.net</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Company Catch Phrase : <span className="fw-bold">Face to face bifurcated interface</span>
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
export default ViewThirdContact