import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/auth/signIn'
import './App.css';
import VerticalBar from './components/charts/verticalBar';
import PieChart from './components/charts/pie';
import SignUP from './components/auth/Register';
import NavBar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/register' component={SignUP} />
          <Route path='/bar' component={VerticalBar} />
          <Route path='/pie' component={PieChart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
