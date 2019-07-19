import React, { Component } from 'react';
import axios from 'axios';

//Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
   
   token = 'WRU5O3GFAAAW4G2LU4VI';
    state = { 
        categorias : []
     }

    componentDidMount(){
        this.obtnerCategorias();
    }
    obtnerCategorias = async ()=> {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        let categorias = await axios.get(url);
        //console.log(categorias.data.categories);
        this.setState({
            categorias : categorias.data.categories
        })
    }
    render() { 
        return ( 
            <CategoriasContext.Provider
                value ={{
                    categorias :  this.state.gateorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;