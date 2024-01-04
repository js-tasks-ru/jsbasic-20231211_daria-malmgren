function makeDiagonalRed(table) {
  // Get the rows 
  let rows = table.rows;

  // Access diagonal cells in each row and make their color red
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.backgroundColor = 'red';
  }
}



