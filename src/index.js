import './sass/main.scss';

import fetxhCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
console.log(inputRef)




function onSearch(name) {
    name.preventDefault();
    console.log(name.currentTarget.value)
    const country = name.currentTarget.value
    fetchCountries(country)
    
}

inputRef.addEventListener('input', onSearch);