import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Orden from '../code_spliting/orden'
import {lazy, Suspense} from 'react';




export default function Busca(){

    return(
        <div className="container">
            <hr></hr>
            <div className="row">
                <div className="col-12 col-md-5">
                    <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="digite aqui o que procura" />
                            <button className="btn btn-info">
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-7">
                    <div className="d-flex flex-row-reverse justify-content-center justfy-content-md-start">
                        
                                    <Suspense fallback={ <p>Carregando...</p>}>
                                    <Orden />
                                    </Suspense>

                        <nav className="d-inline-block">
                            <ul className="pagination pagination-sm my-0">
                                <li className="page-item">
                                    <button className="page-link disabled">1</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link">2</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link">3</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link">4</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link">5</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link">6</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> 
              </div>
              <hr></hr>
        </div>    
    )
}