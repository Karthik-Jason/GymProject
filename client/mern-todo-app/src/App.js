import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/home-component';
import TraineeList from './Components/todos-list.component';
import AddTrainee from './Components/create-trainee.component';
import EditTrainee from './Components/edit-trainee.component';
import DeleteTrainee from './Components/delete-trainee.component';
import UnpaidTrainees from './Components/unpaid-trainees.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
              <Link to="/" className="navbar-brand" href="#"> MASTER MUSCLE PAC GYM </Link>
                 <div className="collapse navbar-collapse">
                     <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/trainees" className="nav-link">  All-Trainees-List  </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">  Add-Trainee  </Link>
                        </li> 
                        <li className="navbar-item">
                            <Link to="/unpaidtrainees" className="nav-link">  Unpaid-Trainees  </Link>
                        </li> 
                      </ul>
                   </div>
             </nav>
         </div>
         <Route path="/" exact component={Home} />
        <Route path="/trainees" component={TraineeList} />
        <Route path="/edit/:id" component={EditTrainee} />
        <Route path="/create" component={AddTrainee} />
        <Route path="/delete/:id" component={DeleteTrainee} />
        <Route path="/unpaidtrainees" component={UnpaidTrainees} />
      </Router>
    );
  }
}
export default App;