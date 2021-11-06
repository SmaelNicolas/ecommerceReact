import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer titulo="Mostrando Mensaje Por Pantalla Mediante props" />
      </header>
    </div>
  );
}

export default App;
