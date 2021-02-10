import React from 'react';
import { ChakraProvider, Container } from "@chakra-ui/react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home'


function App() {
  return
  <ChakraProvider>
    <Container >
      <Router >
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </Container>
  </ChakraProvider>
}

export default App;
