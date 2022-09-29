import {Routes, Route ,BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/Home/index';


function App() {
 return (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
    </Routes>
  </Router>
 )
}

export default App;