function mostrarCalendario() {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth(); // Los meses en JavaScript van de 0 a 11

    const primerDiaDelMes = new Date(añoActual, mesActual, 1);
    const ultimoDiaDelMes = new Date(añoActual, mesActual + 1, 0); // Obtener el día anterior al primer día del siguiente mes

    const container = document.querySelector('.calendar');
    container.innerHTML = ''; // Limpiar cualquier contenido anterior en el contenedor

    // Crear elementos para los días del mes
    for (let dia = 1; dia <= ultimoDiaDelMes.getDate(); dia++) {
        const fecha = new Date(añoActual, mesActual, dia);
        const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' }); // Obtener el nombre del día de la semana

        const dayElement = document.createElement('li');
        dayElement.textContent = `${nombreDia.charAt(0).toUpperCase()}${nombreDia.slice(1)}, ${dia}`; // Capitalizar el nombre del día
        container.appendChild(dayElement);
    }
}

// Mostrar el calendario al cargar la página
mostrarCalendario();
