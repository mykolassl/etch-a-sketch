const grid = document.querySelector('#grid');
let cols = prompt('How many columns?')
grid.style.cssText = `grid-template-columns: repeat(${cols}, 1fr)`

for(let i = 0; i < cols**2; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div);
}
