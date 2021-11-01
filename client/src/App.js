import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Join from './components/Join';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
