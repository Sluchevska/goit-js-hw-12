import countryCard from './countryCard.hbs'
const countryHolder = document.querySelector('country-list')

function fetchCountries(name){
fetch('https://restcountries.eu/rest/v2/name/${name}')
    .then(response => {
        return response.json();
    })
    // .then(renderCountriesCard)
    // .catch(error => {
    //     console.log(error);
    // })
}

function renderCountriesCard(name) {
    const markup = countryCard(name);
            countryHolder.innerHTML = markup
}