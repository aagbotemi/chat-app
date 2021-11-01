import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
