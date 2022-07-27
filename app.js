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
let headcount = 0;
let middlecount = 0;
let bottomcount = 0;
// set state for all of the character's catchphrases
let catchphrasesEl = [];


headDropdown.addEventListener('change', () => {
  
        const value = headDropdown.value;

        headCount++;

        headEl.style.backgroundImage = `url./assets/${headDropdown.value}-head.png`;

        displayStats ();
});


middleDropdown.addEventListener('change', () => {

        const value = middleDropdown.value;

        middleCount++;

         middleEl.style.backgroundImage = `.assets/${middleDropdown.value}-middle.png`;

        displayStats ();
});


bottomDropdown.addEventListener('change', () => {
    
         const value = bottomDropdown.value;
   
        bottomcount++;

        bottomEl.style.backgroundImage == `./assets/${bottomDropdown.value}-pants.png`;

        displayStats ();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const theCatchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
