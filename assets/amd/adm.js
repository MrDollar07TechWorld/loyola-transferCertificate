// Your existing code for getting the source table, target table, and submit button elements
const sourceTable = document.querySelector('.form table');
const targetTable = document.querySelector('.disp table');
const submitButton = document.querySelector('button[type="submit"]');

// New functions
function storeData(data) {
  const existingData = localStorage.getItem('studentData');
  let studentData = existingData? JSON.parse(existingData) : [];
  studentData.push(data);
  localStorage.setItem('studentData', JSON.stringify(studentData));
}

function retrieveData() {
  const studentData = localStorage.getItem('studentData');
  if (studentData) {
    const data = JSON.parse(studentData);
    data.forEach((item) => {
      const newRow = targetTable.insertRow();
      Object.keys(item).forEach((key, index) => {
        const cell = newRow.insertCell();
        cell.textContent = item[key];
      });
      // Add a delete button to the new row
      const deleteButton = document.createElement('img');
      deleteButton.className = 'delete-button';
      deleteButton.src = 'delete.png'; // replace with your image URL
      deleteButton.alt = 'Delete';
      const deleteCell = newRow.insertCell();
      deleteCell.appendChild(deleteButton);
    });
  }
}

// Modified event listener for the submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = {};
  // Get the form data from the source table
  Array.prototype.forEach.call(sourceTable.rows, (row) => {
    const th = row.cells[0].textContent;
    const input = row.cells[2].querySelector('input');
    formData[th] = input.value;
  });
  // Store the form data in local storage
  storeData(formData);
  // Add the form data to the target table
  const newRow = targetTable.insertRow();
  Object.keys(formData).forEach((key, index) => {
    const cell = newRow.insertCell();
    cell.textContent = formData[key];
  });
  // Add a delete button to the new row
  const deleteButton = document.createElement('img');
  deleteButton.className = 'delete-button';
  deleteButton.src = '/assets/note app/delete.png'; // replace with your image URL
  deleteButton.alt = 'Delete';
  const deleteCell = newRow.insertCell();
  deleteCell.appendChild(deleteButton);
  alert("data added successfully");
});

// Add event listener to the delete button to delete the row
targetTable.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    const row = e.target.closest('tr');
    targetTable.deleteRow(row.rowIndex);
    alert("Data Deleted Successfully ")
    // Update local storage
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    const rowIndex = row.rowIndex - 1; // subtract 1 because the header row is not counted
    data.splice(rowIndex, 1);
    localStorage.setItem('studentData', JSON.stringify(data));
  }
});

// Retrieve data from local storage and display it
retrieveData();

let btndownload=document.getElementById("download");
let btnshow=document.getElementById("show");
let btnhide=document.getElementById("hide");

btnhide.addEventListener('click',()=>{
  document.querySelector(".disp").style.display="none";
  btndownload.style.display="none";
  btnshow.style.display="block";
  btnhide.style.display="none";

});

btnshow.addEventListener('click',()=>{
  document.querySelector(".disp").style.display="block";
  btndownload.style.display="block";
  btnshow.style.display="none";
  btnhide.style.display="block";

});


// to download as image/png


