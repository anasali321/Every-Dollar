function calculateNetWorth() {
    // Calculate total assets
    const totalAssets = Array.from(document.querySelectorAll('#assets input[type="number"]'))
      .reduce((sum, input) => sum + parseFloat(input.value || 0), 0);

    // Calculate total debts
    const totalDebts = Array.from(document.querySelectorAll('#debts input[type="number"]'))
      .reduce((sum, input) => sum + parseFloat(input.value || 0), 0);

    // Calculate and display net worth
    const netWorth = totalAssets - totalDebts;

    // Update the totals on the page
    document.getElementById('totalAssets').textContent = `Total Assets: $${totalAssets.toFixed(2)}`;
    document.getElementById('totalDebts').textContent = `Total Debts: $${totalDebts.toFixed(2)}`;
    document.getElementById('netWorth').textContent = `Net Worth: $${netWorth.toFixed(2)}`;

    // Update header divs for real-time display of totals
    document.getElementById('headerTotalAssets').textContent = `$${totalAssets.toFixed(2)}`;
    document.getElementById('headerTotalDebts').textContent = `$${totalDebts.toFixed(2)}`;
    document.getElementById('headerNetWorth').textContent = `$${netWorth.toFixed(2)}`;
  }

  function addAsset() {
    const name = document.getElementById('newAssetName').value.trim();
    const value = parseFloat(document.getElementById('newAssetValue').value) || 0;

    if (name) {
      const assetSection = document.getElementById('assets');
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
        <label>${name}:</label>
        <input type="number" value="${value}">
      `;
      assetSection.insertBefore(newItem, assetSection.querySelector('.add-item'));
      document.getElementById('newAssetName').value = '';
      document.getElementById('newAssetValue').value = '';
    }
  }

  function addDebt() {
    const name = document.getElementById('newDebtName').value.trim();
    const value = parseFloat(document.getElementById('newDebtValue').value) || 0;

    if (name) {
      const debtSection = document.getElementById('debts');
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
        <label>${name}:</label>
        <input type="number" value="${value}">
      `;
      debtSection.insertBefore(newItem, debtSection.querySelector('.add-item'));
      document.getElementById('newDebtName').value = '';
      document.getElementById('newDebtValue').value = '';
    }
  }

  // Initialize by calculating the initial net worth
  calculateNetWorth();

  // Event listeners to calculate net worth on change
  document.querySelectorAll('#assets input, #debts input').forEach(input => {
    input.addEventListener('input', calculateNetWorth);
  });