import logo from './logo.svg';
import './App.css';

const myElement = <h1>React is {5 +5} times better with JSX!</h1>;
const myElement2 = (
  <>
    <p>First paragraph</p>
    <p>Seconth paragraph</p>
  </>
);

function App() {

  let miotitolo = "Prima app react";

  return (
    <div className="App">
      <h1>{miotitolo}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myElement}
          {myElement2}
        </p>
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

export default App;
