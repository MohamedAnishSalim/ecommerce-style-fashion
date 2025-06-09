import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import { Home } from './Component/Home/home';
import { Problem } from './Component/Problem/prolem';
import { Tension } from './Component/Tension/tension';
import { Design } from './Component/Design/design';
import { Beauty } from './Component/Beauty/beauty';
import { About } from './Component/About/about';


function App() {
  return (

    <>

    <Home/>
    <Problem/>
    <Tension/>
    <Design/>
    <Beauty/>
    <About/>
    </>
  )
}

export default App;
