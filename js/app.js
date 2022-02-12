document.addEventListener('DOMContentLoaded', () => {   
    console.log('Dom has loaded');

const form = document.querySelector('form')
form.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function(event){
    event.preventDefault();
    const name = event.target.names.value;
    console.log(event.target.names.value);
    const nameElement = document.createElement('p')
    nameElement.textContent = name
    const namesList = document.querySelector('#names-list');
    namesList.appendChild(nameElement);
}