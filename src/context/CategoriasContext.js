import React, { Component } from 'react';

//Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
   
   token = '64EVETHEP6IDOFUB7D';
    state = {  }

    componentDidMount(){
        this.obtnerCategorias();
    }
    obtnerCategorias = ()=> {
        let url = ``
    }
    render() { 
        return (  );
    }
}
 
export default CategoriasProvider;