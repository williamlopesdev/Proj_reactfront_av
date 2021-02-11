import React from 'react';

import {lazy, Suspense} from 'react';


import { Container } from 'react-bootstrap';
import Unidades from '../code_spliting/Unidades'



function Lojas(){

    return(

        <main style={{height: '600px'}}>
            <h3 style={{paddingLeft: '575px'}}>Nossas Lojas</h3>
        <div className="container" style={{paddingTop: '70px'}}>
            
            <Suspense fallback={ <p>Carregando...</p>}>
                <Unidades />
            </Suspense>

        </div>

    </main>
    )
}

export default Lojas;