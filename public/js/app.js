console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const locale = document.querySelector('#locale');
const weather = document.querySelector('#weather');

locale.textContent = '';
weather.textContent = '';

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  locale.textContent = 'loading...';
  weather.textContent = '';

  const location = search.value;
  url = `/weather?address=${location}`;

  fetch(url).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        locale.textContent = data.error;
        weather.textContent = '';
      } else {
        locale.textContent = data.location = data.location;
        weather.textContent = data.forecast;
      }
    });
  });
});
