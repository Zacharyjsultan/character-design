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

export function createStatsString(headNum, middleNum, bottomNum) {
    return `You have changed the head ${headNum} times, the body ${middleNum} times, and the pants ${bottomNum} times. And nobody can forget your character's classic catchphrases:`;
}

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
const catchphrases = ['Holy Canolli!', 'GREAT SCOTT!', 'WHAT A CHUNGUS!'];


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
    const statsString = createStatsString(headCount, middleCount, bottomCount);
    
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of catchphrases) {
        const catchphrasesEl = document.createElement('p');
    }

    p.classList.add('catchphrase');
    p.textContent = catchphrase;

    catchphrasesEl.append('p');
}
