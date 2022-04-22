import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

let ContactList = () => {

    return(
        <React.Fragment>
            <section className="contact-search p-2">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="coloumn"> 
                                <p className="h3">Contact List</p>
                                <p>A simple contact directory that allows a user to view the list of contacts and check an individuals personal details</p>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-6"> 
                            
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

        <section className = "contact-list my-2 mb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://i.pinimg.com/originals/e5/85/7e/e5857ef6157b5613393b20b0c52e3b49.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Leanna Graham</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">1-770-736-8031</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Sincere@april.biz</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={"/contacts/view/:1"} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Ervin Howell</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">010-692-6593</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Shanna@melissa.tv</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view2'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="container my-2 mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1108/1108353.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
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
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view3'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1876/1876904.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Patricia Lebsack</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">493-170-9623</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Julianne.OConner@kory.org</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view4'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="container my-2 mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/554/554806.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Chelsey Dietrich</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">(254)954-1289</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Lucio_Hettinger@annie.ca</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view5'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2830/2830514.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
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
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view6'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="container my-2 mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2830/2830524.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Kurtis Weissnat</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">210.067.6132</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Telly.Hoeger@billy.biz</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view7'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/912/912265.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
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
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view8'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="container my-2 mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/128/1192/1192061.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Glenna Reicher</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">(775)976-6794</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Chaim_McDermott@dana.io"</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view9'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1320/1320736.png" className="contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                             Name : <span className="fw-bold">Clementina DuBuque</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Mobile : <span className="fw-bold">024-648-3804</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                             Email : <span className="fw-bold">Rey.Padberg@karina.biz</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                       <Link to={'/contacts/view10'} className="btn btn-warning">
                                            <i className="fa fa-eye"/>
                                       </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </section>

        </React.Fragment>
    )
}
export default ContactList