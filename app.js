// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchphrases = [''];


headDropdown.addEventListener('change', () => {
  
    const headdrop = headDropdown.value;

    headCount++;

    headEl.style.backgroundImage = `url(./assets/${headDropdown.value}-head.png)`;

    displayStats ();
});


middleDropdown.addEventListener('change', () => {

    const middledrop = middleDropdown.value;

    middleCount++;

    middleEl.style.backgroundImage = `url(./assets/${middleDropdown.value}-middle.png)`;

    displayStats ();
});


bottomDropdown.addEventListener('change', () => {
    
    const bottomdrop = bottomDropdown.value;
   
    bottomCount++;

    bottomEl.style.backgroundImage = `url(./assets/${bottomDropdown.value}-pants.png)`;

    displayStats ();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const theCatchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphraseInput);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state

    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    const pTag = document.createElement('p');
    // and append that HTML element to the cleared-out DOM
    div.append(pTag);
}
