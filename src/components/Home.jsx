import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListCountries from './ListCountries'

const Home = () => {

    const [countries, setCountries] = useState([])
    const [countryName, setCountryName] = useState("")
    const [region, setRegion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCountryName = e.target.countryName.value
        setCountryName(newCountryName)
    }

    const handleChangeRegion = (e) => {
        setRegion(e.target.value);
    }

    const handleChangeCountryName = (e) => {
        setCountryName(e.target.value);
    }

    const countryByName = countries.filter((country) => country.name.common.toLowerCase().includes(countryName.toLowerCase()))

    const countryByRegion = countryByName.filter((country) => country.region.includes(region))

    useEffect(() => {
        const URL = "https://restcountries.com/v3.1/all"

        axios.get(URL)
        .then(({data}) => setCountries(data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <main className='p-4 py-6'>
        <form onSubmit={handleSubmit} action="" className='grid gap-8 sm:flex sm:justify-between'>
            <div className='lighTheme p-4 rounded-md flex items-center gap-2 darkTheme sm:w-[360px]'>
            <i className='bx bx-search-alt-2 text-dark-gray text-lg'></i>
            <input id='countryName' className='outline-none flex-1 bg-white/0 darkTheme transition-colors' placeholder='Seach for a country' type="text" onChange={handleChangeCountryName} value={countryName}/>
            </div>

            <select onChange={handleChangeRegion} name="" id="" className='outline-none lighTheme p-4 rounded-md max-w-[120px] font-nunito-sans darkTheme'>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>

        <ListCountries countries={countryByRegion}/>
    </main>
  )
}

export default Home