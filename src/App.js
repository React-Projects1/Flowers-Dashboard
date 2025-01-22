import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home'
import Items from './pages/items/Items'
import AddItem from './pages/addItem/AddItem'
import Test from './pages/test/Test'
import Reports from './pages/reports/Reports';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Users from './pages/users/Users';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);


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

            <Route path='test' element={<Test />} />
            <Route path='reports' element={<Reports />} />
            <Route path='users' element={<Users />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




