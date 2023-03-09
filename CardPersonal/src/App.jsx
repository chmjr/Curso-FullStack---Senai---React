import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      
      <Card
        foto="../src/assets/foto.jpg"
        nome="Carlos Henrique Moreira Junior"
        idade="35"
        github="https://github.com/rico700/Curso-FullStack---Senai/"
        linkedin="https://www.linkedin.com/in/carlos-henrique-moreira-jr-a062aa42/"
      />
    </div>
  );
}

export default App;
