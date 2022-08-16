import Navbar from './components/Navbar';
import GetTicket from './components/GetTicket';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom' ;

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          {/* <Route exact path="/"></Route> */}
          <Route path="/get">
             <GetTicket/>    
          </Route>
        </Switch>
           
      </div>
    </div>
    </Router>
    
  );
}

export default App;
