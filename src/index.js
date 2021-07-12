import './sass/main.scss';

import fetchCountries from './fetchCountries';
import renderCountriesCard from './renderCountries';

const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
console.log(inputRef)




function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.value
    console.log(searchQuery)


    fetchCountries(searchQuery)
        .then(renderCountriesCard)
    .catch(error => console.log(error))
    
}

inputRef.addEventListener('input', onSearch);