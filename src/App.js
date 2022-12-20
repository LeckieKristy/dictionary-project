import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          Coded by Kristy Leckie and hosted on{" "}
          <a
            href="https://github.com/LeckieKristy/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
