import logo from "./logo.svg";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import { colors } from "./utils/array";
function App() {
  return (
    <div className="App">
      <h1>Colour Palette</h1>
      <ColorPalette colors={colors} />
    </div>
  );
}

export default App;
