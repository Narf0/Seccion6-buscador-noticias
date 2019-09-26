import React, { Component, Fragment } from 'react';
import Header from './components/header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4a9cf34cd1ef4976b73f5756156bf99d`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias);

    this.setState({
      noticias : noticias.articles
    });

  }

  render() {
    return (
        <Fragment>
          <Header
            titulo='Noticas react API' />

          <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />

            <ListaNoticias
              noticias = {this.state.noticias}
            />
            
          </div>
        </Fragment>
      );
  }
}

export default App;
