import logo from "./logo.svg";
import "./App.css";
import ExternalComp from "./ExternalFile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hello arwa</h1>
        <FirstComponent />
        <ExternalComp />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function FirstComponent() {
  return (
    <h3>لإنشاء عنصر نحتاج ميثود داخلها ريترن وداخل الريترن اكواد اتش ام ال</h3>
  );
}

export default App;
