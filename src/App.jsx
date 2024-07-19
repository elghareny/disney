/** @format */
import "./App.css";
import GenreMovieList from "./components/GenreMovieList/GenreMovieList.jsx";
import Header from "./components/Header/Header.jsx";
import ProductionHouse from "./components/ProductionHouse/ProductionHouse.jsx";
import Slider from "./components/Slider/Slider.jsx";

function App() {
	return (
		<>
			<Header />
			<Slider />
			<ProductionHouse />
			<GenreMovieList />
		</>
	);
}

export default App;
