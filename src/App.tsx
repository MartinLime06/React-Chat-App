import "./App.css";
import NavBar from "./Components/NavBar";
import Cookies from "js-cookie";
import Home from "./Components/Home";

function App() {
  const loggedIn = Cookies.get("loggedIn") === 'true';
  
  return (
    <div className="App">
      {loggedIn ? <NavBar /> : <Home />}
    </div>
  );
}
export default App;
