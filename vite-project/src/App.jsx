import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateUser from './components/CreateUser';
import ReadUsers from './components/ReadUsers';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

const App = (() => {
  return (
    <Router>
      <div className="App">
        <h1>User Management System</h1>
        <Switch>
          <Route path="/create" component={CreateUser} />
          <Route path="/read" component={ReadUsers} />
          <Route path="/update/:id" component={UpdateUser} />
          <Route path="/delete/:id" component={DeleteUser} />
        </Switch>
      </div>
    </Router>
  );
});

export default App;
