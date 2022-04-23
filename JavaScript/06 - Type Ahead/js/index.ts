const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

type City = {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
};
const cities: City[] = [];
// 非同期にリソース取得
fetch(endpoint)
  .then((response: Response): Promise<any> => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    cities.push(...data);
  })
  .catch((e: Error) => {
    console.error('fetch error', e);
  });

function findMatches(wordToMatch: string, cities: City[]) {
  return cities.filter((place) => {
    // マッチするものだけを返す
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(this: HTMLInputElement) {
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

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

assertIsDefined(searchInput);
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
