
// Variables to store chart and data
let chart;

// Chart data for different buttons
const chartData = {
  netWorth: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Net Worth ($)',
      data: [0, 50000, 100000, 250000, 400000, 600000, 700000, 750000, 800000, 850000, 900000, 1000000],
      borderColor: '#608BC1',
      // backgroundColor: 'rgba(51, 179, 166, 0.1)',
      backgroundColor: '#e4eef6',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#133E87',
      pointBorderColor: '#133E87',
      pointRadius: 5
    }]
  },
  assets: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Assets ($)',
      data: [50000, 70000, 120000, 300000, 450000, 650000, 800000, 850000, 900000, 950000, 970000, 1000000],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#4caf50',
      pointBorderColor: '#fff',
      pointRadius: 5
    }]
  },
  debt: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Debt ($)',
      data: [30000, 40000, 60000, 80000, 100000, 120000, 140000, 150000, 160000, 170000, 180000, 200000],
      borderColor: '#f44336',
      backgroundColor: 'rgba(244, 67, 54, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#f44336',
      pointBorderColor: '#fff',
      pointRadius: 5
    }]
  }
};

// Function to create a chart
function createChart(data) {
  const ctx = document.getElementById('lineChart').getContext('2d');

  // Destroy existing chart if present
  if (chart) {
    chart.destroy();
  }

  // Create a new chart
  chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          backgroundColor: data.datasets[0].borderColor,
          borderColor: '#fff',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#133E87'
          }
        },
        y: {
          grid: {
            color: '#eee'
          },
          ticks: {
            color: '#133E87',
            callback: (value) => `$${value.toLocaleString()}`,
            stepSize: 250000, // Interval between ticks
            max: 1000000      // Maximum value
          }
        }
      }
    }
  });
}

// Function to set the active button
function setActiveButton(buttonId) {
  document.querySelectorAll('.chart-buttons button').forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(buttonId).classList.add('active');
}

// Event listeners for buttons
document.getElementById('btnNetWorth').addEventListener('click', () => {
  setActiveButton('btnNetWorth');
  createChart(chartData.netWorth);
});

document.getElementById('btnAssets').addEventListener('click', () => {
  setActiveButton('btnAssets');
  createChart(chartData.assets);
});

document.getElementById('btnDebt').addEventListener('click', () => {
  setActiveButton('btnDebt');
  createChart(chartData.debt);
});

// Initialize with Net Worth data
createChart(chartData.netWorth);
setActiveButton('btnNetWorth');

// Doughnut Charts
const assetCtx = document.getElementById("assetChart").getContext("2d");
new Chart(assetCtx, {
  type: "doughnut",
  data: {
    labels: ["Savings", "Investments", "Real Estate"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#4caf50", "#2196f3", "#ffc107"],
      },
    ],
  },
});

const debtCtx = document.getElementById("debtChart").getContext("2d");
new Chart(debtCtx, {
  type: "doughnut",
  data: {
    labels: ["Mortgage", "Credit Card", "Loans"],
    datasets: [
      {
        data: [40, 40, 20],
        backgroundColor: ["#f44336", "#ff9800", "#9c27b0"],
      },
    ],
  },
});





 