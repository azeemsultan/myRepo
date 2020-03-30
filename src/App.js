import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/portfolio';
import About from './components/about';
import Header from './components/header';
import Team from './components/team';
import Form from './components/form';
import Footer from './components/footer';
import Services from './components/services';

function App() {
  const portfolioLinks=[
   {
     title: 'Threads',
     caption: 'Illustration'
   },
   {
    title: 'Dota',
    caption: 'Steam'
  },
  {
    title: 'Pubg Mobile',
    caption: 'Aas 8 pencil'
  }
  ]

  const servicesLinks=[
    {
      title: 'Threads',
      caption: 'Illustration',
      image: './assets/img/azeem.jpg'
    },
    {
     title: 'Dota',
     caption: 'Steam',
     image: '../assets/img/azeem.jpg'
   },
   {
     title: 'Pubg Mobile',
     caption: 'Aas 8 pencil',
     image: "../ "
   }
  ]
  return (
    <div className="App">
    <Header/>  
    <Services servicesLinks={servicesLinks}/>
    <Portfolio portfolioLinks={portfolioLinks}/>
    <About/>
    <Team/>
    <Form/>
    <Footer/>
  </div>
  );
}

export default App;
