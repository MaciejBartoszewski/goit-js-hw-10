import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      Authoryzation: {
        'x-api-key':
          'live_41i6SveXjchRpTWZglqfBlRTGUsxB2IfpZfHTW6DSkYdNVCFcelFWp8H2ftmv7Ie',
      },
    },
  }).then(response => {
    if (!response.ok) {
      Notify.failure(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        Authoryzation: {
          'x-api-key':
            'live_41i6SveXjchRpTWZglqfBlRTGUsxB2IfpZfHTW6DSkYdNVCFcelFWp8H2ftmv7Ie',
        },
      },
    }
  ).then(response => {
    if (!response.ok) {
      Notify.failure(response.status);
    }
    return response.json();
  });
}