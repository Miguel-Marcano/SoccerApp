import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Cover from './Components/OpenPage/cover';
import Header from './Components/Header/header';

function App() {
  return (
    <><Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Cover />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App; 