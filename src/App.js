import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import { colors } from "./Config/theme";

function App() {
  const { newTheme } = useSelector((state) => state.auth);

  return (
    <div className="main" style={{ backgroundColor: colors.background }}>
      <Header />
    </div>
  );
}

export default App;
