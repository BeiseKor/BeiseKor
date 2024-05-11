import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Prihlaseni from './components/Prihlaseni/Prihlaseni';
import Registrace from './components/Registrace/Registrace'; 
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Přihlásit se</Link>  
            </li>
            <li>
              <Link to="/register">Registrovat</Link>  
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>  
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Prihlaseni />} />
          <Route path="/register" element={<Registrace />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/vitejte" element={<h1>Vítejte v aplikaci CJJ!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/*function DashboardLayout() {
  return (
    <Dashboard>
      <Switch>
        <Route path="/dashboard/new-project" component={NewProject} />
        <Route path="/dashboard/all-projects" component={AllProjects} />
        <Route path="/dashboard/add-snippet" component={AddSnippet} />
        <Route path="/dashboard/my-snippets" component={MySnippets} />
        <Route path="/dashboard/code-comments" component={CodeComments} />
        <Route path="/dashboard/search" component={Search} />
        <Route path="/dashboard/tags" component={Tags} />
        <Route exact path="/dashboard">
          <h1>Welcome to Your Dashboard</h1>
        </Route>
      </Switch>
    </Dashboard>
  );
}
         <Route path="/dashboard" component={DashboardLayout} />
*/
