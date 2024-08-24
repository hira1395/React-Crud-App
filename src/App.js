import './App.css';
import Home from './components/Home';
import Create from './components/Create'
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/create" element={<Create />}> </Route>
          <Route path="/edit/:id" element={<Update />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
