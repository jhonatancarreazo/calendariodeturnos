
# Funcionalidades de Fecha y Calendario

Este es un pequeño script en JavaScript que muestra la fecha y hora actual en español, así como un calendario con días señalados que tienen turnos programados.

## Uso

Simplemente agrega el siguiente código JavaScript a tu proyecto:
```markdown
```javascript
const currentDateElement = document.querySelector('.current-date');
const calendarContainer = document.querySelector('.calendar');
const currentTimeElement = document.querySelector('.time');

function mostrarFechaYHora() {
    // ... código de la función mostrarFechaYHora
}

function mostrarCalendario() {
    // ... código de la función mostrarCalendario
}

// Mostrar la fecha y hora actual inicialmente
mostrarFechaYHora();

// Actualizar la fecha y hora cada segundo
setInterval(mostrarFechaYHora, 1000);

// Mostrar el calendario al cargar la página
mostrarCalendario();
```

## Detalles

El script utiliza la librería Luxon para manipulación de fechas y horarios. Las principales funcionalidades incluyen:

- Mostrar la fecha y hora actual en español.
- Generar un calendario con los días del mes actual, indicando los días con turnos programados.

## Requisitos

La librería Luxon debe estar instalada en tu proyecto para su correcto funcionamiento.

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas de mejora o encuentras errores, no dudes en abrir un issue o enviar un pull request.

## Autor

Este código fue escrito por [Jhonatan Carreazo](https://www.linkedin.com/in/jhonatancarreazo/) 
## LinkedIn
¡Conéctame en LinkedIn para seguir en contacto y conocer más sobre mi experiencia y proyectos! [Jhonatan Carreazo](https://www.linkedin.com/in/jhonatancarreazo/)
