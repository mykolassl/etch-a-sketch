const grid = document.querySelector('#grid');
const gridsizeInput = document.querySelector('#gridsize');
const gridsizeValue = document.querySelector('#gridsize-value');
const colorWheel = document.querySelector('#color-wheel');
let colorValue = '#000000';

// Changes label text value based on what is selected on range input.
gridsizeInput.addEventListener('input', (e) => {
    gridsizeValue.textContent = `${e.target.value}x${e.target.value}`;
});

// Changes what color should the grid items be.
colorWheel.addEventListener('change', (e) => {
    colorValue = e.target.value;
});

// When user releases range input, removes every child element from the grid, and sets up the grid
// columns to the value that was selected in range input.
gridsizeInput.addEventListener('change', (e) => {
    grid.replaceChildren();
    setupGrid(e.target.value);
})

function setupGrid(cols) {
    grid.style.cssText = `grid-template-columns: repeat(${cols}, 1fr)`

    for(let i = 0; i < cols**2; i++) {
        let div = document.createElement('div');

        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `${colorValue}`;
        });

        grid.appendChild(div);
    }
}

setupGrid(10)