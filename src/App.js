import ListOfGifs from "./components/ListOfGifs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ListOfGifs keyword="panda" />
    </div>
  );
}
