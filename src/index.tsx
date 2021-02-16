import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/LandingPage';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  
      <ChakraProvider>
     <LandingPage />
      </ChakraProvider>,
  document.getElementById('root')
);

