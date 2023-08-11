import React from 'react'

const CountryCard = ({country}) => {
  return (
    <article className='bg-white rounded-md overflow-hidden lighTheme darkTheme'>
        <header className='h-[160px] lighTheme'>
            <img className='h-full w-full object-cover object-center' src={country.flags.svg} alt="" />
        </header>
        <section className='p-2 py-4'>
            <h3 className='font-bold mb-2 text-lg line-clamp-1'>{country.name.common}</h3>
            <ul>
                <li>Population: <span className='font-semibold'>{country.population}</span></li>
                <li>Region: <span className='font-semibold'>{country.region}</span></li>
                <li>Capital: <span className='font-semibold'>{country.capital ?? "N/A"}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default CountryCard