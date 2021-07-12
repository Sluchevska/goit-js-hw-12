

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

