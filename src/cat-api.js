// cat-api.js

export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cat breeds.');
        }
        return response.json();
      })
      .then(data => {
        return data.map(breed => {
          return {
            id: breed.id,
            name: breed.name
          };
        });
      });
  }
  
export function fetchCatByBreed(breedId) {
    //const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    //'api_key=live_41i6SveXjchRpTWZglqfBlRTGUsxB2IfpZfHTW6DSkYdNVCFcelFWp8H2ftmv7Ie'
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_41i6SveXjchRpTWZglqfBlRTGUsxB2IfpZfHTW6DSkYdNVCFcelFWp8H2ftmv7Ie';
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cat by breed.');
        }
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          throw new Error('No cat found for the specified breed.');
        }
        return data[0].breeds[0];
      });
  }
  