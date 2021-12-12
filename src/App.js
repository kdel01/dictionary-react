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
          <DictionarySearch defaultKeyword="sunset" />
        </main>
        <footer>
          <small>
            Coded by Kathryn Delavere | Source Code on{" "}
            <a
              href="https://github.com/kdel01/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            | Hosted on{" "}
            <a
              href="https://vibrant-ritchie-c6bbaa.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
