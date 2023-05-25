import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
new SlimSelect({
    select: '#selectElement'
  })

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';


window.addEventListener('load', () => {
  const breedSelect = document.querySelector('.breed-select');
  const catInfoDiv = document.querySelector('.cat-info');
  const loader = document.querySelector('.loader');
  const errorElement = document.querySelector('.error');

  showLoader();

  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      hideLoader();
    })
    .catch(error => {
      console.error('Failed to fetch cat breeds:', error);
      showError('Failed to fetch cat breeds.');
     
      hideLoader();
    });


  breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

   
    showLoader();

    fetchCatByBreed(selectedBreedId)
      .then(cat => {
      
        const catImage = document.createElement('img');
        catImage.src = cat.url;
        catImage.alt = cat.name;

        const catName = document.createElement('h2');
        catName.textContent = cat.name;

        const catDescription = document.createElement('p');
        catDescription.textContent = cat.description;

        const catTemperament = document.createElement('p');
        catTemperament.textContent = `Temperament: ${cat.temperament}`;

       
        while (catInfoDiv.firstChild) {
          catInfoDiv.firstChild.remove();
        }

        catInfoDiv.appendChild(catImage);
        catInfoDiv.appendChild(catName);
        catInfoDiv.appendChild(catDescription);
        catInfoDiv.appendChild(catTemperament);

  
        hideLoader();
      })
      .catch(error => {
        console.error('Failed to fetch cat by breed:', error);
        showError('Failed to fetch cat by breed.');
       
        hideLoader();
      });
  });

  function showLoader() {
    loader.style.display = 'block';
  }

  function hideLoader() {
    loader.style.display = 'none';
  }

  function showError(message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
});
