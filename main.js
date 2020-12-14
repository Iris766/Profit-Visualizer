const form = document.querySelector('.form');
const profitInput = document.getElementById('profit');
const yearInput = document.getElementById('year');

const profit = [];
const years = [];
// form input
form.addEventListener('submit', (e) => {
  // preventing default behaviour of form
  e.preventDefault();
  // push to arrays
  profit.push(profitInput.value);
  years.push(yearInput.value);
  // store to localstorage
  localStorage.setItem('profit', JSON.stringify(profit));
  localStorage.setItem('years', JSON.stringify(years));
});

// chart context
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: JSON.parse(localStorage.getItem('years')),
    datasets: [
      {
        label: 'Profit',
        data: JSON.parse(localStorage.getItem('profit')),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
