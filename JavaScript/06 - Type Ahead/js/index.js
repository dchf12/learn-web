"use strict";
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
// 非同期にリソース取得
fetch(endpoint)
    .then((response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
})
    .then((data) => {
    cities.push(...data);
})
    .catch((e) => {
    console.error('fetch error', e);
});
function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
        // マッチするものだけを返す
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
        .map((place) => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
        .join('');
    assertIsDefined(suggestions);
    suggestions.innerHTML = html;
}
function assertIsDefined(val) {
    if (val === undefined || val === null) {
        throw new Error(`Expected 'val' to be defined, but received ${val}`);
    }
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
assertIsDefined(searchInput);
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
