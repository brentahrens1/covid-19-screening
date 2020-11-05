import './App.css';

import { Switch, Route } from 'react-router-dom'

// components

import Home from './components/Home/Home'
import ThankYouScreen from './components/ThankYouScreen/ThankYouScreen'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/thank-you" exact component={ThankYouScreen} />
      </Switch>
    </div>
  );
}

export default App;
