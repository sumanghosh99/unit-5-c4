import './App.css';
import {Main} from "./components/Main";
import { Search } from './components/Search';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      {/* <Main/>
      <Search/> */}
    </div>
  );
}

export default App;
