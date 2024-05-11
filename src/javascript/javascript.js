document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('main');
    const addColumnButton = document.getElementById('addColumnButton');
    const adminHeader = document.querySelector('#main th');
    
    addColumnButton.addEventListener('click', () => {
        const rows = table.querySelectorAll('tr');
        rows.forEach((row, index) => {
            const newCell = row.insertCell(0);
            if (index === 0) {
                newCell.textContent = 'ادمین';
                newCell.addEventListener('click', () => {
                    newCell.textContent = ' ادمین جدید';
                });
            }
            else {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('form-checkbox', 'accent-red-500', 'bg-red-500', 'focus:ring-red-500', 'h-4', 'w-4')
                newCell.appendChild(checkbox);
            }
            newCell.classList.add('border-r', 'border-white');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownIcon = document.getElementById('dropdownIcon');
    const dropdownContent = document.getElementById('dropdownContent');

    dropdownIcon.addEventListener('click', () => {
        dropdownContent.classList.toggle('hidden');
    });
});

