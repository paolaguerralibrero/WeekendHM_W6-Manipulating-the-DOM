document.addEventListener('DOMContentLoaded', () => {   
    console.log('Dom has loaded');

const form = document.querySelector('form')
form.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function(event){
    event.preventDefault();

    const newPlantItem = createPlantItem(event.target);
    const plantList = document.querySelector('#plant-list');
    plantList.appendChild(newPlantItem);

    event.target.reset();

}

const createPlantItem = function (form) {
    const newPlantItem = document.createElement('li');
    newPlantItem.classList.add('plant-item');

    const name = document.createElement('h2');
    name.textContent = form.names.value;
    newPlantItem.appendChild(name)

    const species = document.createElement('h3');
    species.textContent = form.species.value;
    newPlantItem.appendChild(species)

    const origin = document.createElement('p');
    origin.textContent = form.origin.value;
    newPlantItem.appendChild(origin);
    
    return newPlantItem;
}











// const handleFormSubmit = function(event){
//     event.preventDefault();
//     const name = event.target.names.value;
//     console.log(event.target.names.value);
//     const nameElement = document.createElement('p')
//     nameElement.textContent = name
//     const namesList = document.querySelector('#names-list');
//     namesList.appendChild(nameElement);
// }