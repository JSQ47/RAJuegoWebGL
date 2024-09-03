// guardar-pregunta.js

function GuardarPreguntaEnJS(id, pregunta, opcionesJson, respuestaCorrecta) {
    const opciones = JSON.parse(opcionesJson).opciones;

    // Guarda la pregunta en la base de datos de Firebase
    database.ref('preguntas/' + id).set({
        pregunta: pregunta,
        opciones: opciones,
        respuestaCorrecta: respuestaCorrecta
    }).then(function() {
        console.log('Pregunta guardada exitosamente');
    }).catch(function(error) {
        console.error('Error al guardar la pregunta:', error);
    });
}
