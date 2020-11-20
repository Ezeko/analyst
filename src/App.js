import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'materialize-css'
import SignIn from './components/auth/signIn'
import './App.css';
import VerticalBar from './components/charts/verticalBar';
import PieChart from './components/charts/pie';
import SignUP from './components/auth/Register';
//import NavBar from './components/nav/Navbar';
import DashBoard from './components/dashboard';

import History from './components/dashboard/history';
import CreateBudget from './components/app/budget/createBudget';
import Budgets from './components/app/budget/budgets';
import navBarTest from './components/reuseable/navbarTest';
import BudgetChart from './components/app/budgetCharts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/register' component={SignUP} />
          <Route path='/bar' component={VerticalBar} />
          <Route path='/pie' component={PieChart} />
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/budgets/:budgetName' component={BudgetChart} />
          <Route path='/create' component={CreateBudget} />
          <Route path='/history' component={History} />
          <Route path='/budgets' component={Budgets} />
          <Route path='/test-nav' component={navBarTest} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
