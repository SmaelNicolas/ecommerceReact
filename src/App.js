import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";

function App() {
	return (
		<div className="App">
			<header className="header">
				<NavBar />
			</header>
			<div className="loader"></div>
			<ItemListContainer />
		</div>
	);
}

export default App;
