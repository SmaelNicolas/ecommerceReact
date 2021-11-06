import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";

function App() {
  return (
    <header className="header">
      <NavBar />
      <ItemListContainer titulo="Mostrando Mensaje Por Pantalla Mediante props" />
    </header>
  );
}

export default App;
