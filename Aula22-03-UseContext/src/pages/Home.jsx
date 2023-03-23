import { Link } from "react-router-dom";
import Sobre from "./Sobre";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={Sobre}><button>SOBRE</button></Link> 
    </div>
  );
}

export default Home;
