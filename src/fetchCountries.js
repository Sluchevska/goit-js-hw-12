

function fetchCountries(name){
fetch('https://restcountries.eu/rest/v2/name/${name}')
    .then(response => {
        return response.json();
    })
        .then(name => {
            console.log(name);
        })
    .then(error => {
        console.log(error);
    })
}