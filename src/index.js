import './sass/main.scss';
import Notiflix from "notiflix";

import fetchCountries from './fetchCountries';


import countryCard from './countryCard.hbs'
import countryNameFlag from './countryNameFlag.hbs'
const inputRef = document.getElementById('search-box');
const countryHolder = document.querySelector('.country-info')

const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');

 function renderCountriesCard(country) {
    if (!country) return;
    if (country.length === 1) {
          const markup = name[0];
          countryHolder.insertAdjacentHTML('afterbegin', countryCard(markup));
        //   inputRef.value = '';
            //  clearInput()
            return
    }
    if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
        return;
    }
  if (country.length > 2 && country.length < 10) {
        const markup = countryNameFlag(country);
        countryHolder.insertAdjacentHTML('afterbegin', markup)
        return;
    
    }
      
    if (country.status === 404) {
                Notiflix.Notify.failure('Oops, there is no country with that name');
            }
}

function onSearch(e) {
    // e.preventDefault();
 
    const searchCountry = e.target.value
    // countryHolder.innerHTML = '';

    fetchCountries(searchCountry)
    .then(renderCountriesCard)
 .catch(error => console.log(error))
        // .then(countries => {
           
        //     renderCountriesCard(countries)
        // })
        // .catch(error => console.log(error))
  
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