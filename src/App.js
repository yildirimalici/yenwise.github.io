// import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='*' element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
