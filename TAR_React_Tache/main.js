const countries = [
  { name: 'United States', code: 1 },
  { name: 'Canada', code: 2 },
  { name: 'United Kingdom', code: 3 },
  { name: 'France', code: 4 },
  { name: 'Germany', code: 5 },
  { name: 'Morocco', code: 6 }
];

const countryNameInput = document.getElementById('countryName');
const countryCodeInput = document.getElementById('countryCode');
const countryTable = document.getElementById('countryTable');

// DISPLAY COUNTRIES IN TABLE :
function displayCountries() {
  const table = document.getElementById('countryTable');
  const tableBody = table.querySelector('tbody');
  
  // HEADER
  if (!table.tHead) {
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const nameHeader = headerRow.insertCell(0);
    const codeHeader = headerRow.insertCell(1);
    const actionHeader = headerRow.insertCell(2);

    nameHeader.textContent = 'Name';
    codeHeader.textContent = 'Code';
    actionHeader.textContent = 'Action';
  }

  // ROWS
  tableBody.innerHTML = '';

  countries.forEach(country => {
    const row = tableBody.insertRow();

    // COLUMNS
    const nameCell = row.insertCell(0);
    const codeCell = row.insertCell(1);

    // DISPLAY
    nameCell.textContent = country.name;
    codeCell.textContent = country.code;

    // BUTTONS
    const actionCell = row.insertCell(2);

    // DELETE
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteCountry(country.code));
    actionCell.appendChild(deleteButton);

    // EDIT
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editCountry(country.code));
    actionCell.appendChild(editButton);
  });
}


// ADD COUNTRY USING INPUT TO TABLE
function addCountry() {
  const name = countryNameInput.value;
  const code = parseInt(countryCodeInput.value);

  if (name && !isNaN(code)) {
    countries.push({ name, code });
    saveCountries();
    displayCountries();
  }

}

// DELETE COUNTRY BUTTON 
function deleteCountry(code) {
  const index = countries.findIndex(country => country.code === code);
  if (index !== -1) {
    countries.splice(index, 1);
    saveCountries();
    displayCountries();
  }
}

// EDIT COUNTRY BUTTON 
function editCountry(code) {
  // FINDINDEX:
  const index = countries.findIndex(country => country.code === code);

  if (index !== -1) {
    // UPDATED INFOS 
    const newName = prompt('Entrez le nouveau nom :', countries[index].name);
    const newCode = parseInt(prompt('Entrez le nouveau code :', countries[index].code));

    // UPDATE COUNTRY AND CODE
    if (newName && !isNaN(newCode)) {
      countries[index] = { name: newName, code: newCode };
      saveCountries();
      displayCountries();
    }
  }
}

// SAVE IN LOCAL STORAGE
function saveCountries() {
  localStorage.setItem('countries', JSON.stringify(countries));
}

// LOAD FROM LOCAL STORAGE
function loadCountries() {
  const savedCountries = JSON.parse(localStorage.getItem('countries'));
  if (savedCountries) {
    countries.length = 0;
    countries.push(...savedCountries);
  }
  displayCountries();
}


loadCountries();



// Axios 







// FETCH COUNTIES FROM URL

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      // 10 COUNTRIES
      const firstTenCountries = data.slice(0, 10);
      
      // LINK WITH HTML DOM
      const countryListElement = document.getElementById('countryList');
      
      // ADD TO THE LISTE
      firstTenCountries.forEach(country => {
        // CREATE <li> ELEMENT FOR EACH ADDED COUNTRY 
        const listItem = document.createElement('li');
        listItem.textContent = country.name.common;
        countryListElement.appendChild(listItem);
      });
    })
    .catch(error => console.error('Erreur lors de la récupération des données avec fetch :', error));
