//Punto 2 del ejercicio. Creo un componente planeta para cada uno de los planetas.

// function Planeta(props) {
//   return (
//     <>
//       <h1>{props.nombre}</h1>
//       <p>Color: {props.color}</p>
//       <p>Temperatura: {props.temperatura}</p>
//       <img src={props.imagen} alt="" width="300px" />
//       <br></br>
//       <hr></hr>
//     </>
//   );
// }

// export default Planeta;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FUNCIÓN BORRAR

// //Ahora voy a añadir un botón "BORRAR" a cada planeta.
// //PASO 1.
// //Para ello tengo que usar las variables de estado y crear una función que activaré desde el onclick del botón:
// import { useState } from "react";

// function Planeta(props) {
//   //Como quiero eliminar el planeta completo tengo que pasarle a la variable de estado "eliminar" el parámetro "props" y dentro de la función borrarPlaneta sustituirlo por un string vacío en este caso
//   const [eliminar, setEliminar] = useState(props);

//   //Creo la función de flecha borrarPlaneta
//   const borrarPlaneta = () => {
//     setEliminar("");
//   };

//   return (
//     <>
//       <h1>{props.nombre}</h1>
//       <p>Color: {props.color}</p>
//       <p>Temperatura: {props.temperatura}</p>
//       <img src={props.imagen} alt="" width="300px" />
//       <button onClick={borrarPlaneta}>BORRAR</button>
//       <br></br>
//       <hr></hr>
//     </>
//   );
// }

// export default Planeta;

//PASO 2.
//Ahora tengo que sustituir los      "props"     por     "eliminar"     ----------------
//Ahora voy a añadir un botón "BORRAR" a cada planeta.
//PASO 1.
//Para ello tengo que usar las variables de estado y crear una función que activaré desde el onclick del botón:

// import { useState } from "react";

// function Planeta(props) {
//   const [eliminar, setEliminar] = useState(props);
//   const borrarPlaneta = () => {
//     setEliminar("");
//   };

//   return (
//     <>
//       <h1>{eliminar.nombre}</h1>
//       <p>Color: {eliminar.color}</p>
//       <p>Temperatura: {eliminar.temperatura}</p>
//       <img src={eliminar.imagen} alt="" width="300px" />
//       <br></br>
//       <button onClick={borrarPlaneta}>BORRAR</button>
//       <hr></hr>
//     </>
//   );
// }

// export default Planeta;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Del mismo modo podría añadir la FUNCIÓN MOSTRAR en cada planeta añadiendo un botón de MOSTRAR

import { useState } from "react";

function Planeta(props) {
  const [eliminar, setEliminar] = useState(props);
  const borrarPlaneta = () => {
    setEliminar("");
  };
  const mostrarPlaneta = () => {
    setEliminar(props);
  };

  return (
    <>
      <h1>{eliminar.nombre}</h1>
      <p>Color: {eliminar.color}</p>
      <p>Temperatura: {eliminar.temperatura}</p>
      <img src={eliminar.imagen} alt="" width="300px" />
      <br></br>
      <button onClick={borrarPlaneta}>BORRAR</button>
      <button onClick={mostrarPlaneta}>MOSTRAR</button>
      <hr></hr>
    </>
  );
}

export default Planeta;
