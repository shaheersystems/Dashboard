import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
import CardWrapper from "./components/CardWrapper";
import Card from "./components/Card";
import projects from "./components/Projects";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const searchHandler = (event) => {
    var lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  };
  const filteredProjects = projects.filter((item) => {
    if (input === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(input);
    }
  });
  return (
    <div className="App">
      <Sidebar />
      <Content>
        <SearchBar searchHandler={searchHandler} />
        <CardWrapper>
          {filteredProjects.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                link={item.link}
                description={item.description}
                progress={item.progress}
                daysLeft={item.daysLeft}
              />
            );
          })}
        </CardWrapper>
      </Content>
    </div>
  );
}

export default App;
