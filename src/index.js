import './sass/main.scss';

// import fetchCountries from './fetchCountries';
// import renderCountriesCard from './renderCountries';

const DEBOUNCE_DELAY = 300;
import countryCard from './countryCard.hbs'
const inputRef = document.getElementById('search-box');
console.log(inputRef)
const countryHolder = document.querySelector('country-list')

function renderCountriesCard(name) {
    const markup = countryCard(name);
    console.log(markup)
            countryHolder.insertAdjacentHTML('afterbegin', markup)
}

function fetchCountries(name){
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

    const form = e.currentTarget;
    const searchQuery = form.value
    console.log(searchQuery)


    fetchCountries(searchQuery)
        .then(renderCountriesCard)
        .catch(error => console.log(error))
    .finally(()=> form.reset())
    
}

inputRef.addEventListener('input', onSearch);