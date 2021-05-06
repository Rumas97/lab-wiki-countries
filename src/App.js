import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Link, Route} from 'react-router-dom'
import data from './countries.json'

class App extends Component {

  state={
    countries:data
  }

  render() {
    const{countries}= this.state
    return (
      <div style={{display: 'flex'}}>
        <div>
          <Navbar />
          <CountriesList countries ={countries}/>

        </div>
        <div>
          <Route path='/country/:cca3' render={(routerProps)=>{
                return <CountryDetails countries={countries}{...routerProps}/>
            }}/> 

          {/* <Route path='/country/:cca3' render={(routerProps)=>{
              const cca3 = this.routerProps.match.params.cca3
              const countryDetail= countries.filter((oneCountry)=>{
                return oneCountry.cca3 == cca3
              })
                return <CountryDetails oneCountry={countries}/>
            }}/>  */}
          
        </div>
      </div>

    )
  }
}

export default App;
