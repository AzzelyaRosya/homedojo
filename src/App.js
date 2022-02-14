import Terdekat from './pages/Terdekat';
import Terpopuler from './pages/Terpopuler';
import Bandingkan from './pages/Bandingkan';
import Peta from './pages/Peta';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Bandingkan />
      </div>
    </Router>
  );
}

export default App;
