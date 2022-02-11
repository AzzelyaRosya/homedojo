import Terdekat from './components/Terdekat/Terdekat';
import Terpopuler from './components/Terpopuler/Terpopuler';
import Home from './components/Bandingkan/Home';
import Peta from './components/Peta/Peta';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
