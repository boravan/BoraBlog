import React from "react";
import { Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Team1 = () => (
  <div>
    <h2> Team 1 Page </h2>
  </div>
);

const Team2 = () => (
  <div>
    <h2> Team 2 Page </h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team_1">Team 1</Link>
          </li>
          <li>
            <Link to="/team_2">Team 2</Link>
          </li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/team_1" component={Team1} />
        <Route path="/team_2" component={Team2} />
      </div>
    );
  }
}

export default App;
