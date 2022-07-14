import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content>
        <SearchBar />
      </Content>
    </div>
  );
}

export default App;
