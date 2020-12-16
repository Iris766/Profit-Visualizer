const yearInput = document.getElementById('year');
const profitInput = document.getElementById('profit');
const form = document.querySelector('.form');

const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
const profit = [3040, 3400, 3000, 2500, 3200, 2500, 2800, 3500];

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        label: '# of Votes',
        data: profit,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  },
});

form.addEventListener('submit', function (e) {
  // prevent default behaviour
  e.preventDefault();
  // console.log(myChart);
  years.push(+yearInput.value);
  profit.push(+profitInput.value);
  myChart.update();
});
