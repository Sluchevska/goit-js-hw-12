import './sass/main.scss';

import fetxhCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
console.log(inputRef)




function onSearch(e) {
    e.preventDefault();

    form = e.currentTarget;
    const searchQuery = form.elements.query.value


    fetchCountries(searchQuery)
        .then(renderCountriesCard)
    .catch(error => console.log(error))
    
}

inputRef.addEventListener('input', onSearch);