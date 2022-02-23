import Terdekat from './pages/Terdekat';
import Terpopuler from './pages/Terpopuler';
import Bandingkan from './pages/Bandingkan';
import Peta from './pages/Peta';
import Main from './pages/Main';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
