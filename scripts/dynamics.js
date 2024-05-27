let cssColors = ["Aqua", "Black", "Blue", "Fuchsia", "Gray", "Green", "Lime", "Maroon", "Navy", "Olive", "Purple", "Red", "Silver", "Teal", "White", "Yellow"];
let selectedColors = [];
for(let i=0; i<7; i++){
    let index = Math.floor(Math.random() * cssColors.length);
    selectedColors.push(cssColors[index]);
    cssColors.splice(index, 1);
let ulElement = document.createElement('ul');
selectedColors.forEach(color => {
    let liElement = document.createElement('li');
    

    liElement.innerText = color;
    

    liElement.style.color = color;
    
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);
