import { useState } from "react";
import FormUser from "./components/FormUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FormUser />
    </div>
  );
}

export default App;
