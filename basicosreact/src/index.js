import React from 'react';
import ReactDOM from 'react-dom';
import Aplicacion from './componentes/Aplicacion';
import './css/App.css';
import './css/index.css';
// import logo from './logo.svg';
// import { App, AppEjemplo } from './App';
import * as serviceWorker from './serviceWorker';

// ***** React SIN JSX ***** //
// const titulo = React.createElement(
//     'div',
//     {className: 'App'},
//     React.createElement(
//         'h1',
//         {id: 'titulo', className: 'App-header'},
//         'Hola Mundo sin JSX',
//         React.createElement(
//             'img',
//             {src: logo, className:'App-logo',  alt:'logo'}
//         )
//     ),
    
// )

// ***** React CON JSX y Function Declaration ***** //
// function TituloFunctionDeclaration() {
//     return(
//         <div className="App">
//             <header className="App-header">
//                 <h1 id="titulo" className="encabezado">Hola Mundo con JSX y Function Declaration XD</h1>
//                 <img src={logo} className="App-logo" alt="logo" />
//             </header>
//         </div>
//     );
// }

// ***** React CON JSX y Arrow Funtions (Functional Component) ***** //
// const TituloArrowFunction = () => {
//     return(
//         <div className="App">
//             <header className="App-header">
//                 <h1 id="titulo" className="encabezado">Hola Mundo con JSX y Arrow Functions XD</h1>
//                 <img src={logo} className="App-logo" alt="logo" />
//             </header>
//         </div>
//     );
// }

// ***** React CON JSX y Clases ***** //
// class TituloClase extends Component {
//     render() {
//         const empleado = {
//             nombre: 'Emmanuel',
//             trabajo: 'Desarrollador Web'
//         }
//         return(
//             <div className="App">
//                 <header className="App-header">
//                     <h1 id="titulo" className="encabezado">Hola Mundo con JSX y Clases XD</h1>
//                     <h2>Detalles de:</h2>
//                     <ul>
//                         <li>{empleado.nombre}</li>
//                         <li>{empleado.trabajo}</li>
//                     </ul>
//                     <img src={logo} className="App-logo" alt="logo" />
//                 </header>
//             </div>
//         );
//     }
// }

// ***** React SIN JSX y Clases ***** //
// class TituloClaseComponent extends Component {
//     render() {
//         return(
//             React.createElement(
//                 'h1',
//                 {id: 'titulo', className: 'App-header'},
//                 'Hola Mundo sin JSX y Clases XD',
//             )
//         );
//     }
// }


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(titulo, document.getElementById('root')); /* SIN JSX */
// ReactDOM.render(<TituloFunctionDeclaration />, document.getElementById('root')); /* CON JSX y Function Declaration */
// ReactDOM.render(<TituloArrowFunction />, document.getElementById('root')); /* CON JSX y Arrow Function */
// ReactDOM.render(<TituloClase />, document.getElementById('root')); /* CON JSX y Clases */
// ReactDOM.render(<TituloClaseComponent />, document.getElementById('root')); /* SIN JSX y Clases */
// ReactDOM.render(<AppEjemplo />, document.getElementById('root')); /* COMPONENTE */
ReactDOM.render(<Aplicacion />, document.getElementById('root')); /* COMPONENTE2 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
