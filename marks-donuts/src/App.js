import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './container/navigation/Navigation';

import styled from 'styled-components';
import { Logo } from './components/Logo/index.js';


import './App.css';
import { Home } from './container/home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <header className="App-header">


            <Logo />
            <Navigation />
          </header>
          <Home />
        </Wrapper>

      </div>
    </BrowserRouter>
  );
}

export default App;

let Wrapper = styled.div`
display:flex;
flex-direction: column;
`;