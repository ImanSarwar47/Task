import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Page from './components/First/Page';
import SecPage from './components/SecPage/SecPage';
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';
import engine from '/engine.png';
import Cards from './components/Cards/Cards';
import electrical from '/electrical.png';
import repair from '/repair.png';
import plumbing from '/plumbing.png';
import Button from './components/Button/Button';
import Fifth from './components/Fifth/Fifth';
import Sixth from './components/Sixth/Sixth';
import Seven from './components/Seven/Seven';
import Eight from './components/Eight/Eight';
import Nine from './components/Nine/Nine';
import Ten from './components/Ten/Ten';

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Page />
    <SecPage />
    <Third />
    <div className='fourth-sec'>
    <Fourth />
    <div className='Web-Cards'>
    <Cards image={engine} title="Engine Repairs" content="Lorem ipsum dolor sit amet, consectetur" />
    <Cards image={electrical} title="Electrical" content="Lorem ipsum dolor sit amet, consectetur" />
    <Cards image={plumbing} title="Plumbing" content="Lorem ipsum dolor sit amet, consectetur" />
    <Cards image={repair} title="Repair House" content="Lorem ipsum dolor sit amet, consectetur" />
    </div>
    <Button />
    </div>
    <Fifth />
    <Sixth />
    <Seven />
    <Eight />
    <Nine />
    <Ten />
    </>
  );
}

export default App