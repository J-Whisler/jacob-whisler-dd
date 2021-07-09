import './App.css';
import GlobalStyle from './GlobalStyles';
import Hero from "./components/Hero/Hero"
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
