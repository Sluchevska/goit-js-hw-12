import './sass/main.scss';
import Notiflix from "notiflix";

// import fetchCountries from './fetchCountries';
// import renderCountriesCard from './renderCountries';

const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');
import countryCard from './countryCard.hbs'
import countryNameFlag from './countryNameFlag.hbs'
const inputRef = document.getElementById('search-box');
console.log(inputRef)
const countryHolder = document.querySelector('.country-info')

function renderCountriesCard(country) {
    if (!country) return;
    if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
        return;
    }
    if (country.length > 2 && country.length < 10) {
        const markup = countryNameFlag(country);
        countryHolder.insertAdjacentHTML('afterbegin', markup)
        return;
    
    }
      if (country.length === 1) {
          const markup = countryCard(country);
          countryHolder.insertAdjacentHTML('afterbegin', markup)
            return
    }
    if (country.status === 404) {
                Notiflix.Notify.failure('Oops, there is no country with that name');
            }
}





function fetchCountries(name) {
   
       return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
           .then(response => {
        return response.json();
    }) 
   
}





function onSearch(e) {
    e.preventDefault();
    clearInput()
    const searchCountry = e.target.value
    fetchCountries(searchCountry)
        .then(country => {
            inputRef.innerHTML = '';
            renderCountriesCard(country)
        })
        .catch(error => console.log(error))
  
//     
//   if (searchCountry === '') {
//        inputRef.innerHTML = '';
//         return;  
//     }
//     fetchCountries(searchCountry)
//         .then(renderCountriesCard)
//         .catch(error => console.log(error))
       
        

    
    
}

function clearInput() {
    inputRef.innerHTML = ''
}



inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))