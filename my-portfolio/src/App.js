// import headBackground from './images/keyboard_2.jpg';
import './App.css';
import Intro from "./components/Intro"
import Use from "./components/Use"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav">
            <li><a href="#services" alt="services link">What I do</a></li>
            <li><a href="#tech" alt="technologies link">What I use</a></li>
            <li><a href="#contact" alt="contact link">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container-main">
          <Intro />
          <br/>
          <Use />
          <About />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
