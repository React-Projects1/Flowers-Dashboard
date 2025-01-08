import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home'
import Items from './pages/items/Items'
import AddItem from './pages/addItem/AddItem'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={<Home />} />

            <Route path='items'>
              <Route index element={<Items />} />
              <Route path='addItem' element={<AddItem />} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
