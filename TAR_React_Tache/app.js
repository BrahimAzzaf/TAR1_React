const countries = [ { name: 'United States', code: 1 }, { name: 'Canada', code: 2 },{ name: 'United Kingdom', code: 3 },{ name: 'France',
code: 4 },{ name: 'Germany', code: 5 },{ name: 'Morocco', code: 6 }];

// Reduce : Somme Des Codes 

const sommeCode = countries.reduce((code,country) => code + country.code, 0);
console.log(sommeCode); 


// Filter (Tableau) : 3 and More In code for each Country

const filterCountry = countries.filter(country => country.code > 3);
console.log(filterCountry);

// Map : Countries Name Only

const countryName = countries.map(country => country.name);
console.log(countryName);

// Countries Start With "U" 

// Countries Start With "U"
const countryStartsWithU = countries.filter(country => country.name.startsWith("U"));

console.log(countryStartsWithU);


// Push : Adding Country 

countries.push({ name: 'Japan', code: 7 });

console.log(countries);



// Pop : Remove The Last Country 

const removeCountry = countries.pop();

console.log(removeCountry);
console.log(countries);


// Splice : Remove the Last Object Country

const objectRemove = countries.findIndex(country => country.code === 6);
if (objectRemove !== -1) {
  countries.splice(objectRemove, 1);
}

console.log(countries);

// Slice : First Three Countries


const firstCountries = countries.slice(0, 3);
console.log(firstCountries);

// Find : Country With code 2

const countryCode2 = countries.find(country => country.code === 2);

console.log(countryCode2);

// Find : Country With code 2

const countryCode5 = countries.some(country => country.code >= 5);
console.log(countryCode5);

// Every : Countries With Atleast 3 caracters  

const Characters = countries.every(country => country.name.length >= 3);
console.log(Characters)

// Some : Country contains canada 

const countryCanada = countries.some(country => country.name === 'Canada');
console.log(countryCanada)


// Trim : WhiteSpace Suppression  


const trimCountry = countries.map(country => ({ name: country.name.trim(), code: country.code })); 
console.log(trimCountry);



// LocalCompare : Table Ordre using Country Name 

const tableOrder = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log(tableOrder)


// At : Getting Country Index 2

const countryIndex = countries.at(2);
console.log(countryIndex)


// For : Showing Country names 

console.log('Countries :');
for (const country of countries) {
  console.log(country.name);
}


// Concat : Ajouter deux Object 

const addcountries = [
    { name: 'Australia', code: 7 },
    { name: 'China', code: 8 }
  ];
  
  console.log(addcountries);

  const combinedCountries = countries.concat(addcountries);
  console.log(combinedCountries);

//   join

const countriesString = countries.map(country => country.name).join(', ');
console.log(countriesString);

// Added Countries 

const countryString = 'Italy, Spain, Portugal';
const newCountries = countries.concat(countryString.split(', ').map(name => ({ name, code: -1 })));


// Shift: Remove the First Country
const removedCountry = countries.shift();

console.log(removedCountry);
console.log(countries);


// Unshift: Add a New Country at the Beginning
const newCountry = { name: 'KSA', code: 9 };
countries.unshift(newCountry);

console.log(countries);


// Filter, Map, and Sort: Countries with Code > 5, Sorted Descending
const filteredAndMappedCountries = countries
  .filter(country => country.code > 5)
  .map(country => ({ name: country.name, code: country.code }))
  .sort((a, b) => b.code - a.code);

console.log(filteredAndMappedCountries);