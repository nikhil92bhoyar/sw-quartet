import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Game from "./game/Game";
import Admin from "./admin/components/Admin";
import {Provider} from "react-redux";
import {configureStore} from "./store/store";

const store = configureStore();

export default function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <Switch>
                      <Route
                          path="/admin"
                          render={() => {
                              return <Admin />;
                          }}
                      />
                      <Route
                          path="/"
                          render={() => {
                              return <Game title="Starwars Quartet" />;
                          }}
                      />
                  </Switch>
              </Router>
          </div>
      </Provider>
  );
}
