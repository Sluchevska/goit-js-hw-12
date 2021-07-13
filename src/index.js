import './sass/main.scss';

// import fetchCountries from './fetchCountries';
// import renderCountriesCard from './renderCountries';

const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');
import countryCard from './countryCard.hbs'
const inputRef = document.getElementById('search-box');
console.log(inputRef)
const countryHolder = document.querySelector('.country-info')

function renderCountriesCard(name) {
    const markup = countryCard(name);
            countryHolder.innerHTML=markup
}




function fetchCountries(name) {
   
       return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
           .then(response => {
        return response.json();
    }) 
   

    // .then(renderCountriesCard)
    // .catch(error => {
    //     console.log(error);
    // })
}





function onSearch(e) {
    e.preventDefault();

  

    const form = e.target;
    const searchQuery = form.value
  
    fetchCountries(searchQuery)
        .then(renderCountriesCard)
        .catch(error => console.log(error))
       
        

    
    
}



inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));