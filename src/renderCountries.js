import countryCard from './countryCard.hbs'
const countryHolder = document.querySelector('country-list')

function renderCountriesCard(name) {
    const markup = countryCard(name);
            countryHolder.innerHTML = markup
}