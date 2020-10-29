import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/auth/signIn'
import './App.css';
import VerticalBar from './components/charts/verticalBar';
import PieChart from './components/charts/pie';
import SignUP from './components/auth/Register';
import NavBar from './components/nav/Navbar';
import DashBoard from './components/dashboard';
import LineChart from './components/charts/line';
import History from './components/dashboard/history';
import CreateBudget from './components/app/createBudget';
import Budgets from './components/app/budgets';

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
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/budgets/:budgetName' component={LineChart} />
          <Route path='/create' component={CreateBudget} />
          <Route path='/history' component={History} />
          <Route path='/budgets' component={Budgets} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
