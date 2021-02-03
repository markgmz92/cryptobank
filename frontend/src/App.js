import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} />
    </Router>
  );
}

export default App;
