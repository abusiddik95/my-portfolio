import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
        <Intro />
        <About />
        <Project />
    </div>
  );
}

export default App;
