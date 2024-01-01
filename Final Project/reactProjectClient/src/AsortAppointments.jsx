import axios from 'axios';
// שלוף את כל הפגישות מהשרת



export default function AsortAppointments(){
  // שלוף את כל הפגישות מהשרת
const appointments = axios.get("http://localhost:8787/appointments").then(response => {
  // המתן עד שהנתונים מהשרת יקבלו
  return response.data;
}).then(appointments => {
  // מיין את הפגישות לפי תאריך
  appointments.sort((a, b) => a.date - b.date);

  // הצג את הפגישות למנהל
  const table = document.createElement("table");

  for (const appointment of appointments) {
    // יוצר שורה חדשה בטבלה
    const row = document.createElement("tr");

    // יוצר תא חדש בטבלה
    const tdName = document.createElement("td");
    tdName.textContent = appointment.name;

    // יוצר תא חדש בטבלה
    const tdDate = document.createElement("td");
    tdDate.textContent = appointment.date;

    // יוצר תא חדש בטבלה
    const tdTime = document.createElement("td");
    tdTime.textContent = appointment.time;

    // מוסיף את התאים לשורה
    row.appendChild(tdName);
    row.appendChild(tdDate);
    row.appendChild(tdTime);

    // מוסיף את השורה לדף
    table.appendChild(row);
  }

  document.body.appendChild(table);
});

 
}



function sortArr(arrCopy2) {
    
  return arrCopy2?.sort(function (a, b) {
    return new Date(b.dateTime) - new Date(a.dateTime);
  });
}
