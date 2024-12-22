function showPlaceholder(type) {
    const placeholder = document.getElementById(`${type}-placeholder`);
    placeholder.style.display = 'block';
}

function addItem(type) {
    const itemInput = document.getElementById(`${type}-item`);
    const amountInput = document.getElementById(`${type}-amount`);
    const list = document.getElementById(`${type}-list`);

    const itemName = itemInput.value.trim();
    const itemAmount = amountInput.value.trim();

    if (itemName && itemAmount) {
        const li = document.createElement('li');
        li.innerHTML = `${itemName} <span>$${parseFloat(itemAmount).toFixed(2)}</span>`;
        list.appendChild(li);

        // Clear input fields
        itemInput.value = '';
        amountInput.value = '';

        // Hide the placeholder
        document.getElementById(`${type}-placeholder`).style.display = 'none';
    } else {
        alert('Please enter both name and amount.');
    }
}

let isSalaryAdded = false;

        function handleSalary() {
            const input = document.getElementById("monthly-salary");
            const result = document.getElementById("salary-result");
            const container = document.getElementById("salary-container");
            const button = document.getElementById("action-button");
            const salary = input.value.trim();

            if (!isSalaryAdded) {
                // Add Salary
                if (salary) {
                    result.innerHTML = `Your salary is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><span style="font-size: 24px;">$${salary}</span>`;
                    input.style.display = "none"; // Hide input
                    button.textContent = "Update Salary"; // Change button text
                    container.removeChild(input.previousElementSibling); // Remove label
                    isSalaryAdded = true;
                } else {
                    result.textContent = "Please enter a valid salary.";
                }
            } else {
                // Update Salary
                result.textContent = "";
                const label = document.createElement("label");
                label.textContent = "Update Monthly Salary:";
                label.htmlFor = "monthly-salary";

                // Re-add input and label
                input.style.display = "block";
                input.placeholder = "Update your monthly salary";
                container.insertBefore(label, input);
                button.textContent = "Add Salary"; // Reset button text
                isSalaryAdded = false;
            }
        }