import {Switch, Route} from "react-router-dom";
import Footer from './components/Footer';
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App () {
  return (
  <>
 <Header/> 
 
<Switch>

<Route exact path="/" component={ Home } />

<Route path="/movies/:id" component={Detail} />

<Route component={NotFound}/>
    
     
</Switch>

<Footer/>

  </>
  );
}


export default App;
