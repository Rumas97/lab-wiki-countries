import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import App from '../App'
import CountryDetails from './CountryDetails'


class CountriesList extends Component {

    // Comes as props from App.js
     /*this.props = {
         countries:Array
     }*/

    render() {
        const{countries}= this.props
        return (
            <div>
                <div>
                    <h1>Countries List</h1>
                    {
                        countries.map((singleCountry,i)=>{
                            return <div key ={i}>
                                <Link to={`/country/${singleCountry.cca3}`}>{singleCountry.name.official}</Link>

                                </div>
                        })
                    }
                    
                </div>
           
           </div>
        )
    }
}

export default CountriesList
