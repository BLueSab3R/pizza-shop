import Header from './components/Header';
import './App.scss';
import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Error from './pages/Error';
import Cart from './pages/Cart';



export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
 

  return (

    <div className="App">
      <div className="wrapper">
        <div className="bgClickCatcher"></div>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <div className="container">
            <Header
            />
            <div className="content">
              <Routes>
                <Route path='/' element={<Home
                  searchValue={searchValue}
                />} />
                <Route path='*' element={<Error />} />
                <Route path='cart' element={<Cart />} />
              </Routes>
            </div>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );

}
export default App;



