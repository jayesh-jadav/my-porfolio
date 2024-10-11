import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const { newTheme } = useSelector((state) => state.auth);

  return (
    <div
      className="main"
      style={{ backgroundColor: newTheme.colors.background }}
    >
      <Header />
    </div>
  );
}

export default App;
