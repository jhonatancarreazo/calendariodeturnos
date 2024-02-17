/* const currentDate = document.querySelector('.current-date');
let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth();
const monts = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
const displayDate = () => {
    currentDate.innerText = `${monts[currentMonth]} ${currentYear}`;
}
 displayDate();
 const dt = DateTime.local(2017, 5, 15, 8, 30); */
 const currentDateElement = document.querySelector('.current-date');
 const calendarContainer = document.querySelector('.calendar');
 const currentTimeElement = document.querySelector('.time');

 function mostrarFechaYHora() {
     const now = luxon.DateTime.now();
     
     // Obtener la fecha en español
     const fechaEnEspañol = now.setLocale('es').toLocaleString(luxon.DateTime.DATE_MED);
     
     // Obtener el nombre del día de la semana en español
     const nombreDia = now.setLocale('es').toFormat('EEEE');

     // Obtener la hora en formato de 12 horas
     const horaEnFormato12Horas = now.toFormat('hh:mm:ss a');

     // Mostrar la fecha, el día de la semana y la hora en el elemento HTML correspondiente
     currentDateElement.textContent = `${nombreDia} ${fechaEnEspañol}`;
     currentDateElement.innerHTML = `${nombreDia} <strong>${fechaEnEspañol}</strong>`;
     currentTimeElement.textContent = `${horaEnFormato12Horas}`;
 }

 function mostrarCalendario() {
     const now = luxon.DateTime.now();
     const year = now.year;
     const month = now.month;
     const primerDiaDelMes = luxon.DateTime.local(year, month, 1);
     const ultimoDiaDelMes = primerDiaDelMes.endOf('month');

     // Limpiar el contenido anterior en el contenedor del calendario
     calendarContainer.innerHTML = '';

     // Definir los días con turnos
     const turnos = [18, 19, 20, 21, 22, 23]; // Ejemplo: turnos en los días 1, 3, 5, 8, 10 y 15

     // Crear elementos para los días del mes
     for (let day = 1; day <= ultimoDiaDelMes.day; day++) {
         const currentDay = primerDiaDelMes.plus({ days: day - 1 });
         const nombreDia = currentDay.setLocale('es').toFormat('EEEE'); // Obtener el nombre del día de la semana en español
         const dayElement = document.createElement('li');
         dayElement.classList.add('day'); 
         

         // Capitalizar el nombre del día
         const nombreDiaCapitalizado = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);

         // Agregar el nombre del día y el número del día al elemento del día
         dayElement.textContent = `${nombreDiaCapitalizado} ${day}`;

         // Verificar si el día tiene turno y agregar la clase correspondiente
         if (turnos.includes(day)) {
             dayElement.classList.add('turno3');
             dayElement.innerHTML =`${nombreDiaCapitalizado} ${day}` + " " + "<p class='turno'>turno 2</p>";
         }

         calendarContainer.appendChild(dayElement);
     }
 }

 // Mostrar la fecha y hora actual inicialmente
 mostrarFechaYHora();

 // Actualizar la fecha y hora cada segundo
 setInterval(mostrarFechaYHora, 1000);

 // Mostrar el calendario al cargar la página
 mostrarCalendario();