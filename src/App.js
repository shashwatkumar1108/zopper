import React from 'react';
import Rewards from './components/Rewards/Rewards';
import Plan from './components/Plan/Plan';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Route1 from './components/Route1';
import BuyNow from './components/BuyNow/BuyNow';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Route1} />
        <Route path="/plans/(Basic|Standard|Premium)" exact component={BuyNow} />
      </div>
    </Router>
    
  );
}

export default App;
