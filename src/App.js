// Dado el objeto sistema solar, guardalo en un archivo .js independiente. Importalo desde tu App.js y muestra cada uno de los planetas dentro de un <div> y con el nombre como un <h1>, el color y la temperatura en un <p> y la imagen en un <img>.

// Modificalo para que se cree un componente <Planeta /> por cada uno de los elementos del array.

// Añade un botón al componente App para que elimine el último planeta del array.

// Cambia ese botón para que aparezca en cada uno de los componentes <Planeta />. Haz que ese botón elimine del array sistema solar el planeta en el que has hecho click.

import "./App.css";
import sistemaSolar from "./sistemaSolar";
import Planeta from "./Planeta";

function App() {
  const mostrarPlanetas = sistemaSolar.map(function (planeta) {
    return (
      <div key={planeta.nombre}>
        <Planeta
          nombre={planeta.nombre}
          color={planeta.color}
          temperatura={planeta.temperatura}
          imagen={planeta.imagen}
        />
      </div>
    );
  });
  return mostrarPlanetas;
}

export default App;
