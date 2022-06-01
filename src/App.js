import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import FeedDetail from './routes/FeedDetail';
import Profile from './routes/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/feed/:id">
          <FeedDetail />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
