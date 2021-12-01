import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer>
          <small>Coded by me :)</small>
        </footer>
      </div>
    </div>
  );
}
