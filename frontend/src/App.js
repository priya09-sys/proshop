import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import Cartscreen from './screens/Cartscreen';
import LoginScreen from './screens/LoginScreen';
import Registerscreen from './screens/Registerscreen';
import Shippingscreen from './screens/Shippingscreen';
import Paymentscreen from './screens/Paymentscreen';
import PlaceOrderscreen from './screens/PlaceOrderscreen';



const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={Productscreen} />
          <Route path='/cart/:id?' component={Cartscreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={Registerscreen} />
          <Route path='/shipping' component={Shippingscreen} />
          <Route path='/payment' component={Paymentscreen} />
          <Route path='/placeorder' component={PlaceOrderscreen} />



        </Container>
      </main>

      <Footer />



    </Router >
  )
}

export default App;
