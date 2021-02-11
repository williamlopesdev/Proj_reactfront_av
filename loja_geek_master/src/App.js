import Menu from './Components/Menu'
import Rotas from './rotas'
import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import './text.css'
import Footer from './pages/Footer'

import {lazy, Suspense} from 'react';


import Rodape from './code_spliting/Rodape'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
            <Container fluid>
              <Rotas />
            </Container>

        </main>
      </div>
      <div>
      <Suspense fallback={ <p>Carregando...</p>}>
        <Rodape />
      </Suspense>
      </div>
    </BrowserRouter> 
  );
}

export default App;