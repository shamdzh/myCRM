import Aside from "./components/Aside";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Home from "./components/Home";
import { SearchState } from "./context/search/searchState";

function App() {
  return (
    <SearchState>
      <Aside />
      <Header />
      <Filter />
      <Home />
    </SearchState>
  );
}

export default App;
