mergeInto(LibraryManager.library, {
    GetJSON: function(path, objectName, callback, fallback) {
        var parsedPath = UTF8ToString(path);
        var parsedObjectName = UTF8ToString(objectName);
        var parsedCallback = UTF8ToString(callback);
        var parsedFallback = UTF8ToString(fallback);

        try {
            firebase.database().ref(parsedPath).once('value').then(function(snapshot) {
                window.unityInstance.SendMessage(parsedObjectName, parsedCallback, JSON.stringify(snapshot.val()));
            });
        } catch (error) {
            window.unityInstance.SendMessage(parsedObjectName, parsedFallback, JSON.stringify(error, Object.getOwnPropertyNames(error)));
        }
    },

    GuardarPreguntaEnJS: function(id, pregunta, opcionesJson, respuestaCorrecta) {
        var parsedId = UTF8ToString(id);
        var parsedPregunta = UTF8ToString(pregunta);
        var parsedOpcionesJson = UTF8ToString(opcionesJson);
        var parsedRespuestaCorrecta = UTF8ToString(respuestaCorrecta);

        try {
            firebase.database().ref('preguntas').child(parsedId).set({
                pregunta: parsedPregunta,
                opciones: parsedOpcionesJson,
                respuestaCorrecta: parsedRespuestaCorrecta
            });
        } catch (error) {
            console.error('Error al ejecutar guardarPreguntaEnJS:', error);
        }
    }
});