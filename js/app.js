document.addEventListener('DOMContentLoaded', () => {   
    console.log('Dom has loaded');

const form = document.querySelector('form')
form.addEventListener('submit', handleFormSubmit);

const deleteAllButton = document.querySelector('#delete-all');  
deleteAllButton.addEventListener('click', handleDeleteAllClick); 

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

    const description = document.createElement('p');
    description.textContent = form.description.value;
    newPlantItem.appendChild(description);
    
    return newPlantItem;
}


const handleDeleteAllClick = function (event) {
    const plantList = document.querySelector('#plant-list');
    plantList.innerHTML = '';
  }


