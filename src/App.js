import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Message from './components/Message.js';

const API = 'https://randomuser.me/api?results=30';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    }
  }

  componentDidMount() {
    axios.get(API)
      .then((res) => {
        this.setState({ userData: res.data.results });
      });
  }

  render() {
    const { userData } = this.state;
    return (
      <Router>
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <Link to="/" className="navigation-link">Home</Link>
            </li>
            <li>
              <Link to="/hello" className="navigation-link">Hello</Link>
            </li>
            <li>
              <Link to="/signin" className="navigation-link">Sign in</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              {userData.map(({ name, picture, location, id}) => {
                return (
                  <Message 
                    name={ `${name.first} ${name.first}` }
                    photo={ picture.thumbnail }
                    title={ location.country }
                    text={ location.city }
                    key={ id.value }
                  />
                );
              })}
            </div>
          </Route>
          <Route path="/hello">
            Привет!
          </Route>
          <Route path="/signin">
            Здесь можно зарегистрироваться
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;