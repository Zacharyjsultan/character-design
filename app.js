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



let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

const catchphrases = [];


headDropdown.addEventListener('change', () => {
  
    const value = headDropdown.value;

    headCount++;

    headEl.style.backgroundImage = `url(./assets/${headDropdown.value}-head.png)`;

    displayStats ();
});


middleDropdown.addEventListener('change', () => {

    const value = middleDropdown.value;

    middleCount++;

    middleEl.style.backgroundImage = `url(./assets/${middleDropdown.value}-middle.png)`;

    displayStats ();
});


bottomDropdown.addEventListener('change', () => {
    
    const value = bottomDropdown.value;
   
    bottomCount++;

    bottomEl.style.backgroundImage = `url(./assets/${bottomDropdown.value}-pants.png)`;

    displayStats ();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchphrase = catchphraseInput.value;

    catchphrases.push(newCatchphrase);

    catchphraseInput.value = '';


    displayCatchphrases();
});

function displayStats() {
    const statsString = createStatsString(headCount, middleCount, bottomCount);
    
    reportEl.textContent = statsString;
}

function displayCatchphrases() {

    catchphrasesEl.textContent = '';

    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');
    

        catchphrasesEl.classList.add('catchphrase');
        catchphrasesEl.textContent = catchphrases;

        catchphrasesEl.append('p');

}
}

function createStatsString(headNum, middleNum, bottomNum) {
    return `You have changed the head ${headNum} times, the body ${middleNum} times, and the pants ${bottomNum} times. And nobody can forget your character's classic catchphrases:`;
}
