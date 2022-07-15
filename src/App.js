import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
import CardWrapper from "./components/CardWrapper";
import Card from "./components/Card";
import { useState } from "react";
function App() {
  const [projects, setPrjects] = useState([
    {
      id: 1,
      title: "News App",
      icon: "javascript",
      description: "A news application using newsapi.org's api",
      progress: "100%",
      daysLeft: 0,
    },
    {
      id: 2,
      title: "NotesKeeper",
      icon: "React",
      description: "A working react Notes taking app",
      progress: "100%",
      daysLeft: 0,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      icon: "React",
      description: "My Personal ReactFolio",
      progress: "10%",
      daysLeft: 20,
    },
    {
      id: 4,
      title: "Quran Surahs",
      icon: "React",
      description: "A Islamic app using Quran API",
      progress: "100%",
      daysLeft: "0",
    },
    {
      id: 5,
      title: "TaskDot",
      icon: "React",
      description: "A task manager app [front-end] using react",
      progress: "12%",
      daysLeft: "60",
    },
  ]);
  return (
    <div className="App">
      <Sidebar />
      <Content>
        <SearchBar />
        <CardWrapper>
          {projects.map((item) => {
            return (
              <Card
                title={item.title}
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
