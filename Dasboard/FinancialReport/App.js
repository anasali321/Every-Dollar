 // Fetch data from backend (replace with your actual API call)
 fetch('/api/getFinancialReport')
 .then(response => response.json())
 .then(data => {
     // Populate data in the table
     document.getElementById('month').textContent = data.month;
     document.getElementById('monthlyIncome').textContent = data.monthlyIncome;
     document.getElementById('essentialExpenses').textContent = data.essentialExpenses;
     document.getElementById('optionalExpenses').textContent = data.optionalExpenses;
     document.getElementById('totalCost').textContent =
         parseFloat(data.essentialExpenses) + parseFloat(data.optionalExpenses);
     document.getElementById('goalsStatus').textContent =
         data.goalsAchieved + " / " + data.totalGoals;
 })
 .catch(error => {
     console.error('Error fetching data:', error);
 });

// Download Report (using a library like jsPDF)
document.getElementById('downloadReport').addEventListener('click', () => {
 // **Backend:** Generate PDF on the server-side and provide a download URL.
 // Frontend: Redirect to the download URL.
 window.location.href = '/api/downloadReport';
});