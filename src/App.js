import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext'

function App() {
  return (
   <CategoriasProvider>
     <Header></Header>
     <div className="uk-container">
       <Formulario></Formulario>
     </div>
   </CategoriasProvider>
  );
}

export default App;
