import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'


class CountryDetails extends Component {
    // state={
    //     countryDetail:null
    // }

    findCountryDetails=()=>{
        const cca3 = this.props.match.params.cca3
        const{countries}=this.props

        let countryDetail = countries.filter((oneCountry)=>{
                return oneCountry.cca3 == cca3
        })
        console.log(countryDetail)
        return countryDetail[0] //because the countryDetail Array gives an Object and some other parameters and we just need the countryObject which is at index 0 of this array
    }
    
    render() {
    
        //const{countryDetail}= this.state
        const{countries}=this.props
        console.log(this.props)
        const countryOne = this.findCountryDetails()
        console.log(countryOne)
        return (
            <div>
                <h1>Details page</h1>
                <p>Capital: {countryOne.capital}</p>
                <p>Area: {countryOne.area}</p>
                <p>Borders:{countryOne.borders}</p>
            </div>
        )
    }
}

export default CountryDetails
