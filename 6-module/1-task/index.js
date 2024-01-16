
export default class UserTable {
  constructor(rows) {
    this.elem = this.createTable(rows);
  }

  createTable(rows) {
    let table = document.createElement('table');

    // Make the table header
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');

    // Array of header column names
    let headerColumns = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];

    // Loop through header columns and create th elements
    headerColumns.forEach(columnName => {
      const th = document.createElement('th');
      th.textContent = columnName;
      headerRow.appendChild(th);
    });

    // Append the header row to the thead
    thead.appendChild(headerRow);

    // Append the thead to the table
    table.appendChild(thead);

    // Make the table body
    let tbody = document.createElement('tbody');

    // Loop through user data and create rows
    rows.forEach(userData => {
      // Make a row element
      let row = document.createElement('tr');

      // Loop through user data properties and create cells
      Object.values(userData).forEach(value => {
        let td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });

      // Make the delete button cell
      let deleteCell = document.createElement('td');
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';

      // Add click event listener to delete button
      deleteButton.addEventListener('click', function () {
        // Remove the row when somebody clicks the button
        row.remove();
      });

      // Append the delete button to the delete cell
      deleteCell.appendChild(deleteButton);

      // Append the delete cell to the row
      row.appendChild(deleteCell);

      // Append the row to the tbody
      tbody.appendChild(row);
    });

    // Append the tbody to the table
    table.appendChild(tbody);

    return table;
  }
}



